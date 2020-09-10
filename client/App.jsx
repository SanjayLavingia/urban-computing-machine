import React, { Component } from 'react';
import AddTeam from './components/AddTeam.jsx'
import TeamThread from './components/TeamThread.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      teams: [],
    }; 

    this.addTeam = this.addTeam.bind(this); 
    this.remove = this.remove.bind(this); 
    
  }
  componentDidMount() {
    fetch('http://localhost:3000/user')
    .then(res => res.json())
    .then(teams => {
      this.setState({
        teams: teams,
      })
    })
    .catch(err => console.log(err))
  }

  addTeam (e) {
    console.log(e.target.name)

    fetch(`http://localhost:3000/user/${e.target.name}`, {
      method: 'POST',
    })
      .then(res => console.log(res))
      .catch(err => console.log(err)) 
  }
  remove(e) {
    console.log(e.target.name)
    //e.target.name = req.body.name
    fetch(`http://localhost:3000/user/${e.target.name}`, {
      method: 'DELETE', 
      body: 'hello',
    })
      .then(res => console.log(res))
      .catch(err => console.log(err)) 
  }
  render() {
    return (
      <div>
      <h1>My Teams</h1>
      <div>
        <AddTeam addTeam={this.addTeam}/>
      </div>
      <div style={mystyle.container}>
        <TeamThread  remove={this.remove} teams={this.state.teams}/>
      </div>
      </div>
    )
  }
}

const mystyle = {
  container: {
    paddingTop: 125,
  }
};

export default App; 