import React,{Component} from 'react'

class App extends Component{
  constructor(){
    console.log("constructor");
    super();// 继承了父类Component
           //this.props {}
          //this.state {}
  }
  componentWillMount(){
    console.log("componentWillMount 1");
    this.sid=0;
  }
  render(){
    console.log("render 2");
    return (
      // jsx->babel-loader->虚拟DOM
      <div>
         <h3 id="h">App</h3>
       
      </div>
    )
  }
  // render调用完毕后，生成真实DOM
  componentDidMount(){
    {console.log(document.getElementById("h"))}
    console.log("componentDidMount 3");
    //操作真实DOM
    //初始化组件ajax
    //绘制图形库
  }
}
export default App;