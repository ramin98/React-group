import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import  {fetchContent}  from './store/reducer';
import { addObject } from './store/reducer';


export function App() {
let dispatch = useDispatch()
let arr = useSelector(state => state.objects.arr)
let getArr = useSelector(state => state.objects.getArr)

let loading = useSelector(state => state.objects.isLoading)
let error = useSelector(state => state.objects.error)

if(error === true){
  return <p>...ERROR</p>
 }
 if(loading === true){
  return <p>...LOADING</p>
 }

 

  return (

   <div>
    {/* <Header/> */}
    <button onClick={() => {
      
      dispatch(addObject({name:"Tarly", id:2}))
      console.log(arr)

      }}>CLICK</button>
    <button onClick={() => {
      
      dispatch(fetchContent())
      console.log(getArr)

      }}>API</button>
   </div>

  );

}


















