import React, { Component } from "react";
import "./index.scss";
export default class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="menu">
        <div className="type">全部{this.props.title}</div>
      </div>
    );
  }
}
