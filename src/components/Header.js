import logo from "../logo.svg";
import { Component } from "react";
import React from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.title}</h1>
        <div>{this.props.myObj.a}</div>
        <div>{this.props.myObj.b}</div>
        <div>{this.props.myArr[0]}</div>
        <div>{this.props.myfunc(this.props.myArr[1], this.props.myArr[2])}</div>
        <div>{this.props.myfunc2(1000, 900)}</div>
        <div>{this.props.myfunc3(2, 100)}</div>
      </header>
    );
  }
}
