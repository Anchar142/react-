import classNames from "classnames";
import React, { Component } from "react";

export default class Item extends Component {
  state = { view: false };
  myInput = React.createRef();
  render() {
    let { todo, deltodo, changetodo, xxtodo } = this.props;
    let { view } = this.state;
    // let clas = todo.hasCompleted ? "completed" : "";
    let cls = classNames({ completed: todo.hasCompleted }, { editing: view });
    return (
      <li className={cls}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            onChange={() => {
              changetodo(todo);
            }}
            checked={todo.hasCompleted}
          />
          <label
            onDoubleClick={() => {
              this.setState({ view: true }, () => {
                this.myInput.current.focus();
                this.myInput.current.value = todo.title;
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
            if (e.key == "Enter") {
              todo.title = this.myInput.current.value;
              xxtodo(todo);
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
