import { useEffect, useRef } from "react";

const DataVisualizationBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Data points for visualization
    const dataPoints: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];

    // Chart lines
    const chartLines: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      progress: number;
      color: string;
    }> = [];

    // Initialize data points
    for (let i = 0; i < 50; i++) {
      dataPoints.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: `hsl(217, 91%, ${Math.random() * 20 + 50}%)`,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    // Initialize chart lines
    for (let i = 0; i < 20; i++) {
      chartLines.push({
        x1: Math.random() * canvas.width,
        y1: Math.random() * canvas.height,
        x2: Math.random() * canvas.width,
        y2: Math.random() * canvas.height,
        progress: 0,
        color: `hsl(217, 91%, ${Math.random() * 30 + 40}%)`
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw floating data points
      dataPoints.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x <= 0 || point.x >= canvas.width) point.vx *= -1;
        if (point.y <= 0 || point.y >= canvas.height) point.vy *= -1;

        // Draw point
        ctx.save();
        ctx.globalAlpha = point.opacity;
        ctx.fillStyle = point.color;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw animated chart lines
      chartLines.forEach(line => {
        line.progress += 0.002;
        if (line.progress > 1) {
          line.progress = 0;
          // Reset line position
          line.x1 = Math.random() * canvas.width;
          line.y1 = Math.random() * canvas.height;
          line.x2 = Math.random() * canvas.width;
          line.y2 = Math.random() * canvas.height;
        }

        // Draw line with progress
        const currentX = line.x1 + (line.x2 - line.x1) * line.progress;
        const currentY = line.y1 + (line.y2 - line.y1) * line.progress;

        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = line.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
        ctx.restore();
      });

      // Draw bar chart simulation
      const barCount = 8;
      const barWidth = 30;
      const barSpacing = 80;
      const startX = canvas.width - (barCount * barSpacing) - 100;
      const baseY = canvas.height - 100;

      for (let i = 0; i < barCount; i++) {
        const height = Math.sin(Date.now() * 0.001 + i * 0.5) * 60 + 80;
        const x = startX + i * barSpacing;
        
        ctx.save();
        ctx.globalAlpha = 0.08;
        ctx.fillStyle = `hsl(217, 91%, ${60 + i * 5}%)`;
        ctx.fillRect(x, baseY - height, barWidth, height);
        ctx.restore();
      }

      // Draw grid lines
      ctx.save();
      ctx.globalAlpha = 0.03;
      ctx.strokeStyle = 'hsl(217, 91%, 60%)';
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += 100) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 100) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      ctx.restore();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default DataVisualizationBackground;