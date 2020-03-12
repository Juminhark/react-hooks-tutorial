import React, { useState, useEffect } from 'react'

function ForHook() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    console.log('will update username');
  },[username]);

  useEffect(() => {
    return function cleanup () {
      console.log('unmount');
    };
  },[]);

  const handleName = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleUsername = e => {
    const { value } = e.target;
    setUsername(value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={handleName} placeholder='name'/>
        <input value={username} onChange={handleUsername} placeholder='username'/>
      </div>
      <div>
        <div className='span-dispaly'>
          <span> {name} </span> 
        </div>
        <div className='span-dispaly'>
          <span > {username} </span>
        </div>
      </div>
    </div>
  )
}

export default function CleanupHook() {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShouldRender(false);
    }, 8000);
  }, []);

  return (
    <div>
      { shouldRender ? <ForHook /> : null }
    </div>
  );
}


  // useEffect( () => console.log("mount"), [] );
  // useEffect( () => console.log('will update username'),[username]);
  // useEffect( () => console.log("will update any") );

  // //cleanup
  // useEffect( () => () => console.log('will update username or unmount'),[username]);
  // useEffect( () => () => console.log('unmount'), [] );