

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoDatas: [],
      num: 0,
      view: "all",
    };
  }
  //添加todo
  addtodo = (e) => {
    if (e.key !== "Enter") return;
    if (e.target.value == "") return;
    let { todoDatas, num } = this.state;
    let todo = {};
    todo.id = Date.now();
    todo.title = e.target.value.trim();
    todo.hasCompleted = false;
    todoDatas.push(todo);
    num++;
    this.setState({ todoDatas, num });
    e.target.value = "";
  };

  //删除todo
  deltodo = (todo) => {
    console.log("deltodo被触发了");
    let { todoDatas, num } = this.state;
    todoDatas = todoDatas.filter((value) => {
      if (todo.id == value.id) {
        if (value.hasCompleted == false) {
          num--;
        }
        return false;
      }
      return true;
    });
    this.setState({
      todoDatas,
      num,
    });
  };
  //改变todo状态
  chantodo = (todo) => {
    console.log("触发了改变状态事件");
    let { todoDatas, num } = this.state;
    todoDatas = todoDatas.map((value) => {
      if (todo.id == value.id) {
        value.hasCompleted = !todo.hasCompleted;
        if (value.hasCompleted == false) {
          num++;
        } else {
          num--;
        }
      }
      return value;
    });
    this.setState({
      todoDatas,
      num,
    });
  };

  //修改todo
  xxtodo = (todo) => {
    console.log("修改todo被调用", todo);
    let { todoDatas } = this.state;
    todoDatas = todoDatas.map((value) => {
      if (todo.id == value.id) {
        value.title = todo.title;
      }
      return value;
    });
    this.setState({ todoDatas });
  };
  //筛选todo
  saitodo = (view) => {
    this.setState({ view });
  };
  //清除已完成todo
  cleartodo = () => {
    let { todoDatas } = this.state;
    todoDatas = todoDatas.filter((value) => {
      if (value.hasCompleted) {
        return false;
      }
      return true;
    });
    this.setState({ todoDatas });
  };
  //全选
  alltodo = () => {
    let { todoDatas, num } = this.state;
    console.log("全选触发");
    if (num) {
      todoDatas = todoDatas.map((value) => {
        value.hasCompleted = true;
        num = 0;
        return value;
      });
    } else {
      todoDatas = todoDatas.map((value) => {
        value.hasCompleted = false;
        num = todoDatas.length;
        return value;
      });
    }
    this.setState({ todoDatas,num });
  };

  render() {
    let { addtodo, deltodo, xxtodo, chantodo, saitodo, cleartodo, alltodo } =
      this;
    let { todoDatas, num, view } = this.state;
    let tododa = todoDatas.filter((value) => {
      switch (view) {
        case "all":
          return true;
        case "active":
          return !value.hasCompleted;
        case "completed":
          return value.hasCompleted;
        default:
          return true;
      }
    });
    let todo = tododa.map((value) => {
      return (
        <Item
          key={value.id}
          todo={value}
          deltodo={deltodo}
          xxtodo={xxtodo}
          chantodo={chantodo}
        />
      );
    });
    return (
      <section className="todoapp">
        <section className="header">
          <h1>Todos</h1>
          <input type="text" className="new-todo" onKeyUp={addtodo} />
        </section>
        <section className="main">
          <input type="checkbox" className="toggle-all" />
          <label htmlFor="toddle-all" onClick={alltodo}></label>
          <ul className="todo-list">{todo}</ul>
        </section>
        <Footer
          num={num}
          saitodo={saitodo}
          view={view}
          cleartodo={cleartodo}
          alltodo={alltodo}
        />
      </section>
    );
  }
}
