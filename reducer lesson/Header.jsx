import {reducer, initialState} from './reducer';
import { useReducer } from 'react';

function Header() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
      <header>
        <button onClick={() => {
        dispatch({type:'ADD', payload:{id:3, name:'Jack'}})
        console.log(todos)
      }}>ADD</button>
      <button onClick={() => {
        dispatch({type:'DELETE'})
        console.log(todos)
      }}>DELETE</button>
        <h1>HEADER</h1>
      </header>
  );
}

export default Header;
