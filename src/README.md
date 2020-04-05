# hooks

## useState

```ts
  import React, { useState } from 'react'

  // state 변수 선언
  // [ <현재변수>, <갱신함수>]  = useState(<초기값>);

  const [count, setCount] = useState(0);

  // state 갱신하기

  const Increment = () => {
    setCount(count + 1);
  };
  
  //  함수 component는 state 변수 직접 사용

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={() => setCount(count -1 )}>Decrement</button>
    </div>
  )
```

## useEffect

* useEffect는 side effects(component 안에서 데이터를 가져오거나 dom을 직접 조작하는 작업)를 수행
* React class의 componentDidMount 나 componentDidUpdate, componentWillUnmount와 같은 목적으로 제공

```ts
import React, { useState, useEffect } from 'react'

const [count, setCount] = useState(0);

  // count state의 변화때만 side effect를 실행한다.

useEffect(() => {

  //  broser api를 이용해 document의 title을 변화

  document.title = `${count} times`;
},[count])

  // button click이 count state의 변화를 주고 useEffect는 count의 변화에 따라 side effect 실행 

return <button onClick={() => setCount(count + 1)}> + 1</button>
```

```ts
  useEffect( () => console.log("mount"), [] );
  useEffect( () => console.log('will update username'),[username]);
  useEffect( () => console.log("will update any") );

  //cleanup
  useEffect( () => () => console.log('will update username or unmount'),[username]);
  useEffect( () => () => console.log('unmount'), [] );
```

## useContext
* [`react - context`](https://ko.reactjs.org/docs/context.html#when-to-use-context)
* context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공
* [`useContext-tutorial`](https://www.youtube.com/watch?v=lhMKvyLRWo0)

```ts
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('black');


const theme = useContext(ThemeContext);


const style = {
  width: '24px',
  height: '24px',
  background: theme
};

```

useContext를 Context.Provider와 같이 사용

useContext로 전달한 인자는 context 객체 그자체
* 맞는 사용: useContext(MyContext)
*  틀린 사용: useContext(MyContext.Consumer)
*  틀린 사용: useContext(MyContext.Consumer)