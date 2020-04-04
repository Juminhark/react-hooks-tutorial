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



