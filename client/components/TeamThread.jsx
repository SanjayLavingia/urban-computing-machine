import React from 'React';

function TeamThread(props) {
 
  const result = []; 
  for (let i = 0; i < props.teams.length; i++) {
    result.push(<div key={`teamThread${i}`}> {`${props.teams[i].name} vs ${props.teams[i].opp} on ${props.teams[i].date} at ${props.teams[i].time}`} <button name={props.teams[i].name} onClick={props.remove}>Remove</button></div>)
  }  
  console.log(props); 
  return <div>
    {result}
  </div>
}

export default TeamThread;