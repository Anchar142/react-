import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    let { num, view, edittodo, cleartodo } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{num}</strong>
          <span> item left</span>
        </span>
        <ul className="filters">
          <li>
            <a
              href="#/all"
              onClick={() => {
                edittodo("all");
              }}
              className={view == "all" ? "selected" : ""}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/active"
              onClick={() => {
                edittodo("active");
              }}
              className={view == "active" ? "selected" : ""}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/completed"
              onClick={() => {
                edittodo("completed");
              }}
              className={view == "completed" ? "selected" : ""}
            >
              Completed
            </a>
          </li>
        </ul>
        <button className="clear-completed" onClick={cleartodo}>
          Clear completed
        </button>
      </footer>
    );
  }
}
