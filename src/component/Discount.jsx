import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap'

function Discount(props) {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    // alert('A name was submitted: ' + inputRef.current.value);
    event.preventDefault();
    console.log(inputRef.current.value);
    
  };
  

  return (
    <div className='dis w-100' >

    <div className='dis2 w-100'>
        
        <h1 >Discount </h1><br />
        
        
        <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      
        <input type="number" ref={inputRef} />
      
      <button type="submit" >
        Submit
      </button>
    </form>
        <div>

        </div>
    </div>
    </div>
  )
}

export default Discount