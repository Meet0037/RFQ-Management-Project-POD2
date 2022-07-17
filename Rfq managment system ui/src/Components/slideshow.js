
import Carousel from 'react-bootstrap/Carousel';
import React, { SyntheticEvent,useRef,useState,render} from 'react';
import './slide.css'
import require from './biggest-Information-Technology-Firm.gif';
import ima from './KHp5.gif';
import cc from './d7573b3e236d935c3f87f3d5668a4695.gif'
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div>
          
        <Carousel variant="dark"  className='Carousel11'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require}
            alt="First slide"
            width="10"
            height="500"
          />
          <Carousel.Caption>
        
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ima}
            alt="Second slide"
            width="10"
            height="510"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cc}
            alt="Third slide"
            width="10"
            height="510"
          />
          <Carousel.Caption>
         
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      </div>
    );
  }
  
  export default  ControlledCarousel;