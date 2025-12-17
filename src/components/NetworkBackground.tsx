import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';

interface NetworkBackgroundProps {
  lines?: number; // 0-10 scale for connection density
  distance?: number; // 0-10 scale for max connection distance
  className?: string;
}

interface Point {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  originalPosition: THREE.Vector3;
}

const NetworkBackground = ({ 
  lines = 3, 
  distance = 7,
  className = '' 
}: NetworkBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const linesRef = useRef<THREE.LineSegments | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const frameRef = useRef<number>(0);
  const scrollRef = useRef(0);

  // Map 0-10 scale to actual values
  const getMaxDistance = useCallback(() => {
    return 1.5 + (distance / 10) * 4; // Range: 1.5 to 5.5
  }, [distance]);

  const getPointCount = useCallback(() => {
    return Math.floor(30 + (lines / 10) * 120); // Range: 30 to 150 points
  }, [lines]);

  const initScene = useCallback(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 8;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create points
    createPoints();
  }, []);

  const createPoints = useCallback(() => {
    const pointCount = getPointCount();
    const points: Point[] = [];
    const spreadX = 15;
    const spreadY = 10;
    const spreadZ = 8;

    for (let i = 0; i < pointCount; i++) {
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * spreadX,
        (Math.random() - 0.5) * spreadY,
        (Math.random() - 0.5) * spreadZ
      );

      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.003
      );

      points.push({
        position: position.clone(),
        velocity,
        originalPosition: position.clone()
      });
    }

    pointsRef.current = points;
  }, [getPointCount]);

  const updateLines = useCallback(() => {
    if (!sceneRef.current) return;

    // Remove old lines
    if (linesRef.current) {
      sceneRef.current.remove(linesRef.current);
      linesRef.current.geometry.dispose();
      (linesRef.current.material as THREE.Material).dispose();
    }

    const maxDist = getMaxDistance();
    const positions: number[] = [];
    const colors: number[] = [];
    const points = pointsRef.current;

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dist = points[i].position.distanceTo(points[j].position);
        
        if (dist < maxDist) {
          const opacity = 1 - (dist / maxDist);
          
          positions.push(
            points[i].position.x, points[i].position.y, points[i].position.z,
            points[j].position.x, points[j].position.y, points[j].position.z
          );
          
          // Brand red gradient - brighter and more vibrant
          const gradientT = (points[i].position.y + 5) / 10; // 0 to 1 based on Y position
          const r1 = 0.9 + gradientT * 0.1; // Brighter red
          const g1 = 0.2 + gradientT * 0.25; // More orange variation
          const b1 = 0.2 + gradientT * 0.2;
          
          const gradientT2 = (points[j].position.y + 5) / 10;
          const r2 = 0.9 + gradientT2 * 0.1;
          const g2 = 0.2 + gradientT2 * 0.25;
          const b2 = 0.2 + gradientT2 * 0.2;
          
          // Increased opacity for brighter lines (40% instead of 25%)
          const glowOpacity = opacity * 0.45;
          colors.push(r1, g1, b1, glowOpacity);
          colors.push(r2, g2, b2, glowOpacity);
        }
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 4));

    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const lineSegments = new THREE.LineSegments(geometry, material);
    sceneRef.current.add(lineSegments);
    linesRef.current = lineSegments;
  }, [getMaxDistance]);

  const animate = useCallback(() => {
    if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;

    const points = pointsRef.current;
    const mouse = mouseRef.current;
    const spreadX = 7.5;
    const spreadY = 5;
    const spreadZ = 4;

    // Update point positions
    points.forEach(point => {
      // Apply velocity
      point.position.add(point.velocity);

      // Boundary checking - wrap around
      if (point.position.x > spreadX) point.position.x = -spreadX;
      if (point.position.x < -spreadX) point.position.x = spreadX;
      if (point.position.y > spreadY) point.position.y = -spreadY;
      if (point.position.y < -spreadY) point.position.y = spreadY;
      if (point.position.z > spreadZ) point.position.z = -spreadZ;
      if (point.position.z < -spreadZ) point.position.z = spreadZ;

      // Mouse/touch interaction
      if (mouse.active) {
        const mousePos = new THREE.Vector3(
          (mouse.x - 0.5) * 14,
          -(mouse.y - 0.5) * 10,
          2
        );
        
        const dist = point.position.distanceTo(mousePos);
        if (dist < 3) {
          const force = (3 - dist) / 3 * 0.02;
          const direction = point.position.clone().sub(mousePos).normalize();
          point.position.add(direction.multiplyScalar(force));
        }
      }
    });

    // Update lines
    updateLines();

    // Subtle camera movement + parallax based on scroll
    const scrollOffset = scrollRef.current * 0.003;
    cameraRef.current.position.x = Math.sin(Date.now() * 0.0001) * 0.5;
    cameraRef.current.position.y = Math.cos(Date.now() * 0.00015) * 0.3 - scrollOffset;
    cameraRef.current.rotation.x = scrollOffset * 0.1;

    rendererRef.current.render(sceneRef.current, cameraRef.current);
    frameRef.current = requestAnimationFrame(animate);
  }, [updateLines]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
      active: true
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.active = false;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    mouseRef.current = {
      x: (touch.clientX - rect.left) / rect.width,
      y: (touch.clientY - rect.top) / rect.height,
      active: true
    };
  }, []);

  const handleTouchEnd = useCallback(() => {
    mouseRef.current.active = false;
  }, []);

  const handleResize = useCallback(() => {
    if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
    
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    
    cameraRef.current.aspect = width / height;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(width, height);
  }, []);

  const handleScroll = useCallback(() => {
    scrollRef.current = window.scrollY;
  }, []);

  useEffect(() => {
    initScene();

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('touchmove', handleTouchMove, { passive: true });
      container.addEventListener('touchend', handleTouchEnd);
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Start animation
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      }
      
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);

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
    };
  }, [initScene, animate, handleMouseMove, handleMouseLeave, handleTouchMove, handleTouchEnd, handleResize, handleScroll]);

  // Recreate points when lines prop changes
  useEffect(() => {
    createPoints();
  }, [lines, createPoints]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 ${className}`}
      style={{ background: 'rgba(0, 0, 0, 0.3)' }}
    />
  );
};

export default NetworkBackground;
