import React, { Component } from 'react';
import AddTeam from './components/AddTeam.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleClick () {
    console.log('hello')
  }
  render() {
    return (
      <div>
      <div>
        <h1>From react</h1>
        <AddTeam />
        <button onClick={this.handleClick}>Add team</button></div>
      </div>
    )
  }
}

export default App; 