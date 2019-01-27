import React from "react";

import {Button} from 'react-bootstrap';
import './Square.css';


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
    <Button className="square-main" bsStyle="primary" onClick={props.onClick}><span>{props.value}</span></Button>

  );
}

export default Square;
