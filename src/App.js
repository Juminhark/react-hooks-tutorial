import React, { useState } from 'react';
import Hello from './components/sayHello';
import Count from './components/Count';
import Tweet from './components/Tweet';
import './App.css';

function App() {

  const [ users ] = useState([
    { id: 1, name: "ed", message: "hello"},
    { id: 2, name: "john", message: "hi" },
    { id: 3, name: "marry", message: "how are you" }
  ]);

  return (
    <div>
      <Hello />
      <Count />
      
      <div className='app'>
        {users.map(user => (
          <Tweet key={user.id} name={user.name} message={user.message}/>
        ))}
      </div>
    </div>
  );
}

export default App;
