import React from "react";

import {Button} from 'react-bootstrap';
import './Square.css';

const butt = {
   borderRadius: "8px",
   padding: "0px 0px",
   backgroundColor: "#2085b5",
   height:"130px",
   width:"130px",
   cursor:"pointer",
   fontSize:"80px",
   borderColor:"black"
}

const redButt = {
  borderRadius: "8px",
  padding: "0px 0px",
  backgroundColor: "#b53c47",
  height:"130px",
  width:"130px",
  cursor:"pointer",
  fontSize:"80px",
  borderColor:"black"
}

// const butt:hover = {
//    backgroundColor: "#0f6d9a",
//    color:"white"
// }

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
//}

function Square(props) {
  return (
    <Button className="square-main" style={butt} onClick={props.onClick}><span>{props.value}</span></Button>
  );
}

export default Square;
