import React from 'React';

function TeamThread(props) {

  const result = []; 
  for (let i = 0; i < props.teams.length; i++) {
    result.push(<span
      className="teamInfo"
       
      key={`teamThread${i}`}
      > 
      {`${props.teams[i].name} vs ${props.teams[i].opp} on ${props.teams[i].date} at ${props.teams[i].time}`} 
      <button 
      className="removeTeam"
      name={props.teams[i].name} 
      onClick={props.remove}
      >
        X
        </button>
        </span>)
  }  
  console.log(props); 
  return <div>
    {result}
  </div>
}


export default TeamThread;