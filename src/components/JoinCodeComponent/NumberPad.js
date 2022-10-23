import React, { Component } from "react";
import './NumberPad.scss';

class NumberPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      onChange:this.props.onChange
    };
  }

  setValue(character){
    this.state.onChange(character)
  }
  render() {
    return (
      <div className="grid">     
          <button className="cell" onClick={() => this.setValue('1')}>1</button>
          <button className="cell" onClick={() => this.setValue('2')}>2</button>
          <button className="cell" onClick={() => this.setValue('3')}>3</button> 
          <button className="cell" onClick={() => this.setValue('4')}>4</button>
          <button className="cell" onClick={() => this.setValue('5')}>5</button>
          <button className="cell" onClick={() => this.setValue('6')}>6</button>
          <button className="cell" onClick={() => this.setValue('7')}>7</button>
          <button className="cell" onClick={() => this.setValue('8')}>8</button>
          <button className="cell" onClick={() => this.setValue('9')}>9</button>
          <button className="cell"></button>
          <button className="cell" onClick={() => this.setValue('0')}>0</button>
          <button className="cell" onClick={() => this.setValue('×')}>×</button>
      </div>
    )
  }
}

export default NumberPad;
