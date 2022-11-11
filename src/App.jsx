import classNames from "classnames";
import React, { Component } from "react";
import Style from "@/css/Style";
import axios from "axios";
import "@/mock/data.js";
import "@/mock/data3.js";

export default class App extends Component {
  state = {
    stus1: [],
    stus2: [],
    view: false,
  };
  hasddleclick = () => {
    this.setState({
      stus1: [],
      stus2: [],
      view: true,
    });
    axios.patch([axios.get("data.php"), axios.get("data2.php")]).then(
      axios.spread((res1, res2) => {
        console.log(res1.data.data);
        console.log(res2.data.data);
        this.setState({
          stus1: res1.data.data,
          stus2: res2.data.data,
          view: false,
        });
      })
    );
  };
  render() {
    let { stus1, stus2, view } = this.state;
    let classes = classNames(Style.one, { [Style.load]: view });
    return (
      <div>
        <h3>axios同时发送多个请求</h3>
        <button onClick={this.hasddleclick}>点击发送请求</button>
        <ul className={classes}>
          {stus1.map((value) => {
            return (
              <li key={value.id}>
                学号:{value.id}
                姓名:{value.name}
                性别:{value.age}
                年龄:{value.sex}
              </li>
            );
          })}
        </ul>
        <ul className={classes}>
          {stus2.map((value) => {
            return (
              <li key={value.id}>
                学号:{value.id}
                姓名:{value.name}
                性别:{value.age}
                年龄:{value.sex}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
