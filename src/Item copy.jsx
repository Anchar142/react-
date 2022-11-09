import React, { Component, createRef } from "react";

export default class Item extends Component {
  constructor() {
    super();
    this.state = {
      view: false,
    };
    this.myInput = React.createRef();
  }
  render() {
    let { todo, deltodo, xxtodo, chantodo } = this.props;
    let { view } = this.state;
    let completed = todo.hasCompleted ? "completed" : "";
    let cla = view ? completed + " editing" : completed;
    return (
      <li className={cla}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            onChange={() => {
              chantodo(todo);
            }}
            checked={todo.hasCompleted}
          />
          <label
            onDoubleClick={() => {
              this.setState({ view: true }, () => {
                this.myInput.current.value = todo.title;
                this.myInput.current.focus();
              });
            }}
          >
            {todo.title}
          </label>
          <button
            className="destroy"
            onClick={() => {
              deltodo(todo);
            }}
          ></button>
        </div>
        <input
          type="text"
          className="edit"
          ref={this.myInput}
          onBlur={() => {
            if (view) {
              todo.title = this.myInput.current.value;
              xxtodo(todo);
              this.setState({ view: false });
            }
          }}
          onKeyUp={(e) => {
            console.log(e.key);
            if (e.key == "Enter") {
              console.log("keyup");
              todo.title = this.myInput.current.value;
              xxtodo(todo);
              this.setState({ view: false });
            }
            if (e.key == "Escape") {
              console.log("Escape");
              this.setState({ view: false });
            }
          }}
        />
      </li>
    );
  }
}
