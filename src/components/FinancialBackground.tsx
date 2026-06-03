"use client";

import { useEffect, useRef } from "react";

const POOL = [
  "$", "€", "£", "%", "+", "-", ".",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "143.5", "99.3", "0.5%", "8.2%", "12.4", "67.8",
  "BTC", "AI", "ML", "ROI", "APY", "P/E",
];

const ACCENT = "#4361EE";

export default function FinancialBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let columns: number[] = [];
    const fontSize = 13;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const { clientWidth, clientHeight } = parent;
      canvas.width = clientWidth * dpr;
      canvas.height = clientHeight * dpr;
      canvas.style.width = `${clientWidth}px`;
      canvas.style.height = `${clientHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Array(Math.floor(clientWidth / fontSize)).fill(0).map(() => Math.random() * -20);
    };

    const draw = () => {
      const { width, height } = canvas;
      const w = width / (window.devicePixelRatio || 1);
      const h = height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, w, h);

      ctx.font = `500 ${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;

      for (let i = 0; i < columns.length; i++) {
        const text = POOL[Math.floor(Math.random() * POOL.length)];
        const x = i * fontSize;
        const y = columns[i] * fontSize;

        ctx.globalAlpha = 0.08 + Math.random() * 0.12;
        ctx.fillStyle = ACCENT;
        ctx.fillText(text, x, y);

        if (y > h && Math.random() > 0.975) {
          columns[i] = 0;
        }
        columns[i] += 0.5 + Math.random() * 0.5;
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
