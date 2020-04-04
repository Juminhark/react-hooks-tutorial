import React from 'react';
import './App.css';

import StateExample from './components/StateExample';
import WithClass from './components/WithClass';
import WithHook from './components/WithHook';
import CleanupHook from './components/CleanupHook'
import CleanupClass from './components/CleanupClass'
import UseInput from './components/UseInput';
import useFetch from './components/useFetch';
import User from './components/User';

function App() {
  const name = UseInput("");
  const { users, isLoading, isError } = useFetch('https://jsonplaceholder.typicode.com/users');
  return (
    <div>
      <h1>기본 hook</h1>
        <hr/>
        <h3>useState</h3>
        <StateExample/>
        <hr/>
        <h3>useEffect</h3>
          <h5>clean-up을 이용하지 않은 Effects</h5>
          <p>네트워크 리퀘스트, DOM 수동 조작, 로깅 등은 정리(clean-up)가 필요 없는 경우</p>
          <WithClass/>
          <p>class 안의 같은코드를 두개의 생명주기 메서드에서 공유하는것을 줄일수 있다.</p>
          <WithHook/>
          <h5>clean-up을 이용하는 Effects</h5>
          <p>class의 componentWillUnmount 처럼 Example component가 사라질때 cleanup() 실행.</p>
          <p><a href='https://stackoverflow.com/questions/55020041/react-hooks-useeffect-cleanup-for-only-componentwillunmount'>hooks-useeffect-cleanup-for-only-componentwillunmount</a></p>
          <div className='Example_place'>
          <CleanupHook />
          </div>
          <div className='Example_place'>
          <CleanupClass />
          </div>       
          <input {...name} placeholder="what is your name" />
          <hr/>

        <h3>useContext</h3>
      <hr/>

      
      
      
      
      

      

      <h1>data Fetch</h1>
      {isLoading && <h3>loading</h3>}
      {!isLoading && isError && <h3>{isError}</h3>}
      {!isLoading && users && 
        <div>
          {users.map(user=> (
            <User 
              key={user.id} 
              name={user.name} 
              username={user.username} 
              email={user.email} 
              phone={user.phone}
            /> 
          ))}
        </div>
      }
      <hr/>

      <h1>추가 Hooks</h1>
      <h3>useReducer</h3>
      <h3>useCallback</h3>
      <h3>useMemo</h3>
      <h3>useRef</h3>
      <h3>useImperativeHandle</h3>
      <h3>useLayoutEffect</h3>
      <h3>useDebugValue</h3>
    </div>
  );
}

export default App;


// {...name} => const name에 값이 할당되고 UseInput('입력된값') => UseInput은 value , onChanege를 반환 
// value={name.value} onChange={name.onChange} 
