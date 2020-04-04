# react-hooks-tutorial

## [`react hooks doc`](https://ko.reactjs.org/docs/hooks-intro.html) 

## tutorial
* [`Dev Ed - React Tutorial For Beginners`](https://www.youtube.com/watch?v=dGcsHMXbSOA)

## Hook의 개요 
* react 16.8 / react_native v0.59 부터 hook 지원
* hook을 이용하여 class 작성없이 상태 값과 react 기능 사용

## Hook 특징
* 기존 react 코드를 다시 작성할 필요없이 `일부 컴포넌트 안에서 hook사용`
* react props, state, context, refs, lifecycle 와 같은 개념을 좀 `더 직관적인 api로 제공`
* ` 컴포넌트로부터 상태 관련 로직을 추상화` 할수 있다 (독립적인 테스트와 재사용이 가능)
* Hook를 통해 `로직에 기반을 둔 작은 함수로 컴포넌트를 나눌 수 있다`(구독 설정 및 데이터를 불러오는 것과 같은 로직)  - 조금 더 예측 가능하도록 하기 위해 리듀서를 활용해 컴포넌트의 지역 상태 값을 관리하도록 할 수 있다
* `class없이 react기능들을 사용하는 방법을 알려준다` - 기존 class 사용에서 함수와 Class 컴포넌트들을 구별하고 각 요소를 언제 사용하는지는 숙련된 React 개발자 사이에서도 의견이 일치하지 않았고, class는 최근 사용되는 도구에도 많은 문제를 일으킨다.

## [`Hook의 규칙`](https://ko.reactjs.org/docs/hooks-rules.html)

Hook은 그냥 JavaScript 함수이지만, 두 가지 규칙을 준수해야 한다 
* 최상위(at the Top Level)에서만 Hook을 호출해야 한다 - 반복문, 조건문, 중첩된 함수 내에서 Hook을 실행하지 않는다
* React 함수 컴포넌트 내에서만 Hook을 호출 - * custom hook 내에서도 가능

## reference
* [`velog.io - react-hooks`](https://velog.io/@velopert/react-hooks)
* [`velopert - hooks.old`](https://gist.github.com/velopert/a94290c448162b99ad374631e376963c)
* [`rinae.dev - useEffect 가이드`](https://rinae.dev/posts/a-complete-guide-to-useeffect-ko)
* [`react-hooks-fetch-data`](https://www.robinwieruch.de/react-hooks-fetch-data)
