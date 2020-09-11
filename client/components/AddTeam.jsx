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
   <div className="addTeamDiv">
   <Dropdown>
  <Dropdown.Toggle className="addTeam" variant="success" id="dropdown-basic">
    Add Teams
  </Dropdown.Toggle>

  <Dropdown.Menu >
   <button className="teamButton" name={'PSG'} onClick={props.addTeam}><Dropdown.Item>PSG</Dropdown.Item></button>
   <button className="teamButton" name={'Liverpool'} onClick={props.addTeam}><Dropdown.Item>Liverpool</Dropdown.Item></button>
   <button className="teamButton" name={'Tottenham'} onClick={props.addTeam}><Dropdown.Item>Tottenham</Dropdown.Item></button>
  </Dropdown.Menu>
</Dropdown> 
   </div>
   </div>
}

export default AddTeam; 
