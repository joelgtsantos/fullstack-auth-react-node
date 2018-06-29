import React, { Component } from 'react';

const inputString = "<input type='text' defaultValue='rendered' />";

class EscapeInput extends Component {
  state = {title: ''};

  updateTitle = (event) => {
    this.setState({title: event.target.value });
  }

  render(){
    return(
      <div>
        <h3>Safe React Input</h3>
        <div>{this.state.title}</div>
        <br/>
        <input placeholder='set title...' onChange={this.updateTitle}/>
        <br/>
      </div>
    )
  }
}

export default EscapeInput;