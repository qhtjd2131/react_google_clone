소개
구글 메인페이지(검색페이지) 클론 코딩

시작하기
"npm run start"

기술스택 ( '-' : 사용된 스택, '*' : 이번에 처음으로 사용해본 스택)

1. React (create-react-app)

- webpack (bundler)
- babel
- CSS-module (css_loader)
  - CSS3
  * media query 사용 (@media)
  * global css 변수 사용 (:root)
- HTML5

겪었던 어려움
문제 1.
내용 : 웹페이지 viewport의 크기에 따른 조건부 스타일변경이 필요했다.
해결 : media query를 사용하여 max-width 조건을 지정하여 viewport의 크기변경에 따라 컴포넌트의 크기를 줄 일 수 있었다.
기타 : 
@media(width : 500px) {...} : width가 500px일 때
@media(max-width : 500px) {...} : width가 500px 미만일 때
@media(min-width : 500px) {...} : width가 500px 초과일 때

media query를 사용했을 때, 특정 조건이 만족되면 media query 내에서 정의해준 스타일로 모두 변경되는것이 아니고 겹치는 속성만 변경해주고 나머지는 추가되었다. 즉, 완전한 IF문의 개념이 아니다. 예를 들어 아래와 같은 스타일이 정의되었을 경우를 보자.

.class_A{
    font-size : 10px;
}

@media (max-width : 200px) {
    .class_A{
        color : blue;
    }
}

class_A 라는 스타일클래스는 width가 200px 아래로 내려간다면, font-size는 10px로 유지되고, color : blue 속성이 추가된다.

