import React, { Component } from "react";
import "@/css/div1.css";
import classNames from "classnames";
export default class componentName extends Component {
  constructor() {
    super();
    this.state = {
      x: true,
      y: true,
    };
  }
  render() {
    let { x, y } = this.state;
    let className = classNames(["three", { two: x }, { one: y }]);
    let cla = classNames(["three", { one: x }, { two: y }]);
    return (
      <div>
        <div className={className}>看看效果</div>
      </div>
    );
  }
}
