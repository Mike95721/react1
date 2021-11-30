import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  buttonHandler() {
    this.setState((state) => ({
      count: state.count + 1
    })
    )
  }

  resetCounter(){
    this.setState({count: 0}) 
  }

  render() {
    return (
      <>
        <div className="counter" id={this.props.counterName}>
          <h3> {this.props.counterName}</h3>
          <p>{this.state.count}</p>
          <button onClick={() => this.buttonHandler()}> increace count</button>
          <button onClick={() => this.resetCounter()}> reset</button>
        </div>
      </>
    );
  }
}

export default Counter;
