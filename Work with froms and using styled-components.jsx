import styles from "./App.module.css";
import Header from "./Header";
import { styled } from "styled-components";
import React, { useState } from "react";



function App() {
  let [active, setActive] = useState(true);
  let [activeB, setActiveB] = useState(false);
  let [formObject, setFormObject] = useState({
    userName: "",
    userPassword: "",
    userMail: "",
    userStatus: "",
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();

    // вариент через js
    // let formFata = new FormData(ev.target)
    // let inputsArray = [...formFata.entries()]
    // let obj = {}

    // inputsArray.forEach((item) => {
    //   obj[item[0]] = item[1]
    // })


    // inputsArray.forEach((item) => { 
    //   obj[item[0]] = item[1]
    // })

    
    let status = formObject.userMail.split('@')[0]
    console.log(status)
    setFormObject((obj) => ({...obj, userStatus: status }))
    console.log(formObject);
  };

  const compare = () => {
    if (formObject.userPassword.length > 8 && formObject.userName.length > 6) {
      setActive(false);
    }
  };

  const nameHandler = (ev) => {
    setFormObject((obj) => ({...obj, userName: ev.target.value }));
    compare();
  };

  const passwordHandler = (ev) => {
    setFormObject((obj) => ({ ...obj, userPassword: ev.target.value }));
    compare();
  };
 
  const maildHandler = (ev) => {
    setFormObject((obj) => ({ ...obj, userMail: ev.target.value }));
    compare();
  };
 

  return (

    <form className={styles.App} onSubmit={handleSubmit}>
      <MyButton onClick={() => setActiveB(!activeB)} myColor={activeB ? 'black' : 'transparent'}>CLICK</MyButton>
      <input onChange={nameHandler} type="text" name="user-name" />
      <input onChange={passwordHandler} type="password" name="user-password" />
      <input onChange={maildHandler} type="mail" name="user-password" />
      <button type="submit" disabled={active}>
        SUBMIT
      </button>
    </form>
  );
}



export default App;

const MyButton = styled.button({
  background:(props) => props.myColor,
})
