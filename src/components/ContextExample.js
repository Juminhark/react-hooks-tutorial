import React,{ useContext} from 'react'
import { UserContext } from './Context'

export default function ContextExample() {

  const { value, setValue } = useContext(UserContext);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue('change Value')}>change value</button>
    </div>
  );
}
