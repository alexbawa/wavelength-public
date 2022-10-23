import React, { Component } from "react";
import './JoinCodeTextBox.scss';

class JoinCodeh1Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paircode: this.props.paircode,
    };
  }
  render() {
    console.log(this.state.paircode);
    if (this.state.paircode == null) {
      return null;
    } else {
      return (
        <div className="code_container">
          <div className="code_sub_container">
            <h1 className="char_container">
              {this.state.paircode[0]}
            </h1>
            <h1 className="char_container">
              {this.state.paircode[1]}
            </h1>
            <h1 className="char_container">
              {this.state.paircode[2]}
            </h1>
            <h1 className="char_container">
              {this.state.paircode[3]}
            </h1>
            <h1 className="char_container">
              {this.state.paircode[4]}
            </h1>
            
          </div>
        </div>
      );
    }
  }
}

export default JoinCodeh1Box;
