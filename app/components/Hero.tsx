"use client";

import { useLanguage } from "./LanguageProvider";
import { useEffect, useRef } from "react";

export function Hero() {
  const { language, copy } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bars = 48;
    const heights: number[] = Array.from({ length: bars }, () => Math.random() * 0.4 + 0.1);
    const targets: number[] = [...heights];
    let animFrame: number;

    const animate = () => {
      const W = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      const H = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.clearRect(0, 0, W, H);

      const gap = 4 * window.devicePixelRatio;
      const barW = (W - gap * (bars - 1)) / bars;

      for (let i = 0; i < bars; i++) {
        // Smooth transition to target height
        heights[i] += (targets[i] - heights[i]) * 0.08;
        if (Math.abs(heights[i] - targets[i]) < 0.005) {
          targets[i] = Math.random() * 0.7 + 0.05;
        }

        const x = i * (barW + gap);
        const h = heights[i] * H;
        const y = H - h;

        // Darker towards edges
        const dist = Math.abs(i - bars / 2) / (bars / 2);
        const alpha = 0.15 + (1 - dist) * 0.25;

        const grad = ctx.createLinearGradient(x, y, x, H);
        grad.addColorStop(0, `rgba(129, 140, 248, ${alpha})`); // indigo-400
        grad.addColorStop(1, `rgba(167, 139, 250, ${alpha * 0.4})`); // violet-400

        ctx.fillStyle = grad;
        const radius = Math.min(barW / 2, 4 * window.devicePixelRatio);
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(x, y, barW, h, [radius, radius, 0, 0]);
        } else {
          ctx.rect(x, y, barW, h); // fallback
        }
        ctx.fill();
      }

      animFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Audio Visualizer Canvas */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none opacity-80 z-0">
        <canvas ref={canvasRef} className="w-full h-full" style={{ width: '100%', height: '100%' }}></canvas>
      </div>

      <div className="relative z-10 space-y-6 max-w-4xl" style={{ marginTop: '80px' }}>
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-[#86868b] text-xs font-medium tracking-widest uppercase">
          {copy.hero.availability}
        </div>

        <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-none">
          <span className="text-[#f5f5f7]">{copy.hero.titleLineOne}</span><br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            {copy.hero.titleLineTwo}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[#86868b] font-medium max-w-2xl mx-auto leading-relaxed tracking-tight">
          {copy.hero.descriptionLineOne}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a 
            href="/dsp" 
            className="px-8 py-3.5 rounded-full bg-[#f5f5f7] text-black font-semibold text-[15px] hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 ease-out shadow-lg"
          >
            {language === 'ko' ? 'DSP 살펴보기' : 'Explore DSP'}
          </a>
          <a 
            href="/woofer" 
            className="px-8 py-3.5 rounded-full bg-[#f5f5f7] text-black font-semibold text-[15px] hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 ease-out shadow-lg"
          >
            {language === 'ko' ? 'Woofer 알아보기' : 'Discover Woofer'}
          </a>
          <a 
            href="/harness" 
            className="px-8 py-3.5 rounded-full bg-[#f5f5f7] text-black font-semibold text-[15px] hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 ease-out shadow-lg"
          >
            {language === 'ko' ? 'Harness 확인하기' : 'View Harness'}
          </a>
        </div>
      </div>
    </section>
  );
}
