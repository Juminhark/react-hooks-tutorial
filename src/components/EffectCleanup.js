import React, { useState, useEffect } from 'react'

function ForHook() {
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('will update name');
  },[name]);

  useEffect(() => {
    return function cleanup () {
      console.log('unmount');
    };
  },[]);

  const handleName = e => {
    const { value } = e.target;
    setName(value);
  };

  return (
    <div>
      <p>10초후에 사라집니다</p>
      <input value={name} onChange={handleName} placeholder='name'/>
      <div className='span-dispaly'>
        <span> {name} </span> 
      </div>
    </div>
  )
}

export default function CleanupHook() {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShouldRender(false);
    }, 10000);
  }, []);

  return (
    <div>
      { shouldRender ? <ForHook /> : <p>사라졌습니다 새로고침(f5)하세요</p> }
    </div>
  );
}


  // useEffect( () => console.log("mount"), [] );
  // useEffect( () => console.log('will update username'),[username]);
  // useEffect( () => console.log("will update any") );

  // cleanup
  // useEffect( () => () => console.log('will update username or unmount'),[username]);
  // useEffect( () => () => console.log('unmount'), [] );