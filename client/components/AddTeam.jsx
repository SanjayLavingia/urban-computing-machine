import React from 'React'; 
import DropDownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function AddTeam(props) {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  return <div>
   <div>
   <Dropdown>
  <Dropdown.Toggle style={mystyle} variant="success" id="dropdown-basic">
    Add Teams
  </Dropdown.Toggle>

  <Dropdown.Menu >
   <button name={'PSG'} onClick={props.addTeam} style ={mystyle}><Dropdown.Item>PSG</Dropdown.Item></button>
   <button name={'Liverpool'} onClick={props.addTeam} style ={mystyle}><Dropdown.Item>Liverpool</Dropdown.Item></button>
   <button name={'Tottenham'} onClick={props.addTeam} style ={mystyle}><Dropdown.Item>Tottenham</Dropdown.Item></button>
  </Dropdown.Menu>
</Dropdown> 
   </div>
   </div>
}

export default AddTeam; 
