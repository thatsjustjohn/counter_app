import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Phone Number Logger - React!</h1>
    </header>
  );
};

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleCount = e => {
    let count = e.target.value;
    this.setState({ count });
    console.log(this.state);
  };

  handleClickPlus = e => {
    e.preventDefault();
    let count = this.state.count + 1;
    this.setState({ count });
  };

  handleClickMinus = e => {
    e.preventDefault();
    let count = this.state.count - 1;
    this.setState({ count });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClickMinus}>-</button>
        <button onClick={this.handleClickPlus}>+</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
      </React.Fragment>
    );
  }
}

export default App;
