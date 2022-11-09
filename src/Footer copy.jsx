import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    let { num, saitodo, view, cleartodo } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{num}</strong>
          <span> {num > 1 ? "items left" : "item left"}</span>
        </span>
        <ul className="filters">
          <li>
            <a
              href="#/all"
              onClick={() => {
                saitodo("all");
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
                saitodo("active");
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
                saitodo("completed");
              }}
              className={view == "completed" ? "selected" : ""}
            >
              Completed
            </a>
          </li>
        </ul>
        <button className="clear-completed" onClick={cleartodo}>
          Cleat Completed
        </button>
      </footer>
    );
  }
}
