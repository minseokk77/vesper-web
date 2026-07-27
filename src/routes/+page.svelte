<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { i18n } from '$lib/i18n/index.svelte';

  // 오디오 비주얼라이저 Canvas
  let canvas: HTMLCanvasElement;
  let animFrame: number;

  onMount(() => {
    const ctx = canvas.getContext('2d')!;
    const bars = 48;
    const heights: number[] = Array.from({ length: bars }, () => Math.random() * 0.4 + 0.1);
    const targets: number[] = [...heights];

    const animate = () => {
      const W = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      const H = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.clearRect(0, 0, W, H);

      const gap = 4 * window.devicePixelRatio;
      const barW = (W - gap * (bars - 1)) / bars;

      for (let i = 0; i < bars; i++) {
        // 부드럽게 타겟으로 이동
        heights[i] += (targets[i] - heights[i]) * 0.08;
        if (Math.abs(heights[i] - targets[i]) < 0.005) {
          targets[i] = Math.random() * 0.7 + 0.05;
        }

        const x = i * (barW + gap);
        const h = heights[i] * H;
        const y = H - h;

        // 중앙에서 멀수록 더 어둡게 → 그라데이션 효과
        const dist = Math.abs(i - bars / 2) / (bars / 2);
        const alpha = 0.15 + (1 - dist) * 0.25;

        const grad = ctx.createLinearGradient(x, y, x, H);
        grad.addColorStop(0, `rgba(129, 140, 248, ${alpha})`); // indigo-400
        grad.addColorStop(1, `rgba(167, 139, 250, ${alpha * 0.4})`); // violet-400

        ctx.fillStyle = grad;
        const radius = Math.min(barW / 2, 4 * window.devicePixelRatio);
        ctx.beginPath();
        ctx.roundRect(x, y, barW, h, [radius, radius, 0, 0]);
        ctx.fill();
      }

      animFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animFrame);
  });

  // FAQ 열림 상태
  let openFaq = $state(-1);
</script>

<svelte:head>
  <title>Vesper - The Ultimate Audio Ecosystem</title>
  <meta name="description" content="스튜디오급 DSP와 서브우퍼 딜레이 동기화를 데스크톱에서 경험하세요." />
</svelte:head>

<!-- Hero -->
<section class="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
  <!-- 오디오 비주얼라이저 -->
  <div class="absolute bottom-0 left-0 right-0 h-40 pointer-events-none opacity-80">
    <canvas bind:this={canvas} class="w-full h-full"></canvas>
  </div>

  <div class="relative z-10 space-y-6 max-w-4xl">
    <div class="inline-block px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-[#86868b] text-xs font-medium tracking-widest uppercase">
      {i18n.t.hero.badge}
    </div>

    <h1 class="text-6xl md:text-8xl font-semibold tracking-tighter leading-none">
      <span class="text-[#f5f5f7]">{i18n.t.hero.title1}</span><br />
      <span class="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
        {i18n.t.hero.title2}
      </span>
    </h1>

    <p class="text-lg md:text-xl text-[#86868b] font-medium max-w-2xl mx-auto leading-relaxed tracking-tight">
      {i18n.t.hero.subtitle}
    </p>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
      <a href="{base}/dsp" class="px-8 py-3.5 rounded-full bg-[#f5f5f7] text-black font-semibold text-[15px] hover:scale-105 active:scale-95 transition-transform">
        {i18n.t.hero.btnDsp}
      </a>
      <a href="{base}/woofer" class="px-8 py-3.5 rounded-full bg-white/[0.08] text-white font-semibold text-[15px] hover:bg-white/[0.12] hover:scale-105 active:scale-95 transition-all">
        {i18n.t.hero.btnWoofer}
      </a>
    </div>
  </div>
</section>

<!-- Product Cards -->
<section class="py-24 px-6 relative z-10">
  <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
    <!-- DSP Card -->
    <a href="{base}/dsp" class="group relative rounded-[32px] bg-white/[0.02] border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-[60px] p-10 overflow-hidden hover:scale-[1.02] transition-all duration-500 block hover:bg-white/[0.04]">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div class="relative z-10 flex flex-col h-full">
        <div class="w-10 h-10 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6">
          <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>
        </div>
        <h2 class="text-3xl font-semibold tracking-tight text-[#f5f5f7] mb-3">{i18n.t.home.dspTitle}</h2>
        <p class="text-[#86868b] leading-relaxed font-medium mb-10 text-[17px] tracking-tight group-hover:text-white/80 transition-colors">
          {i18n.t.home.dspDesc}
        </p>
        <ul class="space-y-4 mt-auto">
          {#each i18n.t.home.dspFeatures as feature}
            <li class="flex items-center gap-3 text-[15px] font-medium text-[#f5f5f7]/90"><span class="text-indigo-400">→</span> {feature}</li>
          {/each}
        </ul>
      </div>
    </a>

    <!-- Woofer Card -->
    <a href="{base}/woofer" class="group relative rounded-[32px] bg-white/[0.02] border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-[60px] p-10 overflow-hidden hover:scale-[1.02] transition-all duration-500 block hover:bg-white/[0.04]">
      <div class="absolute inset-0 bg-gradient-to-br from-violet-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div class="relative z-10 flex flex-col h-full">
        <div class="w-10 h-10 rounded-2xl bg-violet-500/20 flex items-center justify-center mb-6">
          <svg class="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M12 18.364A9 9 0 1012 5.636m0 12.728V5.636"/></svg>
        </div>
        <h2 class="text-3xl font-semibold tracking-tight text-[#f5f5f7] mb-3">{i18n.t.home.wooferTitle}</h2>
        <p class="text-[#86868b] leading-relaxed font-medium mb-10 text-[17px] tracking-tight group-hover:text-white/80 transition-colors">
          {i18n.t.home.wooferDesc}
        </p>
        <ul class="space-y-4 mt-auto">
          {#each i18n.t.home.wooferFeatures as feature}
            <li class="flex items-center gap-3 text-[15px] font-medium text-[#f5f5f7]/90"><span class="text-violet-400">→</span> {feature}</li>
          {/each}
        </ul>
      </div>
    </a>
  </div>
</section>

<!-- FAQ Section -->
<section class="py-24 px-6 relative z-10">
  <div class="max-w-3xl mx-auto">
    <h2 class="text-4xl font-semibold tracking-tighter text-[#f5f5f7] mb-12 text-center">{i18n.t.home.faqTitle}</h2>
    <div class="space-y-3">
      {#each i18n.t.home.faq as item, idx}
        <button
          onclick={() => openFaq = openFaq === idx ? -1 : idx}
          class="w-full rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-[60px] p-6 text-left hover:bg-white/[0.04] transition-all duration-300 block"
        >
          <div class="flex items-center justify-between gap-4">
            <span class="text-[#f5f5f7] font-medium text-[17px]">{item.q}</span>
            <span class="text-[#86868b] text-xl transition-transform duration-300 shrink-0 {openFaq === idx ? 'rotate-45' : ''}">+</span>
          </div>
          {#if openFaq === idx}
            <p class="mt-4 text-[#86868b] leading-relaxed text-[15px]">{item.a}</p>
          {/if}
        </button>
      {/each}
    </div>
  </div>
</section>
