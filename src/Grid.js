import React from 'react';
import logo from './logo.svg';
import './App.css';
import Butt from './Butt';
 
class Grid extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        current: 2,
        result: "",
        counterIcrement: 0,
        counterDecrement: 0
      };
    }
  
    updateResult = value => {
      this.setState({
        result: value.result
      });
      let counterIcrement = this.state.counterIcrement;
      let counterDecrement = this.state.counterDecrement;
  
      if (value.value) {
        this.setState({ counterIcrement: counterIcrement + 1 });
      } else {
        this.setState({ counterDecrement: counterDecrement + 1 });
      }
    };
  
    componentDidMount = () => {
      this.countdown = setInterval(this.timer, 1000);
    };
  
    timer = () => {
      this.setState({ current: this.getRandomInt(1, 10) });
    };
  
    getRandomInt = (min, max) => {
      //Возвращает случайное целое число между min (включительно) и max (не включая max)
      return Math.floor(Math.random() * (max - min)) + min;
    };
  
    render() {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const listItems = numbers.map(number => (
        <Butt
          value={number}
          currentValue={this.state.current}
          updateResult={this.updateResult}
        />
      ));
      return (
        <div className="grid">
          {listItems}
          <p>Попал {this.state.counterIcrement} </p>
          <hr />
          <p>{this.state.result}</p>
          <hr />
          <p>Промазал {this.state.counterDecrement} </p>
        </div>
      );
    }
  }
  
export default Grid;