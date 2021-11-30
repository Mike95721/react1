import React from 'react';
import './App.css';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counterRefs: [],
      counters: []
    }
  }

  resetHandler() {
    this.state.counterRefs.forEach((r) => r.current.resetCounter())
  }


  createCounter(i, ref) {
    return (
      <Counter counterName={"counter" + (i + 1)} key={i} ref={ref} />
    )
  }

  addCounter() {
    this.setState((state) => {
      const ref = React.createRef();
      const newCounter = this.createCounter(state.counters.length, ref);
      return ({
        counters: state.counters.concat(newCounter),
        counterRefs: state.counterRefs.concat(ref)
      })
    })
  }


  render() {
    return (
      <>

        <button onClick={() => this.resetHandler()} > Reset All</button>
        <button onClick={() => this.addCounter()} > Add Counter</button><br />
        {this.state.counters}

      </>
    );
  }
}

export default App;
