import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './Header';


export function App() {
let dispatch = useDispatch()
let arr = useSelector(state => state.arr)

  return (

   <div>
    <Header/>
    <button onClick={() => {
      
      dispatch({type:'add', payload:1})
      console.log(arr)

      }}>CLICK</button>
   </div>

  );

}


















