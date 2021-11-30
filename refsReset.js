import React from 'react';
import './App.css';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.counterRefs = [];
    this.counters = new Array(3).fill().map((_, i) => {
      const ref = React.createRef();
      this.counterRefs.push(ref);
      return (
        <Counter counterName={"counter" + (i + 1)} key={i} ref={ref} />
      )
    })
  }

  resetHandler() {
    this.counterRefs.forEach((r) => r.current.resetCounter())
  }

  render() {
    return (
      <>
        {this.counters}
        <button onClick={() => this.resetHandler()} > Reset All</button>
      </>
    );
  }
}

export default App;
