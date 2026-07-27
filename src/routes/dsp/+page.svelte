<script lang="ts">
  import { onMount } from 'svelte';
  import { i18n } from '$lib/i18n/index.svelte';

  // GitHub 최신 릴리즈 에셋 URL을 동적으로 가져옵니다
  let downloadUrl = $state('https://github.com/minseokk77/vesper-dsp/releases/latest');
  let version = $state('');

  onMount(async () => {
    try {
      const res = await fetch('https://api.github.com/repos/minseokk77/vesper-dsp/releases/latest');
      const data = await res.json();
      version = data.tag_name ?? '';
      const asset = data.assets?.find((a: { name: string; browser_download_url: string }) =>
        a.name.endsWith('.exe') && !a.name.endsWith('.sig')
      );
      if (asset) downloadUrl = asset.browser_download_url;
    } catch {
      // 실패 시 releases/latest 페이지로 폴백
    }
  });
</script>

<svelte:head>
  <title>Vesper DSP - {i18n.t.dspDetail.title}</title>
</svelte:head>

<section class="pt-32 pb-24 px-6 relative z-10 max-w-4xl mx-auto space-y-16">
  <!-- Header -->
  <div class="text-center space-y-4">
    <h1 class="text-5xl md:text-7xl font-semibold tracking-tighter text-[#f5f5f7]">Vesper DSP</h1>
    <p class="text-xl text-[#86868b] tracking-tight">{i18n.t.dspDetail.title}</p>
  </div>

  <!-- Intro -->
  <div class="text-lg md:text-xl text-[#86868b] font-medium leading-relaxed text-center max-w-3xl mx-auto tracking-tight">
    {i18n.t.dspDetail.intro}
  </div>

  <!-- Features Detail -->
  <div class="grid md:grid-cols-2 gap-6">
    <div class="p-10 rounded-[32px] bg-white/[0.02] border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-[60px]">
      <h3 class="text-2xl font-semibold tracking-tight text-[#f5f5f7] mb-4">{i18n.t.dspDetail.box1Title}</h3>
      <p class="text-[#86868b] leading-relaxed font-medium text-[17px]">{i18n.t.dspDetail.box1Desc}</p>
    </div>
    <div class="p-10 rounded-[32px] bg-white/[0.02] border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-[60px]">
      <h3 class="text-2xl font-semibold tracking-tight text-[#f5f5f7] mb-4">{i18n.t.dspDetail.box2Title}</h3>
      <p class="text-[#86868b] leading-relaxed font-medium text-[17px]">{i18n.t.dspDetail.box2Desc}</p>
    </div>
  </div>

  <!-- Download -->
  <div class="flex flex-col items-center gap-3 pt-10">
    <a href={downloadUrl} download class="px-10 py-4 rounded-full bg-[#f5f5f7] text-black font-semibold text-[15px] tracking-wide hover:scale-105 active:scale-95 transition-transform flex items-center gap-2">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      {i18n.t.dspDetail.downloadBtn}
    </a>
    {#if version}
      <span class="text-xs text-[#86868b]">{version}</span>
    {/if}
  </div>
</section>
