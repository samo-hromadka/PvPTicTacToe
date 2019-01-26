import React from "react";

import "./css/main.css";
import "./css/util.css";

class Div1 extends React.Component {
  render() {
    return (
      <div
        className="bg-contact3"
        style={{
          backgroundImage: 'url("images/bg-01.jpg")'
        }}
      >
        <div className="container-contact3">
          <div className="wrap-contact3">
            <form className="contact3-form validate-form">
              <span className="contact3-form-title">
                Join existing game or create new game
              </span>
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
                <button className="contact3-form-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Div1;
