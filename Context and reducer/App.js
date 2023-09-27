import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import {Header} from './Header';
import Main from './Main';
import Footer from './Footer';
import {reducer, initialState} from './reducer';

export const MyContext = React.createContext()

// function Header() {
//   let { todos, dispatch } = React.useContext(MyContext)
//   console.log(todos)
//   return (
//     <header>
//       <button onClick={() => {
//         dispatch({ type: 'ADD', payload: { id: 3, name: 'Jack' } })
//         console.log(todos)
//       }}>ADD</button>
//       <button onClick={() => {
//         dispatch({ type: 'DELETE' })
//         console.log(todos)
//       }}>DELETE</button>
//       <h1>HEADER</h1>
//     </header>
//   );
// }

export function App() {

  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{todos, dispatch}}>
    <Header />
      <button onClick={() => {
        dispatch({type:'ADD', payload:{id:3, name:'Jack'}})
        console.log(todos)
      }}>ADD</button>
      <button onClick={() => {
        dispatch({type:'DELETE'})
        console.log(todos)
      }}>DELETE</button>
      {/* <Header/>
      <Main/>
      <Footer footerText='Footer'/> */}
    
    </MyContext.Provider>
  );
}




