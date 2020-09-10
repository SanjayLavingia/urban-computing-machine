import React from 'React'; 
// import DropDownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'

function AddTeam(props) {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  return <div>
   add team div 
   <div>
     <button style={mystyle} onClick={props.handleClick}>Add Team</button>
   </div>
   </div>
}

export default AddTeam; 



//  {/* <Dropdown>
//   <Dropdown.Toggle variant="success" id="dropdown-basic">
//     Dropdown Button
//   </Dropdown.Toggle>

//   <Dropdown.Menu>
//    <div><Dropdown.Item href="#/action-1">Action</Dropdown.Item></div> 
//     <div><Dropdown.Item href="#/action-2">Another action</Dropdown.Item></div>
//     <div><Dropdown.Item href="#/action-3">Something else</Dropdown.Item></div>
//   </Dropdown.Menu>
// </Dropdown> */}