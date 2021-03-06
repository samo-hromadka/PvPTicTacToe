import React from "react";
import Square from "./Square";
import Background from './images/bg-01.jpg';
import {ProgressBar} from 'react-bootstrap';

import "./css/main.css";
import "./Square.css";

const contact3FormTitle = {
  display: "block",
  fontFamily: "Poppins-Bold",
  fontSize: "39px",
  color: "#fff",
  lineHeight: "1.2",
  textAlign: "center",
  textTransform: "uppercase",
  paddingBottom: "70px"
}

var time = 15;
const now = time*(100/15);

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      getVotes: props.getVotes
    };
    console.log(props);
    console.log(props.getVotes);

  }
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        className=""
        onClick={() => this.props.onClick(i)}
      />
    );

  }

  render() {
    return (
      <div
        className="bg-contact3"
        style={{
          backgroundImage: "url(" + Background + ")"
        }}
      >

      <div className="container-contact3">
        <div className="wrap-contact3">
          <div className="contact3-form validate-form">
            <span className="contact-form-title" style={contact3FormTitle}>
              Code:
            </span>

            <ProgressBar now={now} label={`${time}s`} />

            <div style={{marginBottom:"1em"}}></div>
              <div className="board-row" style={{display: "flex", flexDirection:"row", align:"center"}}>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
              </div>
              <div className="board-row" style={{align:"center"}}>
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
              </div>
              <div className="board-row" style={{align:"center"}}>
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
