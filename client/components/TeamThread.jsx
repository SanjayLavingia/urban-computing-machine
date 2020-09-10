import React from 'React';

function TeamThread(props) {
  const testArray = ['Manchester United', 'Tottenham Hotspur', 'Chelsea', 'Arsenal']
  const result = []; 
  for (let i = 0; i < testArray.length; i++) {
    result.push(<div key={`teamThread${i}`}>{testArray[i]} </div>)
  }
  return <div>
  </div>
}

export default TeamThread;