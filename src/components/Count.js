import React, { useState } from 'react'

export default function Count() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div>
      <button onClick={Increment}>Increment</button>
      <h1>{count}</h1>
      <h1 className={isRed ? 'red' : ''}>Change my color!</h1>
    </div>
  )
}
