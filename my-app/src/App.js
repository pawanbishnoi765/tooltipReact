import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Tooltip from "./components/Tooltip";

export default class App extends Component {

  // constructor to create state for this class
  constructor() {
    super();
    this.state = {
      direction: "top",
      content: "Tooltip Content",
    };
  }

  // function to handle input content for hover
  handleContentInput = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      this.setState({
        content: e.target.value,
      });
    } else {
      this.setState({
        content: "Tooltip Content",
      });
    }
  };

  // function to handle direction according to select option
  handleDirectionInput = (e) => {
    console.log(e.target.value);
    this.setState({
      direction: e.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        {/* Start :For Input Value to Change Direction & Content of Tooltip */}
        <div>
          {/* heading */}
          <h1>Project of Tooltip</h1>
          <div className="form-div">
            <label className="form-label">Enter the Tooltip Content : </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter The Content..."
              onKeyUp={this.handleContentInput}
            />
          </div>
          <div className="form-div">
            <label>Enter the Tooltip Direction : </label>
            <select
              className="form-select"
              onChange={this.handleDirectionInput}
            >
              <option value="top">Top</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
              <option value="bottom">Bottom</option>
            </select>
          </div>
        </div>
        {/* End :For Input Value to Change Direction & Content of Tooltip */}

        {/* This is Tooltip I created */}
        {/* To use tooltip you have to bind component inside tooltip */}
        <Tooltip content={this.state.content} direction={this.state.direction}>
          {/* calling button component */}
          <Button />
        </Tooltip>
      </div>
    );
  }
}