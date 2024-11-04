import { Component } from 'react';

class Counter extends Component {
  state = {
    value: 0,
  };
  handleClick = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  handleClickDescrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className="card-container" style={{ width: '600px' }}>
        <div className="card-body">
          <h5 className="card-title">Counter</h5>
          <p className="card-text">{value}</p>
          <div className="card-button">
            <button className="button button-plus" onClick={this.handleClick}>
              +
            </button>
            <button
              className="button button-minus"
              onClick={this.handleClickDescrement}
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;

//     this.setState(prevState => ({ value: prevState.value + 1 }));
//    стан => змінюємо стан(текучий стан змінюємо на новий)
