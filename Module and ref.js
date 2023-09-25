import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";

export function Modul(props) {
  return ReactDOM.createPortal(props.children, document.getElementById("up"));
}

export function A() {
  let arr = [1, 2, 3, 4, 5];
  let [one, two, three, ...rest] = arr;
  console.log(one, two, rest); // деструктуризация

  let [myValue, setMyValue] = useState("");
  let val = useRef(null);
  let inputVal = useRef(null);
  let anim = useRef(null);

  useEffect(() => {
    inputVal.current.focus();
  }, []);

  const handleChange = () => {
    anim.current.classList.add("anim");

    setTimeout(() => {
      anim.current.classList.remove("anim");
    }, 1000);
  };

  return (
    <>
      <div ref={anim} className="el"></div>
      <button onClick={handleChange}>CHANGE</button>
      <input ref={inputVal} type="text" />
      <button onClick={() => (val.current.innerText = inputVal.current.value)}>
        CLICK
      </button>
      <p ref={val}></p> 
      <div className="a"></div>
      <Modul>UP</Modul>
    </>
  );
}
