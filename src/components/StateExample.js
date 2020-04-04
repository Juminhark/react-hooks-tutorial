import React, { useState } from 'react'

export default function useStateExample() {

  const [count, setCount] = useState(0); 
  const [isRed, setRed] = useState(false);

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

// class state 갱신하기
// 기존 class component는 state를 가져오기 위해 this.state.count 를 사용
// <button onClick={() => this.setState({ count: this.state.count + 1 })}>