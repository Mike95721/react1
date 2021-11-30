import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  buttonHandler() {
    console.log("button clicked")
    this.setState((state) => ({
      count: state.count + 1
    }))
  }

  render() {
    return (
      <>
        <h3>Tally Counter</h3>
        <p>{this.state.count}</p>
        <button onClick={() => this.buttonHandler()}>Increase count</button>
        <button> Reset</button>
      </>
    );
  }
}
export default App;
