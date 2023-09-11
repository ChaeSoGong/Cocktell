<h1 align="center">칵테일을 말하다 - Cocktell</h1>  

<br>  

## 웹사이트 미리보기 (시연 영상)  

<!-- 칵텔 시연 영상 (배속, 저화질) -->  
https://github.com/ChaeSoGong/TeamProject-Cocktell/assets/108540812/a270d09d-91a2-4728-a20a-aef1f84682ba  

<br>  

## 📄프로젝트 소개📄
- 참여대회 : 2023 명지대학교 창의적 SW 프로그램 경진대회 (SW프로그램 개발 부문)
- 대회기간 : 2023.06.17 ~ 2023.08.24
- 프로젝트 목표 : 코로나19 이후 젊은층들의 홈텐딩(집에서 하는 바텐딩)의 인기가 증가하였는데,
  이러한 젊은층들에게 칵테일 레시피를 손쉽게 공유하고 칵테일에 대한 유익한 정보를 전달하는 웹사이트를 구축하는 것 
- 주요기능 : 다양한 칵테일 레시피 제공, 창의적인 커스텀(유저) 레시피 제공, 집에 있는 재료들로 만들 수 있는 칵테일 레시피 제공,
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
- FrontEnd : HTML, CSS, JavaScript, React, Next.js
- BackEnd : Next.js
- DataBase : Notion API (https://www.notion.so/CockTell-DataBase-d0118987948a4e8c883822e12d0dd60b)
- Tool : Figma(디자인 협업 툴), PostMan(API 디자인 툴), Netlify(웹사이트 배포 툴)

<br>

## 프로젝트 실행방법
1. node.js가 설치되어 있는 터미널을 준비한 뒤 프로젝트 파일 내부에 접근한다.
2. npm install을 입력하여 next.js를 포함한 라이브러리들을 다운로드 한다.
3. npm run dev (혹은 npm run build -> npm run start) 명령어로 프로젝트를 시작한다.
4. http://localhost:3000 를 주소창에 입력하여 프로젝트에 칵텔(CockTell)에 접근한다.

<br>

## json Server 여는 방법
npx json-server --port 9999 --watch db.json

<br>

## 개발 현황
- 웹 페이지 : https://cocktellchaesogong.netlify.app/
- 개발 깃허브 페이지 : https://github.com/ChaeSoGong/cocktell-site


## (다른곳 추가) 업데이트 내역
- Version 0.0.1 - 2023.07.13 : Create New Homepage
- Version 0.0.2 - 2023.07.22 : Big Change in UI design
