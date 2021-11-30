import React from 'react';
import './App.css';
import Counter from "./Counter.js";

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Counter counterName="counter1" ref={this.counter1} />
        <Counter counterName="counter2" ref={this.counter2} />
        <Counter counterName="counter3" ref={this.counter3} /> 
      </>
    );
  }
}
export default App;
