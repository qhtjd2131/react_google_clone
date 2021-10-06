# Google Front Clone Coding

## 소개

구글 메인 페이지(검색 페이지) 클론 코딩

### 시작하기

    "npm run start"

---

### 기술 스택

**1. HTML5**

**2. CSS3**

- media query 사용 (@media) (이번 프로젝트에서 처음 사용)
- global css 변수 사용 (:root) (이번 프로젝트에서 처음 사용)

**3. CRA (create-react-app)**
(automatically installed by CRA)

- webpack (bundler)
- babel
- others..

---

### 겪었던 어려움

#### 문제 1.

**내용** : 웹페이지 viewport의 크기에 따른 조건부 스타일변경이 필요했다.

**해결** : media query를 사용하여 max-width 조건을 지정하여 viewport의 크기변경에 따라 컴포넌트의 크기를 줄 일 수 있었다.

**기타** :
@media(width : 500px) {...} : width가 500px일 때
@media(max-width : 500px) {...} : width가 500px 미만일 때
@media(min-width : 500px) {...} : width가 500px 초과일 때

media query를 사용했을 때, 특정 조건이 만족되면 media query 내에서 정의해준 스타일로 모두 변경되는 것이 아니고 겹치는 속성만 변경해주고 나머지는 추가되었다. 즉, 완전한 IF문의 개념이 아니다. 예를 들어 아래와 같은 스타일이 정의되었을 경우를 보자.

```
.class_A{
	font-size : 10px;
}

@media (max-width : 200px) {
	.class_A{
		color : blue;
	}
}
```

class_A 라는 스타일클래스는 width가 200px 아래로 내려간다면, font-size는 10px로 유지되고, color : blue 속성이 추가된다.

#### 문제 2.

**내용** : '바로가기 추가' 버튼 클릭 시 다이얼로그 창이 화면에 랜더 될 때, 부가적인 CSS 스타일 효과(다이얼로그 외 컴포넌트 무효, 어두운 효과)를 클론하기.

**해결** : 결론적으로 해결하지 못하였다. (똑같은 스타일을 구현하지 못하였다.)

**기타** : 구글은 다이얼로그 창이 화면에 보여질 때, 다이얼로그창에 FOCUS 효과를 보여주기 위해 다이얼로그 창 외의 컴포넌트를 선택하지 못하고 어두운 효과를 적용했다. 하지만 라이브러리 없이 똑같은 효과를 구현하지 못하였고, 방법을 찾지 못하였다. 다음에 같은 문제를 마주한다면 react-modal 이나 material-ui 라이브러리를 사용하여 문제를 해결해야겠다.

---

### 향후 계획
1. 스타일링을 위한 다양한 방법 사용 (SCSS, SASS, Styled Components) 을 사용하여 클론코딩을 할것이다.

2. 라이브러리 없이 컴포넌트를 만드는데 익숙해지면, 다양한 라이브러리 (material-UI 등) 사용하여 효율적인 스타일링을 할것이다.