import React, { useState, useEffect} from 'react'

export default function WithHook() {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷
  useEffect(() => {
    console.log('WithHook component / useEffect / count change')
    // 브라우저 api를 이용해 문서의 타이틀을 업데이트
    document.title = `${count} times`;
  },[count])
  // useEffect는 랜더링 이후에 매번 수행.

  return (
    <div>
      <p>You can change title : {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

