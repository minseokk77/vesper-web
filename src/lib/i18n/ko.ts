export const ko = {
  nav: {
    dsp: 'DSP',
    woofer: 'Woofer',
    guide: '설치 가이드',
    github: 'GitHub'
  },
  hero: {
    badge: 'Available for Windows',
    title1: 'The Ultimate',
    title2: 'Audio Ecosystem.',
    subtitle: '스튜디오급 디지털 신호 처리와 완벽한 서브우퍼 딜레이 동기화를 데스크톱에서 경험하세요.',
    btnDsp: 'DSP 알아보기',
    btnWoofer: 'Woofer 알아보기'
  },
  home: {
    dspTitle: 'Vesper DSP',
    dspDesc: '가상 오디오 케이블을 통한 시스템 전역 디지털 신호 처리기입니다. AutoEq 및 Spinorama와 완벽하게 연동되어 픽셀 단위의 정밀한 음향 보정을 제공합니다.',
    dspFeatures: ['가상 오디오 라우팅', 'AutoEQ & Spinorama 프로파일', '실시간 리샘플링'],
    wooferTitle: 'Vesper Woofer',
    wooferDesc: '서브우퍼 및 베이스 채널의 완벽한 딜레이 동기화 유틸리티입니다. 위상(Phase) 캔슬링을 해결하고 어떤 룸 어쿠스틱 환경에서도 완벽한 저음의 조화를 이끌어냅니다.',
    wooferFeatures: ['밀리초 단위 정밀 딜레이 싱크', '커스텀 크로스오버 및 컷오프 필터', 'DSP와 완벽한 연동'],
    faqTitle: '자주 묻는 질문',
    faq: [
      { q: '무료로 사용할 수 있나요?', a: '네, Vesper DSP와 Woofer 모두 개인 및 비상업적 목적으로 완전히 무료로 제공됩니다.' },
      { q: '어떤 Windows 버전이 필요한가요?', a: 'Windows 10 (64비트) 이상이 필요합니다. Windows 11에서 최적화되어 있습니다.' },
      { q: 'DSP와 Woofer를 함께 사용해야 하나요?', a: '각각 독립적으로 사용할 수 있습니다. 하지만 함께 사용하면 훨씬 더 완벽한 오디오 경험을 제공합니다.' },
      { q: '설치 후 가상 오디오 케이블이 필요한가요?', a: 'Vesper DSP는 자체적으로 VB-Cable을 자동 설정합니다. 별도로 설치할 필요가 없습니다.' }
    ]
  },
  dspDetail: {
    title: '시스템 전역 음향 보정 (System-Wide Acoustic Correction)',
    intro: 'Vesper DSP는 단순한 이퀄라이저가 아닙니다. Windows 시스템 전체의 오디오 출력을 가상 오디오 케이블을 통해 캡처하고, 초저지연 환경에서 실시간으로 사운드를 재구성합니다.',
    box1Title: 'AutoEq & Spinorama',
    box1Desc: '전 세계 9,000개 이상의 헤드폰/이어폰 측정 데이터를 기반으로 한 AutoEq 프로파일을 적용하여, 하드웨어의 물리적 한계를 뛰어넘는 플랫(Flat)한 레퍼런스 사운드를 경험할 수 있습니다.',
    box2Title: '실시간 프로세싱 (Real-time Processing)',
    box2Desc: 'Rust의 cpal 및 rubato 라이브러리를 활용하여, 윈도우 커널 스택을 우회하는 초고속 오디오 라우팅과 비동기 리샘플링을 제공합니다. 립싱크 어긋남이 전혀 없습니다.',
    downloadBtn: 'Windows용 DSP 다운로드',
    sysReqTitle: '시스템 요구사항',
    changelogTitle: '최근 변경사항',
    changelogEmpty: '변경사항을 불러오는 중...',
    totalDownloads: '누적 다운로드'
  },
  wooferDetail: {
    title: '완벽한 저역대 위상 정렬 (Perfect Bass Phase Alignment)',
    intro: 'Vesper Woofer는 스피커와 서브우퍼를 혼용하는 2.1채널 이상의 환경에서 발생하는 고질적인 위상(Phase) 캔슬링 문제를 소프트웨어적으로 완벽하게 해결합니다.',
    box1Title: '딜레이 동기화 (Delay Synchronization)',
    box1Desc: '청취자의 귀를 기준으로 메인 스피커와 서브우퍼 간의 소리 도달 시간차(Time Alignment)를 밀리초(ms) 단위로 보정하여 저역대 타격감을 극대화합니다.',
    box2Title: '크로스오버 필터링 (Crossover Filtering)',
    box2Desc: 'DSP 내부의 Biquad 필터를 통해 특정 주파수 대역(예: 80Hz)을 기준으로 서브우퍼가 담당할 대역을 깔끔하게 잘라내 부밍(Booming) 현상을 억제합니다.',
    downloadBtn: 'Windows용 Woofer 다운로드',
    sysReqTitle: '시스템 요구사항',
    changelogTitle: '최근 변경사항',
    changelogEmpty: '변경사항을 불러오는 중...',
    totalDownloads: '누적 다운로드'
  },
  guide: {
    title: '설치 가이드',
    subtitle: '단계별로 따라하면 5분 안에 완료됩니다.',
    dspTitle: 'Vesper DSP 설치',
    wooferTitle: 'Vesper Woofer 설치',
    dspSteps: [
      { step: '1', title: '설치 파일 다운로드', desc: '아래 DSP 페이지에서 최신 버전의 설치 파일(.exe)을 다운로드합니다.' },
      { step: '2', title: '설치 프로그램 실행', desc: '다운로드된 VesperDSP_x.x.x_x64-setup.exe를 실행합니다. Windows Defender SmartScreen 경고가 표시되면 "추가 정보" → "실행"을 클릭하세요.' },
      { step: '3', title: 'VB-Cable 자동 설치', desc: 'Vesper DSP가 필요한 가상 오디오 드라이버(VB-Cable)를 자동으로 설치합니다. 설치 중 UAC(관리자 권한) 승인이 필요합니다.' },
      { step: '4', title: '오디오 출력 장치 변경', desc: 'Windows 설정 → 소리 → 출력 장치를 "CABLE Input (VB-Audio Virtual Cable)"으로 변경합니다.' },
      { step: '5', title: '프로파일 적용', desc: 'Vesper DSP 앱에서 사용 중인 헤드폰/이어폰 모델을 검색하여 AutoEq 프로파일을 적용합니다. 완료!' }
    ],
    wooferSteps: [
      { step: '1', title: '설치 파일 다운로드', desc: '아래 Woofer 페이지에서 최신 버전의 설치 파일(.exe)을 다운로드합니다.' },
      { step: '2', title: '설치 프로그램 실행', desc: '다운로드된 VesperWoofer_x.x.x_x64-setup.exe를 실행합니다. SmartScreen 경고 시 "추가 정보" → "실행"을 클릭하세요.' },
      { step: '3', title: '오디오 장치 설정', desc: '앱 실행 후 메인 스피커와 서브우퍼 출력 장치를 각각 선택합니다.' },
      { step: '4', title: '딜레이 보정', desc: '화면의 안내에 따라 메인 스피커와 서브우퍼 간의 거리를 입력하거나, 직접 ms 값을 조정합니다.' },
      { step: '5', title: '크로스오버 설정', desc: '서브우퍼의 담당 주파수 대역(보통 80Hz)을 설정하면 완료됩니다!' }
    ]
  },
  footer: {
    copyright: '© 2026 minseokk77',
    repo: 'Private Monorepo',
    dspRel: 'DSP Releases',
    wooRel: 'Woofer Releases',
    license: '라이선스 (EULA)'
  },
  license: {
    title: '소프트웨어 라이선스 계약 (EULA)',
    subtitle: '최종 사용자 라이선스 계약 (End User License Agreement)',
    terms: [
      {
        title: '1. 소유권 및 저작권',
        content: 'Vesper DSP 및 Vesper Woofer(이하 "소프트웨어")에 대한 모든 권리, 소유권 및 지적 재산권은 개발자(minseokk77)에게 있습니다. 본 소프트웨어는 판매되는 것이 아니며, 본 계약에 따라 사용이 허락되는 것입니다. (All Rights Reserved)'
      },
      {
        title: '2. 허가된 사용',
        content: '본 소프트웨어는 개인적이고 비상업적인 목적으로만 무료로 사용할 수 있습니다. 어떠한 경우에도 소프트웨어를 영리 목적으로 재판매하거나 재배포할 수 없습니다.'
      },
      {
        title: '3. 제한 사항',
        content: '귀하는 소프트웨어를 리버스 엔지니어링, 디컴파일, 디스어셈블하거나 소프트웨어의 소스 코드를 추출하려고 시도할 수 없습니다. 또한 소프트웨어의 일부 또는 전체를 수정하거나 파생 저작물을 생성할 수 없습니다.'
      },
      {
        title: '4. 보증 부인',
        content: '본 소프트웨어는 "있는 그대로(AS IS)" 제공되며, 상품성이나 특정 목적에의 적합성을 포함하여 어떠한 명시적 또는 묵시적 보증도 제공하지 않습니다. 소프트웨어 사용으로 인해 발생하는 모든 위험은 전적으로 사용자에게 있습니다.'
      }
    ]
  }
};
