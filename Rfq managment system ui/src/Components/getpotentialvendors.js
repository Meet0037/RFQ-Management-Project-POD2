
import {Button,Modal,Form,Table} from 'react-bootstrap';
import React from 'react';
import Home from './Home';
import './supplier.css';
import './partreorder.css';
import {BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom';
function Getpotentialvendors(props) {
  const navigate=useNavigate();
  const back=()=>
  {
    navigate('/rfq');
    

  };
  return (
   <div>
    <Home/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    <center>
    <h1>Potential Vendors Details</h1>
    <br></br>
    </center>
    <Button variant="primary" onClick={back} className='Button1' > Back </Button>
    <Table striped bordered hover className='eTable' >
    <thead>
    <tr>
        <th>Suppiler Id</th>
        <th>Suppiler Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Location</th>
        <th>Feedback</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
  </div>
  );
}

export default Getpotentialvendors;


