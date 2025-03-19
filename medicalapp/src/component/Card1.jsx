import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Container, Row } from 'react-bootstrap'
import { Col, Button, Form } from 'react-bootstrap'
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { add, remove } from '../Redux/CartSlice';
import '../javascript/myjavascript.js'
import '../css/style4.css'
import { useDispatch, useSelector } from 'react-redux';
import Addproductvalue from './Addproductvalue.jsx';
function Card1(props) {
 
  
  const dispatch = useDispatch();
  console.log(props.data); 
  const location = useLocation();
  const [show, setShow] = useState(false);

  
  const handleClose = () => setShow(false);
  let result1 = 0;
  let result2 = 0;
  let finalresult = 0;
  
  

  
  // const plus=(price)=>{
  //   result1 = Number(price.slice(1, 4));
  //   result2 = Number(price.slice(1, 4));
  //   finalresult = Number(result1)+ Number(result2);
  //   console.log(finalresult);
  //   finalresult+=result1;
  //   console.log(finalresult);

  //   console.log(result2);
  //   result1+=finalresult;
  //   console.log(result1);
   
    
  //   console.log(price);
  // }
  const addcards = (name,price, img, id) =>{
    const data = {
      id,
      name,
      price,
      img,
      quantity:1
    }
    
    
    
    dispatch(add(data));
    setShow((s) => !s);}
    
    const name1 = useSelector((state) => state.cart.Cart);
    const name2 = useSelector((state) => state.cart);
    console.log(name2);
    
    const removeFromCart = (name) => {
      dispatch(remove(name));
    }
    const productPrice =10; // Fixed product price
    const [totalPrice, setTotalPrice] = useState(0); // State for total price
    const [itemCount, setItemCount] = useState(0); // State for item count

    const addToCart = () => {
      
        setTotalPrice(prevTotal => (prevTotal +productPrice)); // Add product price to total
        setItemCount(prevCount => prevCount + 1); // Increment the item count
        
        
        console.log(totalPrice);
        console.log(itemCount);
        console.log(productPrice);
        
    };
  

  return (
    <>
      <Col md={3} className='mt-4 proimg'>
      {/* {props.p} */}
      <Card  > 
      <Image src={props.pp.imag} className='po' />
      <div className='addcard w-100'>
                <div className='d-flex ADDCARD w-100'>

                <div className='w-100 '><Button className='w-100 rounded-0 addc addc2'>Quick buy</Button></div>
                <div className='w-100 '><Button className='w-100 rounded-0 addc' onClick={ ()=>addcards(props.pp.name,props.pp.price, props.pp.imag, props.pp.id)} >Add Card</Button></div>
          </div>

        </div>
      <div className='p-4 crdpadding'>
        <div className= {props.pp.nameclassName}>
        {props.pp.name}
        </div>
        <div className={props.pp.nameclassprice}>
        {props.pp.price}
        {/* <p>{props.imag}</p> */}

        </div>
        <div><FaStar className='rating'/><FaStar className='rating' /><FaStar className='rating'/><FaStar className='rating'/><FaStarHalfAlt className='rating'/> 1 review</div>

      </div>
      
      </Card>
      
      </Col>
      <Offcanvas placement="end" scroll="true"  show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping cart</Offcanvas.Title>
        </Offcanvas.Header>
          <hr/>
        <Offcanvas.Body className='smcart'>
          {name2?.map((data)=>{
            return (<>
              <Container>
              <Addproductvalue/>
              <Row className='rowforsmallcart'>
                <Col sm><Image src={data.img} className='picsmallcart' /></Col>
                <Col sm><h5> {data.name}</h5>
               <p>Price: $<span id="productPrice">{data.price}</span></p>

              <br/>
              
              <br/>
              <div className="quantity">
              <button className="minus" aria-label="Decrease" >
                −
              </button>
              <input
                type="number"
                className="input-box"
                defaultValue={1}
                min={1}
                max={10}
              />
              <button className="plus" aria-label="Increase" onClick={addToCart}>
                +
              </button>
            </div>
                        
                </Col>
            <button type="button" class="btn-close" aria-label="Close" onClick={()=>removeFromCart(data)}></button>
              </Row>
              </Container>

            </>)
          })}
            
        </Offcanvas.Body>
      </Offcanvas>

    
    </>
  )
}

export default Card1