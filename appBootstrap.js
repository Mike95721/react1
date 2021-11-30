import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
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

  removeCounter() {
    this.setState((state) => {
      return ({
        counters: state.counters.slice(0, state.counters.length - 1),
        counterRefs: state.counterRefs.slice(0, state.counterRefs.length - 1)
      })
    })
  }


  render() {
    return (
      <>
        <Button onClick={() => this.resetHandler()} > Reset All</Button>
        <Button onClick={() => this.addCounter()} > Add Counter</Button>
        <Button onClick={() => this.removeCounter()} > Remove Counter</Button>
        <br />
        {this.state.counters}

      </>
    );
  }
}

export default App;
