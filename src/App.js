import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.updateText = this.updateText.bind(this)
    this.state = {
      text: ""
    }
  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" value={this.state.text} onChange={this.updateText}></textarea>
        <div className="counter">{this.state.text.length}</div>
      </div>
    );
  }

  updateText(event){
    this.setState({
      text: event.target.value
    })
  }
}

export default App;
