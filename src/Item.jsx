import React, { Component } from "react";

export default class Item extends Component {
  state = { view: false };
  edit = React.createRef();
  render() {
    let { view } = this.state;
    let { todo, deltodo, todostate, edittodo } = this.props;
    let completed = todo.hasCompleted ? "completed" : "";
    let cla = view ? completed + " editing" : completed;
    return (
      <li className={cla}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            onChange={() => {
              todostate(todo);
            }}
            checked={todo.hasCompleted}
          />
          <label
            onDoubleClick={() => {
              this.setState({ view: true }, () => {
                this.edit.current.value = todo.title;
                this.edit.current.focus();
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
          ref={this.edit}
          onBlur={(e) => {
            console.log(e.target);
            if (view) {
              if (e.target.value == "") {
                deltodo(todo);
              } else {
                todo.title = this.edit.current.value;
                edittodo(todo);
                this.setState({ view: false });
              }
            }
          }}
          onKeyUp={(e) => {
            console.log(e.key);
            if (e.key == "Enter") {
              todo.title = this.edit.current.value;
              edittodo(todo);
              if (e.target.value == "") {
                deltodo(todo);
              }
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
