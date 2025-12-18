import { useEffect, useRef } from 'react';

interface StaticNetworkBackgroundProps {
  className?: string;
  density?: number;
}

const StaticNetworkBackground = ({ 
  className = '',
  density = 60
}: StaticNetworkBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      drawNetwork();
    };

    const drawNetwork = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      
      ctx.clearRect(0, 0, width, height);

      // Generate random points
      const points: { x: number; y: number }[] = [];
      for (let i = 0; i < density; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height
        });
      }

      // Draw connections - using same peachy/salmon color as NetworkBackground
      const maxDist = 150;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.35;
            // Peachy/salmon/rust color matching the live NetworkBackground
            const gradientT = points[i].y / height;
            const r = Math.floor(180 + gradientT * 40); // 180-220 (less red)
            const g = Math.floor(80 + gradientT * 50);  // 80-130 (more green for peach)
            const b = Math.floor(70 + gradientT * 40);  // 70-110 (more blue)
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw points - peachy/salmon/rust color
      points.forEach(point => {
        const gradientT = point.y / height;
        const r = Math.floor(180 + gradientT * 40);
        const g = Math.floor(80 + gradientT * 50);
        const b = Math.floor(70 + gradientT * 40);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.6)`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
};

export default StaticNetworkBackground;