import React from 'react';
import logo from './logo.svg';
import './App.css';
 
class Butt extends React.Component {
    state = {
      result: ""
    };
  
    checkParentChildValue = () => {
      let { value, currentValue } = this.props;
      value = Number(value);
  
      if (value === currentValue) { 
        return "active";
      }
    };
  
    onClickChecked = () => {
      let { value, currentValue } = this.props;
      value = Number(value);
  
      console.log(
        "Клик по " + value + " - Текущее место 'крота' " + currentValue
      );
  
      if (value === currentValue) {
        this.props.updateResult({ result: "Right!!!", value: true });
      } else {
        this.props.updateResult({ result: "Miss!!!", value: false });
      }
    };
  
    render() {
      return (
        <div className="button" onClick={this.onClickChecked}>
          <div className={this.checkParentChildValue()} />
        </div>
      );
    }
  }

  export default Butt;  