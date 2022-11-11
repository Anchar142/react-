import React, { Component } from "react";

export default class componentName extends Component {
  render() {
    let { num, view, sstodo, cleartodo } = this.props;
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
                sstodo("all");
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
                sstodo("active");
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
                sstodo("completed");
              }}
              className={view == "completed" ? "selected" : ""}
            >
              Completed
            </a>
          </li>
        </ul>
        <button className="clear-completed" onClick={cleartodo}>
          Clear Completed
        </button>
      </footer>
    );
  }
}
