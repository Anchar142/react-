import React, { Component } from "react";
import $ from "jquery";
import "./css/style";

export default class componentName extends Component {
  state = {
    text: [],
    view: false,
  };

  hh = () => [
    this.setState({ view: true }),
    $.ajax({
      url: "data.php",
      dataType: "json",
      success: (data) => {
        this.setState({ text: data.data, view: false });
      },
    }),
  ];
  render() {
    let { text, view } = this.state;
    let { hh } = this;
    let cla = view ? "load" : "";
    return (
      <div>
        <button onClick={hh}>点击获取json</button>
        <ul className={cla}>
          {text.map((value) => {
            return (
              <li key={value.id}>
                学号:{value.id}
                姓名:{value.name}
                年龄:{value.age}
                性别:{value.sex}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
