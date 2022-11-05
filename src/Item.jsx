import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { todo, key } = this.props;
    return (
      <li >
        <div className="view">
          <input type="checkbox" className="toggle" />
          <label>{todo.title}</label>
          <button className="destroy"></button>
        </div>
        <input type="text" className="edit" />
      </li>
    );
  }
}
