# PNS

반도체 업체 PNS 홈페이지

### 소개

부모님이 운영하는 회사 홈페이지

### 개발 일정

- 리뉴얼: 2023.08.20 ~

### 개발 환경

#### 언어

<div>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
</div>

#### 기술 스택

<div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
    <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/>
  <br />
    <img src="https://img.shields.io/badge/Emotion-BB6BB5.svg?style=flat-square&logo=emotion&logoColor=white"/>
    <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white"/>
    <!-- <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/> -->
    <!-- <img src="https://img.shields.io/badge/Zustand-brown?style=flat-square&logo=Zerply&logoColor=white"/>
    <img src="https://img.shields.io/badge/Recoil-blue?style=flat-square&logo=Recoil&logoColor=white"/>
    <img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=React Query&logoColor=white"/>
    <img src="https://img.shields.io/badge/React Hook Form-EC5990?style=flat-square&logo=reacthookform&logoColor=white"/>
    <img src="https://img.shields.io/badge/Sentry-362D59?style=flat-square&logo=sentry&logoColor=white"/> -->
</div>

#### 도구

<div>
    <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?&style=flat-square&logo=Visual%20Studio%20Code&logoColor=white" />
    <img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=flat-square&logo=yarn&logoColor=white" />
    <img src="https://img.shields.io/badge/ESLint-4B32C3.svg?&style=flat-square&logo=ESLint&logoColor=white" />
    <img src="https://img.shields.io/badge/Git-F05032.svg?&style=flat-square&logo=Git&logoColor=white" />
    <img src="https://img.shields.io/badge/github-%23121011.svg?style=flat-square&logo=github&logoColor=white" />
    <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=flat-square&logo=figma&logoColor=white" />
    <img src="https://img.shields.io/badge/Notion-%23000000.svg?style=flat-square&logo=notion&logoColor=white" />
    <img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=slack&logoColor=white" />
</div>

### 주요 UI

#### 홈페이지

<img width="1440" alt="스크린샷 2023-08-29 오전 8 30 18" src="https://github.com/kyubumjang/pns-fe/assets/33307948/5fd205f5-8617-40c2-8823-794ae575864a">

#### 회사 소개 페이지
<img width="1440" alt="스크린샷 2023-08-29 오전 8 32 38" src="https://github.com/kyubumjang/pns-fe/assets/33307948/8aaadcfc-aecb-4536-a720-23b799e990f1">

#### 주요 라이브러리

- 프레임워크: Next.js 12에 대한 학습(CSS-in-JS 기반으로 코드를 짜둬서 Next.js 13은 현재 이슈가 있으므로 12 버전 사용)
- 패키지 관리: Yarn
- 코드관리: Git, Github
- 컨벤션: Prettier, ESLint
- 스타일: CSS-in-JS로 Mui와 NextJS에 적용하기 쉬운 emotion 사용, 가장 익숙한 스타일 툴인 Emotion 사용
- 전역 상태관리: redux, redux toolkit의 익숙한 사용을 위해 redux로 상태 관리
- 비동기 과정 처리: Axios
- 폼 상태관리: React-hook-form
- 에러 나는 부분 확인 및 로그: Sentry

### 핵심 기능

- 회사 소개(완료)
- 제품 소개(진행 중)
- 공지사항(게시판 형식)
- 문의 사항(챗봇 형식)

### 기술적 고민

- 프로젝트 구조를 변경할 때 기존에 해둔 것을 기반으로 수정할 수 있는 부분이 있는지 검토(프로젝트 구조, 컴포넌트(Text, Button)) 후 리팩토링 대상 파악
- 주요 기술인 Next.js, redux 추가적으로 학습 후 적용
- 라이브러리를 추가 할 때 항상 의도를 가지고 설치할 수 있도록 고민함
- SEO를 적용하여 회사 검색시 노출될 수 있도록 관련 내용 학습 및 적용할 예정
- 제품을 3D 형식으로 보여주고 싶어 Three.js와 WebGL 관련 학습 및 적용해볼 예정
