import "./App.css";
import { Component } from "react";
import Main from './Main'
import About from './About'

class App extends Component {
  render() {
    return (
      <>
      <Main />
      <hr />
      <About />
      </>
    );
  }
}

export default App;
