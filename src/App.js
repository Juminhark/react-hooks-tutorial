import React, {useState} from 'react';
import Hello from './sayHello';
import Tweet from './Tweet';

function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  const [users, setUsers] = useState([

    { name: "ed", message: "hello"},
    { name: "john", message: "hi" },
    { name: "marry", message: "how are you" }
  ]);

  return (
    <div className='app'>

      <Hello />

      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
      
      <button onClick={Increment}>Increment</button>
      <h1>{count}</h1>

      <h1 className={isRed ? 'red' : ''}>Change my color!</h1>
    </div>
  );
}

export default App;
