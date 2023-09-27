import React from "react";
import { MyContext } from "./App";

export function Header() {

  let { todos, dispatch } = React.useContext(MyContext)

  console.log(todos)
  return (
    <header>
      <button onClick={() => {
        dispatch({ type: 'ADD', payload: { id: 3, name: 'Jack' } })
        console.log(todos)
      }}>ADD</button>
      <button onClick={() => {
        dispatch({ type: 'DELETE' })
        console.log(todos)
      }}>DELETE</button>
      <h1>HEADER</h1>
      <ul>
        <li></li>
      </ul>
    </header>
  );
}


