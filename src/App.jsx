import axios from "axios";
import React, { Component } from "react";
import base_url from "@/config.js";
import classNames from "classnames";

export default class App extends Component {
  state = {
    msg: "",
    view: false,
  };
  userName = React.createRef();
  passWord = React.createRef();
  tips = React.createRef();
  haddleclick = () => {
    console.log(this.userName.current.value);
    console.log(this.passWord.current.value);
    let { view } = this.state;
    axios
      .post(`${base_url}/login1`, {
        userName: this.userName.current.value,
        passWord: this.passWord.current.value,
      })
      .then((res) => {
        console.log(res);
        if (res.data.info.code == "10001") {
          view = true;
        } else {
          view = false;
        }
        this.setState({ msg: res.data.info.msg, view });
      });
  };
  render() {
    let { msg, view } = this.state;
    let classes = view ? { color: "" } : { color: "red" };
    return (
      <div>
        <h3>axios post发送json数据实现登录验证</h3>
        <label htmlFor="userName">用户名:</label>
        <input type="text" id="userName" ref={this.userName} />
        <label htmlFor="passWord">密码:</label>
        <input type="password" id="passWord" ref={this.passWord} />
        <div ref={this.tips} style={classes}>
          {msg}
        </div>
        <button onClick={this.haddleclick}>点击登录</button>
      </div>
    );
  }
}
