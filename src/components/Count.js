import React, { useState } from 'react'

export default function Count() {

  // 배열구조 분해 javascript문법
  // [ ] 를 사용하여 state변수 선언
  // 1번째 아이템은 현재 변수, 2번째 아이템은 해당 변수를 갱신해주는 함수

  const [count, setCount] = useState(0); 
  const [isRed, setRed] = useState(false);
  // useState() hook의 인자로 넘겨주는값은 state의 초기값

  const Increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div>
      <h3>state 가져오기</h3>
      <h3 className={isRed ? 'red' : ''}>{count}</h3>
      
      <h3>state 갱신하기</h3>
      <button onClick={Increment}>Increment</button>
      <button onClick={() => setCount(count -1 )}>Decrement</button>

    </div>
  )
}

// state 갱신하기
// 기존 class component는 state를 가져오기 위해 this.state.count 를 사용
// <button onClick={() => this.setState({ count: this.state.count + 1 })}>
// 함수 component는 count 로 직접 사용할수 있다.