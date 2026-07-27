<script lang="ts">
  import { base } from '$app/paths';
  import { i18n } from '$lib/i18n/index.svelte';
</script>

<svelte:head>
  <title>Vesper - {i18n.t.guide.title}</title>
</svelte:head>

<section class="pt-32 pb-24 px-6 relative z-10 max-w-4xl mx-auto space-y-20">
  <!-- Header -->
  <div class="text-center space-y-4">
    <h1 class="text-5xl md:text-6xl font-semibold tracking-tighter text-[#f5f5f7]">{i18n.t.guide.title}</h1>
    <p class="text-xl text-[#86868b] tracking-tight">{i18n.t.guide.subtitle}</p>
  </div>

  <!-- DSP Guide -->
  <div class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="w-10 h-10 rounded-2xl bg-indigo-500/20 flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>
      </div>
      <h2 class="text-3xl font-semibold tracking-tight text-[#f5f5f7]">{i18n.t.guide.dspTitle}</h2>
    </div>

    <div class="space-y-4">
      {#each i18n.t.guide.dspSteps as step}
        <div class="flex gap-6 p-8 rounded-[28px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-[60px]">
          <div class="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0 text-indigo-400 font-bold text-sm">
            {step.step}
          </div>
          <div>
            <h3 class="text-[#f5f5f7] font-semibold mb-2">{step.title}</h3>
            <p class="text-[#86868b] leading-relaxed text-[15px]">{step.desc}</p>
          </div>
        </div>
      {/each}
    </div>

    <div class="flex justify-center pt-4">
      <a href="{base}/dsp" class="px-8 py-3.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 font-semibold text-[15px] hover:bg-indigo-500/30 hover:scale-105 transition-all">
        DSP 다운로드 →
      </a>
    </div>
  </div>

  <!-- Divider -->
  <div class="border-t border-white/[0.06]"></div>

  <!-- Woofer Guide -->
  <div class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="w-10 h-10 rounded-2xl bg-violet-500/20 flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M12 18.364A9 9 0 1012 5.636m0 12.728V5.636"/></svg>
      </div>
      <h2 class="text-3xl font-semibold tracking-tight text-[#f5f5f7]">{i18n.t.guide.wooferTitle}</h2>
    </div>

    <div class="space-y-4">
      {#each i18n.t.guide.wooferSteps as step}
        <div class="flex gap-6 p-8 rounded-[28px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-[60px]">
          <div class="w-10 h-10 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center shrink-0 text-violet-400 font-bold text-sm">
            {step.step}
          </div>
          <div>
            <h3 class="text-[#f5f5f7] font-semibold mb-2">{step.title}</h3>
            <p class="text-[#86868b] leading-relaxed text-[15px]">{step.desc}</p>
          </div>
        </div>
      {/each}
    </div>

    <div class="flex justify-center pt-4">
      <a href="{base}/woofer" class="px-8 py-3.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-400 font-semibold text-[15px] hover:bg-violet-500/30 hover:scale-105 transition-all">
        Woofer 다운로드 →
      </a>
    </div>
  </div>
</section>
