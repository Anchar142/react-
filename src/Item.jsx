import React, { Component } from "react";

export default class componentName extends Component {
  state = {
    view: false,
  };
  myInput = React.createRef();
  dblclick = () => {
    let { todo } = this.props;
    this.setState({ view: true }, () => {
      (this.myInput.current.value = todo.title), this.myInput.current.focus();
    });
  };
  render() {
    let { todo, deltodo, xgtodo, chantodo } = this.props;
    let { dblclick } = this;
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
          <label onDoubleClick={dblclick}>{todo.title}</label>
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
              todo.title = this.myInput.current.value.trim();
              this.setState({ view: false });
            }
          }}
          onKeyUp={(e) => {
            if (e.key == "Enter") {
              todo.title = this.myInput.current.value.trim();
              this.setState({ view: false });
            }
            if (e.key == "Escape") {
              this.setState({ view: false });
            }
          }}
        />
      </li>
    );
  }
}
