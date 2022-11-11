import axios from "axios";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    email: "",
    success: true,
    errormessage: "",
  };
  render() {
    let { success, errormessage, email } = this.state;
    return <div>{success ? <p>email:{email}</p> : <p>{errormessage}</p>}</div>;
  }
  componentDidMount() {
    axios
      .get("https://randomuser.me/api")
      .then((res) => {
        console.log(res);
        this.setState({
          email: res.data.results[0].email,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          success: false,
          errormessage: error.reponse.data,
        });
      });
  }
}
