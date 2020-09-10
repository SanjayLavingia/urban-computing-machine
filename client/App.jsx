import React, { Component } from 'react';
import AddTeam from './components/AddTeam.jsx'
import TeamThread from './components/TeamThread.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={}; 

    this.handleClick = this.handleClick.bind(this); 
  }

  componentDidMount() {
    fetch('http://localhost:3000/user')
      .then(res => res.json())
      .then(user => {
        console.log(user)
        this.setState({
        name: user
      })})
      .catch(err => console.log(err))
  }

  handleClick () {
    console.log('hello');
  }
  render() {
    return (
      <div>
      <h1>My Teams</h1>
      <div>
        <AddTeam handleClick={this.handleClick}/>
      </div>
        <TeamThread />
      </div>
    )
  }
}

export default App; 