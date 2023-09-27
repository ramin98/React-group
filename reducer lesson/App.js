import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {reducer, initialState} from './reducer';

function App() {
  let [value, setValue] = useState(0)

  useEffect(() => {
    console.log('ok')
  },[value])

  const [todos, dispatch] = useReducer(reducer, initialState);
  console.log(todos)

  return (
    <div className="App">
      <button onClick={() => {
        dispatch({type:'ADD', payload:{id:3, name:'Jack'}})
        console.log(todos)
      }}>ADD</button>
      <button onClick={() => {
        dispatch({type:'DELETE'})
        console.log(todos)
      }}>DELETE</button>
      <p>{value}</p>
      <Header/>
      <Main/>
      <Footer footerText='Footer'/>
    </div>
  );
}



export default App;
