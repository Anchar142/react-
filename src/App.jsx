import React, { Component } from "react";
import Child from "./Child";
import Footer from "./Footer";
import Item from "./Item";
import "./css/index.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoDatas: [],
    };
  }
  //添加todo
  addtodo = (e) => {
    console.log(e.key);
    if (e.key !== "Enter") return;
    let { todoDatas } = this.state;
    let todo = {};
    todo.id = Data.now();
    todo.title = e.target.value.trim();
    todo.hasCompleted = false;
    todoDatas.push(todo);
    e.target.value = "";
    console.log(todo);
    console.log(todoDatas);

    this.setState({ todoDatas });
  };
  render() {
    let { addtodo } = this;
    let { todoDatas } = this.state;
    let items = todoDatas.map((todo) => {
      <Item key={todo.id} todo={todo.title} />;
    });
    return (
      <section className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <input
            type="text"
            className="new-todo"
            placeholder="What need to be done?"
            onKeyUp={addtodo}
          />
        </header>
        <section className="main">
          <input type="checkbox" className="toggle-all" id="toggle-all" />
          <label htmlFor="toggle-all"></label>
          <ul className="todo-list">{items}</ul>
        </section>
        <Footer />
      </section>
    );
  }
}
