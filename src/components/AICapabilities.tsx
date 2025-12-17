import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const capabilities = [
  { text: "Agentic Workflows", top: "5%", left: "5%", delay: 0.2, duration: 5 },
  { text: "Intelligent Scoring Systems", top: "8%", left: "55%", delay: 1.5, duration: 7 },
  { text: "Knowledge Retrieval Engines", top: "25%", left: "30%", delay: 0.8, duration: 6 },
  { text: "Multi-Agent Collaboration", top: "30%", left: "72%", delay: 2.2, duration: 5.5 },
  { text: "Automated Reporting & Insights", top: "48%", left: "8%", delay: 0.5, duration: 7.5 },
  { text: "Data Enrichment Layers", top: "52%", left: "58%", delay: 1.8, duration: 6.5 },
  { text: "Contextual Conversational AI", top: "70%", left: "25%", delay: 3, duration: 5 },
  { text: "Simulation & Practice Models", top: "72%", left: "68%", delay: 0.3, duration: 8 },
  { text: "Adaptive Learning Models", top: "90%", left: "12%", delay: 2.5, duration: 6 },
  { text: "Real-Time Interview Intelligence", top: "18%", left: "3%", delay: 1.2, duration: 7 },
  { text: "Profile Screening Intelligence", top: "88%", left: "52%", delay: 0.7, duration: 5.5 },
];

const WaveAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const drawWave = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      // Draw multiple wave layers
      const waves = [
        { amplitude: 20, frequency: 0.02, speed: 0.03, opacity: 0.15, yOffset: 0.3 },
        { amplitude: 15, frequency: 0.025, speed: 0.02, opacity: 0.1, yOffset: 0.5 },
        { amplitude: 25, frequency: 0.015, speed: 0.04, opacity: 0.08, yOffset: 0.7 },
      ];

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x++) {
          const y =
            height * wave.yOffset +
            Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 1.5) * wave.amplitude * 0.5;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, `hsla(357, 73%, 47%, ${wave.opacity})`);
        gradient.addColorStop(0.5, `hsla(357, 73%, 60%, ${wave.opacity})`);
        gradient.addColorStop(1, `hsla(357, 73%, 47%, ${wave.opacity})`);

        ctx.fillStyle = gradient;
        ctx.fill();
      });

      time += 1;
      animationId = requestAnimationFrame(drawWave);
    };

    resize();
    drawWave();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
};

const AICapabilities = () => {
  return (
    <section className="py-12 px-6 relative overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0">
        <WaveAnimation />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our AI Capabilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powering intelligent solutions across the enterprise
          </p>
        </motion.div>

        {/* Dispersed Text */}
        <div className="relative h-[320px] md:h-[300px]">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="absolute text-[11px] leading-tight md:text-base md:leading-normal font-medium text-foreground cursor-default transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)] max-w-[120px] md:max-w-none"
              style={{
                top: capability.top,
                left: capability.left,
                animation: `wiggle-subtle ${capability.duration}s ease-in-out infinite`,
                animationDelay: `${capability.delay}s`,
              }}
            >
              {capability.text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
