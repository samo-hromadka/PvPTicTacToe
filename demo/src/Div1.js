import React from "react";
import Background from "./images/bg-01.jpg";
import { Button } from "react-bootstrap";

import "./css/main.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./vendor/select2/select2.min.css";
import "./vendor/animate/animate.css";
import "./vendor/css-hamburgers/hamburgers.min.css";
import "./css/util.css";

const request = require("request");

class Div1 extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    console.log("Handling a submit");
    // request.get('localhost:5000/game', function(error, response, body) {
    //   console.log("error:", error); // Print the error if one occurred
    //   console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    //   console.log("body:", body); // Print the HTML for the Google homepage.
    // });
    request.get("http://localhost:5000/game", function(error, response, body) {
      console.log("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      console.log("body:", body); // Print the HTML for the Google homepage.
    });
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
            <form className="contact3-form validate-form">
              <span className="contact3-form-title">Team Tac Toe</span>
              <div className="wrap-contact3-form-radio">
                <div className="contact3-form-radio m-r-42">
                  <input
                    className="input-radio3"
                    id="radio1"
                    type="radio"
                    name="choice"
                    defaultValue="say-hi"
                    defaultChecked="checked"
                  />
                  <label className="label-radio3" htmlFor="radio1">
                    Join existing game
                  </label>
                </div>
                <div className="contact3-form-radio">
                  <input
                    className="input-radio3"
                    id="radio2"
                    type="radio"
                    name="choice"
                    defaultValue="get-quote"
                  />
                  <label className="label-radio3" htmlFor="radio2">
                    Create new game
                  </label>
                </div>
              </div>
              <div
                className="wrap-input3 validate-input"
                data-validate="Name is required"
              >
                <input
                  className="input3"
                  type="text"
                  name="name"
                  placeholder="Code"
                />
                <span className="focus-input3" />
              </div>
              <div className="container-contact3-form-btn">
                <Button
                  onClick={this.handleClick}
                  id="button"
                  className="contact3-form-btn"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Div1;
