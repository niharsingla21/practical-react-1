import "./App.css";
import { Component } from "react";
import Header from "./components/Header";
import { Body, Body2 } from "./components/Body";
import Counter from "./components/Counter";

class App extends Component {
  multiply(a, b) {
    return a * b;
  }

  render() {
    const add = (a, b) => a + b;
    return (
      <div className="App">
        <Header
          title="Hello from App"
          myObj={{ a: 1, b: 6 }}
          myArr={[10, 20, 30]}
          myfunc={add}
          myfunc2={(a, b) => a - b}
          myfunc3={this.multiply}
        />
        <Body text="Hello Nihar" />
        <Body2
          text="Hello from Body 2"
          text2="I want to learn React"
          myfunc={this.multiply}
        />
        <Counter initialCount={0} />
        <Counter initialCount={100} />
      </div>
    );
  }
}

export default App;
