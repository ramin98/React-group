import './App.css';
import { useSelector, useDispatch } from 'react-redux';


export function Header() {
let dispatch = useDispatch()
let arr = useSelector(state => state.arr)

  return (

   <div>
    {arr}
    <button onClick={() => {
      
      dispatch({type:'add', payload:1})
      console.log(arr)

      }}>CLICK</button>
   </div>

  );

}

