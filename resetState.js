import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  resetCounter(){
    this.setState({count: 0}) 
  }

  buttonHandler() {
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
        <button onClick={() => this.resetCounter()}> Reset</button>
      </>
    );
  }
}
export default App;
