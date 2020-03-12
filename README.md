# react-hooks-tutorial

## [react 공식 doc](https://ko.reactjs.org/docs/hooks-intro.html) 

react 16.8.0 부터 hook 지원.

react_native v0.59 부터 hook 지원

# hook 특징

## Hook는 Class없이 React 기능들을 사용하는 방법을 알려줍니다.

선택적 사용 기존의 코드를 다시 작성할 필요 없이 일부의 컴포넌트들 안에서 Hook를 사용할 수 있습니다. 그러나 만약 당장 Hook이 필요 없다면, Hook를 사용할 필요는 없습니다.

100% 이전 버전과의 호환성 Hook는 호환성을 깨뜨리는 변화가 없습니다.

React에서 Class를 제거할 계획은 없습니다. Hook의 점진적 적용 전략에 대해 아래 영역 페이지에서 읽을 수 있습니다.

Hook는 알고 있는 React 컨셉을 대체하지 않습니다. 대신에, Hook는 props, state, context, refs, 그리고 lifecycle와 같은 React 개념에 좀 더 직관적인 API를 제공합니다. 또한 Hook는 이 개념들을 엮기 위해 새로운 강력한 방법을 제공합니다.


# useEffect

## useEffect가 하는 일은 무엇일까요? 
useEffect Hook을 이용하여 우리는 리액트에게 컴포넌트가 렌더링 이후에 어떤 일을 수행해야하는 지를 말합니다. 리액트는 우리가 넘긴 함수를 기억했다가(이 함수를 ‘effect’라고 부릅니다) DOM 업데이트를 수행한 이후에 불러낼 것입니다. 위의 경우에는 effect를 통해 문서 타이틀을 지정하지만, 이 외에도 데이터를 가져오거나 다른 명령형(imperative) API를 불러내는 일도 할 수 있습니다.

## useEffect를 컴포넌트 안에서 불러내는 이유는 무엇일까요? 
useEffect를 컴포넌트 내부에 둠으로써 effect를 통해 count state 변수(또는 그 어떤 prop에도)에 접근할 수 있게 됩니다. 함수 범위 안에 존재하기 때문에 특별한 API 없이도 값을 얻을 수 있는 것입니다. Hook은 자바스크립트의 클로저를 이용하여 리액트에 한정된 API를 고안하는 것보다 자바스크립트가 이미 가지고 있는 방법을 이용하여 문제를 해결합니다.

## useEffect는 렌더링 이후에 매번 수행되는 걸까요? 
네, 기본적으로 첫번째 렌더링과 이후의 모든 업데이트에서 수행됩니다.(나중에 effect를 필요에 맞게 수정하는 방법에 대해 다룰 것입니다.) 마운팅과 업데이트라는 방식으로 생각하는 대신 effect를 렌더링 이후에 발생하는 것으로 생각하는 것이 더 쉬울 것입니다. 리액트는 effect가 수행되는 시점에 이미 DOM이 업데이트되었음을 보장합니다.

