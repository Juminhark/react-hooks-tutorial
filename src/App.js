import React from 'react';
import './App.css';

import Count from './components/useStateExample';
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
        <h3>useState</h3>
        <useStateExample />
        <h3>useEffect</h3>
        <h3>useContext</h3>
      <hr/>

      <h1>Effect Hook</h1>
      <h3>clean-up을 이용하지 않은 Effects</h3>
      <p>네트워크 리퀘스트, DOM 수동 조작, 로깅 등은 정리(clean-up)가 필요 없는 경우</p>
      <WithClass />
      <p>class 안의 같은코드를 두개의 생명주기 메서드에서 공유하는것을 줄일수 있다.</p>
      <WithHook />

      <h3>clean-up을 이용하는 Effects</h3>
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

/* 
side effects :
component 안에서 데이터를 가져오거나 
dom을 직접 조작하는 작업 

useEffect는 side effects를 수행
React class의 componentDidMount 나 componentDidUpdate, 
componentWillUnmount와 같은 목적으로 제공

hook 사용 규칙 -- 
Hook은 그냥 JavaScript 함수이지만, 두 가지 규칙을 준수해야 합니다.
1. 최상위(at the top level)에서만 Hook을 호출해야 합니다. 
반복문, 조건문, 중첩된 함수 내에서 Hook을 실행하지 마세요.
2. React 함수 컴포넌트 내에서만 Hook을 호출해야 합니다. 
일반 JavaScript 함수에서는 Hook을 호출해서는 안 됩니다. 
(Hook을 호출할 수 있는 곳이 딱 한 군데 더 있습니다. 
  바로 직접 작성한 custom Hook 내입니다.)
*/
