# Vesper Web

Vesper DSP와 Vesper Woofer를 소개하고 배포하는 공식 웹사이트입니다.

## 제품

- **Vesper DSP**: Windows 전체 오디오를 헤드폰, 이어폰, 스피커에 맞게 보정
- **Vesper Woofer**: 메인 출력 딜레이와 서브우퍼 로우패스 필터 조절

## 기술 구성

- Next.js 16
- React 19
- TypeScript
- vinext / Cloudflare Workers

## 로컬 실행

Node.js 22.13 이상이 필요합니다.

```bash
npm ci
npm run dev
```

## 검증

```bash
npm test
npm run lint
```

프로덕션 웹사이트: [Vesper](https://vesper.minseok.online/)

## 오디오 소개 페이지

- `/`: DSP와 Woofer를 비교해 선택하는 제품 소개
- `/dsp`: 신호 경로, EQ, 헤드룸과 연결 방식
- `/woofer`: 두 출력 분기, 저음 필터, 메인 출력 딜레이
- `/harness`: 기존 페이지 보존 (이번 오디오 개편 대상에서 제외)

공통 디자인은 `app/components/audio.module.css`에서 관리합니다.
사이트의 필터 곡선과 타이밍은 설명용 도해이며 장치 측정 결과가 아닙니다.
설치 파일 버전과 URL은 `app/audio-products.ts`에서 함께 관리합니다.
릴리즈 시 실제 공개된 설치 파일을 확인한 뒤 둘을 같이 갱신하세요.

```bash
npm run build:pages
```

master 푸시 시 `.github/workflows/ci.yml`이 검사 후 GitHub Pages에 배포합니다.

## 오픈소스 안내 갱신

`/open-source`는 DSP, Woofer, 웹사이트의 직접 의존성과 개발 도구, 데이터·서체 출처를 안내합니다. 간접·플랫폼별 의존성을 포함한 바이너리 전체의 고지 파일은 아닙니다.

Python 3.11 이상과 소스 프로젝트의 잠금파일이 필요합니다.

```bash
node tooling/collect-open-source.mjs <vesper-source-root>
python tooling/collect-rust-notices.py <vesper-source-root>
```

첫 명령은 JSON과 고지 텍스트를 초기화하며, 두 번째 명령이 Rust 항목과 고지 텍스트를 추가합니다. 누락된 Rust 메타데이터는 crates.io의 해당 버전 아카이브에서 확인합니다. 업데이트 후 버전, 사용 범위와 데이터 출처를 다시 검토하세요.
