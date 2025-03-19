import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Button1(props) {
  return (    
    <div>
      <Button >
      <Link to={props.p.link}  className={props.p.className}>
      {props.p.name}
      </Link>
      </Button>
      
      
    </div> 
  )
}
export default Button1