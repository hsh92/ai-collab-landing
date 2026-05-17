# 실무에 바로 쓰는 AI 협업 — 모바일 랜딩 페이지

직장인을 위한 AI 실무 코칭·협업 방법을 소개하는 **모바일 우선** 개인 브랜딩 랜딩 페이지입니다.  
HTML, CSS, JavaScript만 사용하며 별도 빌드 도구 없이 바로 열 수 있습니다.

## 주요 기능

- 밝은 톤의 모바일 퍼스트 UI
- 가치 제안(히어로) + 주제 카드 3개 + 커피챗 CTA
- 스크롤 시 섹션 등장 애니메이션 (`prefers-reduced-motion` 존중)
- 접근성: 스킵 링크, 시맨틱 마크업, 포커스 링, 터치 타깃 44px 이상

## 프로젝트 구조

```
pr/
├── index.html    # 페이지 마크업
├── styles.css    # 스타일 (CSS 변수, 라이트 팔레트)
├── script.js     # 등장 애니메이션, 커피챗 링크 처리
├── run.bat       # Windows에서 브라우저로 바로 열기
└── README.md
```

## 로컬에서 실행

### Windows

1. **`run.bat` 더블클릭** — 기본 브라우저에서 `index.html` 실행
2. 또는 **`index.html` 더블클릭**
3. PowerShell / CMD:
   ```powershell
   Start-Process "C:\WorkSpace\Cursor\pr\index.html"
   ```

### Live Server (선택)

VS Code / Cursor에서 **Live Server** 확장을 쓰면 `index.html` 우클릭 → **Open with Live Server**로 미리보기할 수 있습니다.

## 콘텐츠 구성

| 섹션 | 설명 |
|------|------|
| 히어로 | 메인 타이틀, 서비스 개요, 한 줄 태그라인 |
| 주제 01 | AI 워크 스마트 — 실전 활용법 & 성공 사례 |
| 주제 02 | AI 동료 만들기 — No-code/Low-code 자동화 |
| 주제 03 | AI로 데이터 인사이트 발견 — 분석 & 시각화 |
| CTA | 커피챗 신청 (Google Forms) |

## 커스터마이징

### 메인 타이틀(이름/브랜드)

`index.html`의 `<h1 class="hero__title">` 텍스트를 수정합니다.

```html
<h1 class="hero__title">실무에 바로 쓰는 AI 협업</h1>
```

### 커피챗 URL

`index.html`에서 `id="coffee-chat"` 링크의 `href`를 변경합니다.

```html
<a
  id="coffee-chat"
  class="cta__button"
  href="https://forms.gle/n4NCLjnAt8mj51n4A"
  ...
>
```

### 색·간격

`styles.css` 상단 `:root` 변수를 수정합니다.

| 변수 | 용도 |
|------|------|
| `--color-bg` | 배경 |
| `--color-accent` | 포인트(링크, CTA, 강조) |
| `--color-text` | 본문 텍스트 |
| `--max-width` | 콘텐츠 최대 너비 (기본 28rem) |

### 폰트 (선택)

현재는 시스템 폰트(`Malgun Gothic` 등)를 사용합니다.  
Pretendard 등 웹폰트를 쓰려면 `index.html` `<head>`에 CDN 링크를 추가하세요.

## 배포

정적 파일만 있으므로 아래 중 하나로 배포할 수 있습니다.

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/) — 폴더 드래그 앤 드롭
- [Vercel](https://vercel.com/) — Static Site

루트에 `index.html`이 있으면 대부분의 호스팅에서 그대로 동작합니다.

## 기술 스택

- HTML5 (시맨틱: `header`, `main`, `section`, `article`, `footer`)
- CSS3 (모바일 퍼스트, CSS 변수, `clamp`, `prefers-reduced-motion`)
- Vanilla JavaScript (Intersection Observer)

## 브라우저 지원

최신 Chrome, Edge, Safari, Firefox 및 모바일 브라우저를 권장합니다.  
`IntersectionObserver` 미지원 환경에서는 애니메이션 없이 콘텐츠가 바로 표시됩니다.

## 라이선스

개인 브랜딩·포트폴리오 용도로 자유롭게 수정·배포하시면 됩니다.
