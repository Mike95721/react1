import React from 'react';
import './App.css';
import Counter from "./Counter.js";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.counters = new Array(3).fill().map((_, i) => {
      return (
        <Counter counterName={"counter" + (i + 1)} key={i} />
      )
    })
  }

  render() {
    return (
      <>
        {this.counters}
      </>
    );
  }
}
export default App;
