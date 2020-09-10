import React, { Component } from 'react';
import AddTeam from './components/AddTeam.jsx'
import TeamThread from './components/TeamThread.jsx'

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
        <AddTeam handleClick={this.handleClick}/>
        <button onClick={this.handleClick}>Add team</button>
        </div>
        <TeamThread />
      </div>
    )
  }
}

export default App; 