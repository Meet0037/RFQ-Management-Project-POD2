
import Carousel from 'react-bootstrap/Carousel';
import React, { SyntheticEvent,useRef,useState,render} from 'react';
import {BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom';
import {Button,Modal,Form,ToggleButton} from 'react-bootstrap';
import './slide.css'
import require from './23277.jpg';
import Home from './Home';
function Dashboard() {
    const [index, setIndex] = useState(0);
    const navigate=useNavigate();
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    const enter=()=>
    {
      navigate('/supplier');
      
  
    };
  
    return (
        <div>
         <Home/>
         
         <h1 className='text1'>Welcome to RFQ Management System</h1>
         <ToggleButton
        
        id="toggle-check"
        type="checkbox"
        variant="primary"
       
        value="1"
        className='bb'
        onClick={enter}
        
      >
        Enter
      </ToggleButton>
        
      <img
           
           src={require}
           alt="First slide"
          height={695}
          width={1536}
          className='imgg'
         />
      </div>
    );
  }
  
  export default  Dashboard;