import axios from "axios";
import classNames from "classnames";
import React, { Component } from "react";
import Style from "@/css/Style";

export default class App extends Component {
  state = {
    stus: [],
    view: false,
  };
  getstus1 = () => [
    axios.get("data.php").then((res) => {
      this.setState({ stus: res.data.data });
    }),
  ];
  getstus2 = () => [
    axios.get("data2.php").then((res) => {
      this.setState({ stus: res.data.data });
    }),
  ];
  render() {
    let { stus, view } = this.state;
    let classes = classNames(Style.one, { [Style.load]: view });
    return (
      <div>
        <h2>axios 通过拦截器get方法分别请求数据</h2>
        <button onClick={this.getstus1}>点击请求数据</button>
        <button onClick={this.getstus2}>点击请求数据</button>
        <ul className={classes}>
          {stus.map((value) => {
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
  componentDidMount() {
    console.log(axios.interceptors.request);
    axios.interceptors.request.use((config) => {
      console.log("request", config);
      this.setState({ stus: [], view: true });
      return config;
    });
    axios.interceptors.response.use((config) => {
      console.log("response", config);
      this.setState({ view: false });
      return config;
    });
  }
}
