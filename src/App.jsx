import axios from "axios";
import classNames from "classnames";
import React, { Component } from "react";
import Style from "@/css/Style";
import "@/mock/data2.js";

export default class App extends Component {
  state = {
    stus: [],
    view: false,
  };
  click = () => {
    this.setState({ stus: [], view: true });
    let url = new URLSearchParams();
    url.append("name", "车车");
    url.append("age", 11);
    axios({
      url: "data.php",
      method: "post",
      data: url,
    }).then((res) => {
      this.setState({
        stus: res.data.data,
        view: false,
      });
    });
  };

  render() {
    let { stus, view } = this.state;
    let classes = classNames(Style.one, { [Style.load]: view });
    return (
      <div>
        <h3>aioxs post方法传送urlencoded数据</h3>
        <button onClick={this.click}>点击发送请求</button>
        <ul className={classes}>
          {stus.map((value) => {
            return (
              <li key={value.id}>
                学号:{value.id}
                姓名:{value.name}
                性别：{value.sex}
                年龄:{value.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
