import React, { useState } from "react";
import PropTypes from 'prop-types'

function Footer(props) {
let [info, setInfo] = useState([1,2,3,4,5,6])

const handleClick = () => {
  let i = 1
  let newArr = [...info, i]  
  setInfo(newArr)
  console.log(newArr)
}

    return (
      <footer>
        <h1>{props.footerText}</h1>
        <p onClick={handleClick}>{info}</p>
      </footer>
    );
  
}

export default Footer;

Footer.propTypes = {
  footerText: PropTypes.string.isRequired 
}
