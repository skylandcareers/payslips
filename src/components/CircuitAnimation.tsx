import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { useScroll, useMotionValueEvent } from 'framer-motion';

interface CircuitAnimationProps {
  className?: string;
  containerRef?: React.RefObject<HTMLDivElement>;
}

interface CircuitPath {
  points: THREE.Vector3[];
  maxProgress: number; // Each path has a different max progress based on scroll
}

interface NodeDot {
  position: THREE.Vector3;
  activateAtProgress: number; // When this node should start glowing
}

const CircuitAnimation = ({ className = '', containerRef: externalContainerRef }: CircuitAnimationProps) => {
  const internalContainerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = internalContainerRef;
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const circuitPathsRef = useRef<CircuitPath[]>([]);
  const nodDotsRef = useRef<NodeDot[]>([]);
  const linesRef = useRef<THREE.LineSegments | null>(null);
  const nodePointsRef = useRef<THREE.Points | null>(null);
  const frameRef = useRef<number>(0);
  const scrollProgressRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  const { scrollYProgress } = useScroll({
    target: externalContainerRef,
    offset: ["start end", "end start"],
  });

  // Listen to scroll progress changes
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    scrollProgressRef.current = latest;
  });

  const generateCircuitPaths = useCallback((width: number, height: number) => {
    const paths: CircuitPath[] = [];
    const nodes: NodeDot[] = [];
    const gridSize = 40;

    // Create circuit-like paths starting from left edge
    for (let i = 0; i < 30; i++) {
      const startY = (Math.random() - 0.5) * height * 0.8;
      const points: THREE.Vector3[] = [];
      
      let x = -width / 2 - 50; // Start from left edge
      let y = startY;
      
      points.push(new THREE.Vector3(x, y, 0));
      
      // Create path segments moving generally right with circuit-like turns
      const segments = 10 + Math.floor(Math.random() * 10);
      for (let j = 0; j < segments; j++) {
        const moveRight = Math.random() > 0.3;
        
        if (moveRight) {
          x += gridSize * (1 + Math.random() * 2);
        } else {
          // Vertical segment
          const direction = Math.random() > 0.5 ? 1 : -1;
          y += direction * gridSize * (1 + Math.random());
          // Clamp y
          y = Math.max(-height / 2 * 0.8, Math.min(height / 2 * 0.8, y));
        }
        
        points.push(new THREE.Vector3(x, y, 0));
        
        // Add a turn point for right-angle effect
        if (j < segments - 1 && Math.random() > 0.5) {
          const turnRight = Math.random() > 0.5;
          if (turnRight) {
            x += gridSize * 0.5;
          } else {
            const turnDir = Math.random() > 0.5 ? 1 : -1;
            y += turnDir * gridSize * 0.5;
          }
          points.push(new THREE.Vector3(x, y, 0));
        }
        
        // Stop if we've gone past the right edge
        if (x > width / 2 + 50) break;
      }

      // Each path starts revealing at different scroll positions
      const maxProgress = 0.2 + Math.random() * 0.6; // Stagger when each path completes
      const pathStartScroll = i * 0.02;

      // Add nodes at intersection points (every few points)
      for (let p = 2; p < points.length; p += Math.floor(2 + Math.random() * 3)) {
        const nodeProgress = pathStartScroll + (p / points.length) * (maxProgress - pathStartScroll);
        nodes.push({
          position: points[p].clone(),
          activateAtProgress: nodeProgress,
        });
      }

      paths.push({
        points,
        maxProgress,
      });
    }

    nodDotsRef.current = nodes;
    return paths;
  }, []);

  const initScene = useCallback(() => {
    if (!canvasContainerRef.current) return;

    const width = canvasContainerRef.current.clientWidth;
    const height = canvasContainerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Orthographic camera for 2D circuit look
    const aspectRatio = width / height;
    const frustumSize = height;
    const camera = new THREE.OrthographicCamera(
      -frustumSize * aspectRatio / 2,
      frustumSize * aspectRatio / 2,
      frustumSize / 2,
      -frustumSize / 2,
      0.1,
      1000
    );
    camera.position.z = 10;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    canvasContainerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Generate circuit paths
    circuitPathsRef.current = generateCircuitPaths(width, height);
  }, [generateCircuitPaths]);

  const updateCircuit = useCallback(() => {
    if (!sceneRef.current) return;

    timeRef.current += 0.016; // Approximate 60fps time increment

    // Remove old lines
    if (linesRef.current) {
      sceneRef.current.remove(linesRef.current);
      linesRef.current.geometry.dispose();
      (linesRef.current.material as THREE.Material).dispose();
    }

    // Remove old node points
    if (nodePointsRef.current) {
      sceneRef.current.remove(nodePointsRef.current);
      nodePointsRef.current.geometry.dispose();
      (nodePointsRef.current.material as THREE.Material).dispose();
    }

    const positions: number[] = [];
    const colors: number[] = [];
    const currentScroll = scrollProgressRef.current;

    circuitPathsRef.current.forEach((path, pathIndex) => {
      // Calculate path progress based on scroll
      // Each path has a different start and end point
      const pathStartScroll = pathIndex * 0.02; // Stagger start
      const pathEndScroll = path.maxProgress;
      
      let pathProgress = 0;
      if (currentScroll > pathStartScroll) {
        pathProgress = Math.min(1, (currentScroll - pathStartScroll) / (pathEndScroll - pathStartScroll));
      }

      if (pathProgress <= 0) return;

      const totalLength = path.points.length - 1;
      const currentSegment = pathProgress * totalLength;

      for (let i = 0; i < path.points.length - 1; i++) {
        if (i > currentSegment) break;

        const start = path.points[i];
        const end = path.points[i + 1];
        
        let segmentProgress = 1;
        if (i === Math.floor(currentSegment)) {
          segmentProgress = currentSegment - i;
        }

        const actualEnd = new THREE.Vector3(
          start.x + (end.x - start.x) * segmentProgress,
          start.y + (end.y - start.y) * segmentProgress,
          0
        );

        positions.push(start.x, start.y, start.z);
        positions.push(actualEnd.x, actualEnd.y, actualEnd.z);

        // Enhanced glow effect - much brighter at the leading edge with fade
        const isLeadingEdge = i === Math.floor(currentSegment);
        const distanceFromEdge = Math.floor(currentSegment) - i;
        const fadeGlow = Math.max(0, 1 - distanceFromEdge * 0.15); // Gradual fade behind leading edge
        const baseOpacity = 0.3;
        const glowIntensity = isLeadingEdge ? 1.0 : baseOpacity + fadeGlow * 0.5;
        
        // Red theme color with enhanced glow at leading edge
        const glowBoost = isLeadingEdge ? 0.15 : 0;
        const r1 = Math.min(1, 0.85 + (pathIndex % 3) * 0.05 + glowBoost);
        const g1 = 0.15 + glowBoost * 0.3;
        const b1 = 0.2 + glowBoost * 0.2;
        
        const r2 = Math.min(1, 0.9 + (pathIndex % 3) * 0.03 + glowBoost);
        const g2 = 0.1 + glowBoost * 0.4;
        const b2 = 0.15 + glowBoost * 0.3;

        colors.push(r1, g1, b1, glowIntensity * 0.8);
        colors.push(r2, g2, b2, glowIntensity * 1.0);
      }
    });

    if (positions.length > 0) {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 4));

      const material = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        linewidth: 2
      });

      const lineSegments = new THREE.LineSegments(geometry, material);
      sceneRef.current.add(lineSegments);
      linesRef.current = lineSegments;
    }

    // Create pulsing node dots
    const nodePositions: number[] = [];
    const nodeSizes: number[] = [];
    const nodeColors: number[] = [];

    nodDotsRef.current.forEach((node) => {
      const isActive = currentScroll >= node.activateAtProgress;
      if (!isActive) return;

      // Calculate how long the node has been active
      const activeAmount = Math.min(1, (currentScroll - node.activateAtProgress) * 10);
      
      // Pulsing effect
      const pulsePhase = timeRef.current * 3 + node.position.x * 0.01;
      const pulse = 0.5 + 0.5 * Math.sin(pulsePhase);
      
      nodePositions.push(node.position.x, node.position.y, node.position.z);
      
      // Size pulses between 4 and 8
      const baseSize = 5 + pulse * 3;
      nodeSizes.push(baseSize * activeAmount);
      
      // Glowing red color with pulsing intensity
      const glowIntensity = 0.6 + pulse * 0.4;
      nodeColors.push(1.0, 0.2 + pulse * 0.15, 0.25, glowIntensity * activeAmount * 0.3);
    });

    if (nodePositions.length > 0) {
      const nodeGeometry = new THREE.BufferGeometry();
      nodeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(nodePositions, 3));
      nodeGeometry.setAttribute('size', new THREE.Float32BufferAttribute(nodeSizes, 1));
      nodeGeometry.setAttribute('color', new THREE.Float32BufferAttribute(nodeColors, 4));

      const nodeMaterial = new THREE.PointsMaterial({
        size: 6,
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: false,
      });

      const points = new THREE.Points(nodeGeometry, nodeMaterial);
      sceneRef.current.add(points);
      nodePointsRef.current = points;
    }
  }, []);

  const animate = useCallback(() => {
    if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;

    updateCircuit();
    rendererRef.current.render(sceneRef.current, cameraRef.current);
    frameRef.current = requestAnimationFrame(animate);
  }, [updateCircuit]);

  const handleResize = useCallback(() => {
    if (!canvasContainerRef.current || !rendererRef.current || !cameraRef.current) return;
    
    const width = canvasContainerRef.current.clientWidth;
    const height = canvasContainerRef.current.clientHeight;
    
    const aspectRatio = width / height;
    const frustumSize = height;
    
    cameraRef.current.left = -frustumSize * aspectRatio / 2;
    cameraRef.current.right = frustumSize * aspectRatio / 2;
    cameraRef.current.top = frustumSize / 2;
    cameraRef.current.bottom = -frustumSize / 2;
    cameraRef.current.updateProjectionMatrix();
    
    rendererRef.current.setSize(width, height);
    
    // Regenerate paths for new dimensions
    circuitPathsRef.current = generateCircuitPaths(width, height);
  }, [generateCircuitPaths]);

  useEffect(() => {
    initScene();
    window.addEventListener('resize', handleResize);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      window.removeEventListener('resize', handleResize);

      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (rendererRef.current.domElement.parentNode) {
          rendererRef.current.domElement.parentNode.removeChild(rendererRef.current.domElement);
        }
      }

      if (linesRef.current) {
        linesRef.current.geometry.dispose();
        (linesRef.current.material as THREE.Material).dispose();
      }

      if (nodePointsRef.current) {
        nodePointsRef.current.geometry.dispose();
        (nodePointsRef.current.material as THREE.Material).dispose();
      }
    };
  }, [initScene, animate, handleResize]);

  return (
    <div 
      ref={internalContainerRef} 
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
};

export default CircuitAnimation;
