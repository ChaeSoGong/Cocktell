![header](https://capsule-render.vercel.app/api?type=transparent&height=300&section=header&text=Cocktell🍸&fontSize=90&fontColor=00994B)  

# 칵테일을 말하다 - CockTell  
## 🎬미리보기 (시연 영상)🎬

<!-- 칵텔 시연 영상 (배속, 저화질) -->  
https://github.com/ChaeSoGong/TeamProject-Cocktell/assets/108540812/a270d09d-91a2-4728-a20a-aef1f84682ba  

<br>  

## 📄프로젝트 소개📄
- 참여대회 : 2023 명지대학교 창의적 SW 프로그램 경진대회 (SW프로그램 개발 부문)
- 대회기간 : 2023.06.17 ~ 2023.08.24
- **프로젝트 목표** : 코로나19 이후 젊은층들의 홈텐딩(집에서 하는 바텐딩)의 인기가 증가하였는데,
  이러한 젊은층들에게 칵테일 레시피를 손쉽게 공유하고 칵테일에 대한 유익한 정보를 전달하는 웹사이트를 구축하는 것 
- **주요기능** : 다양한 칵테일 레시피 제공, 창의적인 커스텀(유저) 레시피 제공, 집에 있는 재료들로 만들 수 있는 칵테일 레시피 제공,
  칵테일 알코올 도수 계산기, 사용자가 입력하는 기분에 따라 그에 맞는 칵테일을 추천해주는 칵텔AI 서비스, 유저 커뮤니티(추후구현) 

<br>  

## 👥프로젝트 참여자👥
- *FullStack Developer : 임채윤, 장소현*
  - 임채윤 : 메인 홈, 헤더, 배너, API 구축 (외부 데이터 가져오기 , 외부 API 활용 : Notion API, openAI API)
  - 장소현 : 네비게이션바, 로그인 페이지
- *Design advice : 김동환*

> 임채윤 (Chaeyun Lim : GitHub Page => https://github.com/ChaeDoll)

> 장소현 (Sohyeon Jang : GitHub Page => https://github.com/Jang-SoHyeon)  

<br>

## ⚙사용 기술 (언어, 도구 및 데이터베이스)⚙
### FrontEnd
<img alt="Html" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> &nbsp;<img alt="Css" src ="https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/> &nbsp;<img alt="JavaScript" src ="https://img.shields.io/badge/JavaScriipt-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/> &nbsp;
<img alt="React" src ="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=black"/> &nbsp;<img alt="Next.js" src ="https://img.shields.io/badge/Next.js-000000.svg?&style=for-the-badge&logo=Next.js&logoColor=white"/>  

### BackEnd  
<img alt="Next.js" src ="https://img.shields.io/badge/Next.js-000000.svg?&style=for-the-badge&logo=Next.js&logoColor=white"/> &nbsp;<img alt="Notion" src ="https://img.shields.io/badge/Notion-000000.svg?&style=for-the-badge&logo=Notion&logoColor=white"/>  

### Tool
<img alt="Figma" src ="https://img.shields.io/badge/Figma-F24E1E.svg?&style=for-the-badge&logo=Figma&logoColor=white"/> &nbsp;<img alt="Postman" src ="https://img.shields.io/badge/Postman-FF6C37.svg?&style=for-the-badge&logo=Postman&logoColor=white"/> &nbsp;<img alt="Netlify" src ="https://img.shields.io/badge/Netlify-00C7B7.svg?&style=for-the-badge&logo=Netlify&logoColor=white"/>

- Language : Next.js(React 기반 풀스택 기술 언어)
- DataBase : Notion API (https://www.notion.so/CockTell-DataBase-d0118987948a4e8c883822e12d0dd60b)
- Tool : Figma(디자인 협업 툴), PostMan(API 디자인 툴), Netlify(웹사이트 배포 툴)

<br>

## 구현 목표 체크리스
- [x] 메인 홈페이지 (배너, 레시피 미리보기, 커스텀레시피 미리보기, 칵테일 재료 미리보기) React-swiper 사용하여 구현
- [x] Open Ai API를 사용한 칵테일 AI 추천서비스 구현
- [x] 레시피 목록 페이지 구현
- [x] 레시피 목록 필터링 기능 구현 (술, 난이도, 도수, 맛)
- [x] 레시피 페이지 더보기 기능 구현
- [x] 레시피 상세페이지 구현
- [x] 레시피 상세페이지 링크 클립보드로 공유 기능
- [x] 칵테일 이름, 설명, 맛, 재료 등으로 레시피 검색 기능 구현
- [x] 가지고 있는 재료를 체크하여 제작 가능한 레시피를 찾는 '나의 냉장고' 페이지 구현 
- [x] 칵테일 알코올 도수 계산기 구현
- [x] 자체 회원가입 기능 구현
- [x] 회원가입 유효성 검사 기능 구현 (비밀번호 안전도, 닉네임 중복) 
- [ ] 자체 로그인 및 로그아웃 기능 구현
- [ ] 소셜 로그인 및 로그아웃 기능 구현
- [ ] 비밀번호 찾기 및 변경 구현
- [ ] 로그인 세션 (타임아웃) 구현
- [ ] 관리자 인터페이스 구현 (유저 관리 및 정보 확인)
- [ ] 커스텀 칵테일 레시피 작성 기능 구현 (글쓰기)
- [ ] 레시피 평가 작성 기능 구현 (댓글 쓰기)
- [ ] 사용자의 평가를 Open ai를 사용하여 선호도 분석 및 리뷰
- [ ] 레시피 페이지 혹은 댓글에 추천/비추천 기능 구현
- [ ] 칵테일 커뮤니티 구현 (로그인 된 회원은 로그인 및 댓글쓰기 가능) 

<br>

## 구현 사항
- FrontEnd
  - 메인 홈페이지 (배너, 레시피 미리보기, 커스텀레시피 미리보기, 칵테일 재료 미리보기) React-swiper 사용하여 구현
  - 레시피 목록 페이지 구현
  - 레시피 페이지 더보기 기능 구현
  - 레시피 상세페이지 구현
  - 레시피 상세페이지 링크 클립보드로 공유 기능
  - 칵테일 알코올 도수 계산기 구현
  - 자체 회원가입 구현
  - 회원가입 유효성 검사 기능 구현 (비밀번호 안전도, 닉네임 중복) 
- BackEnd
  - Notion API를 사용한 데이터베이스 구축
  - Open Ai API를 사용한 칵테일 AI 추천서비스 구현
- FullStack
  - 레시피 목록 필터링 기능 구현 (술, 난이도, 도수, 맛)
  - 칵테일 이름, 설명, 맛, 재료 등으로 레시피 검색 기능 구현
  - 가지고 있는 재료를 체크하여 제작 가능한 레시피를 찾는 '나의 냉장고' 페이지 구현 
  
<br>

## 라이브러리
- React-swiper
- React-icons
- Tailwind CSS
- Open Ai
- Next Auth (추후 구현)

<br>

## 프로젝트 설치 및 실행방법
1. Github에서 현재 프로젝트 파일을 다운로드 받는다.
2. node.js를 16버전 이상으로 설치한다.
3. node.js가 설치되어 있는 터미널(cmd)을 준비한 뒤 프로젝트 파일 내부에 접근한다.
4. npm install을 입력하여 next.js를 포함한 라이브러리들을 다운로드 한다.
5. npm run dev (혹은 npm run build -> npm run start) 명령어로 프로젝트를 시작한다.
6. http://localhost:3000 를 주소창에 입력하여 프로젝트에 칵텔(CockTell)에 접근한다.

<br>

## 개발 현황
- 웹 페이지 : https://cocktellchaesogong.netlify.app/
- 개발 깃허브 페이지 : https://github.com/ChaeSoGong/cocktell-site

> 칵텔(CockTell) 프로젝트에 기재된 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
