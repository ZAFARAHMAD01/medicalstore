import React from 'react'
// import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Container, Row } from 'react-bootstrap'
import { Col, Button, Form } from 'react-bootstrap'
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { add, remove,addOne,removeOne } from '../Redux/CartSlice';
import '../javascript/myjavascript.js'
import '../css/style4.css'
import { useDispatch, useSelector } from 'react-redux';
import { add,  remove } from '../Redux/CartSlice';
import {addOne,removeOne} from '../Redux/CartSlice.jsx'
import { useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function ProductSelectcart(props) {
    const [show1, setShow1] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => setShow1(false);
    const addcards1 = (name,price, img, id) =>{
        const data1 = {
        id:id,
        name,
        price,
        img,
        quantity:1
        }
        console.log(data1,'data1');
        
        dispatch(add(data1));
        setShow1((s1) => !s1);}
  return (
    <div>
    <Container>

    <Row>

    <Col sm>
    <Card  > 
      <Image src={props.pp1.imag} className='po' />
      
      <div className='p-4 crdpadding'>

        <div className= {props.pp1.nameclassName}>
        {props.pp1.name}
        </div>
        <div className={props.pp1.nameclassprice}>
        {props.pp1.price}
        {/* <p>{props.imag}</p> */}

        </div>
        <div><FaStar className='rating'/><FaStar className='rating' /><FaStar className='rating'/><FaStar className='rating'/><FaStarHalfAlt className='rating'/> 1 review</div>

      </div>
      
      </Card>
        
    </Col>
    <Col sm>
    <div class="product__title">
        <h1>Forehead Thermometer</h1>               
    </div>
    <div className="product_price">$192</div>
    <div>
        <p>Nunc vehicula quam semper odio varius tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posue.</p>
    </div>
    <div className="rating">
    
          <FaStar className='rating' />
          <FaStar className='rating' />
          <FaStar className='rating' />
          <FaStar className='rating' />
          <FaStarHalfAlt className='rating' /> 1 review
    </div>
    
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Men">
        Men
      </Tab>
      <Tab eventKey="profile" title="Kid">
        Kid
      </Tab>
     
    </Tabs>
    <div class="inventory-form__label">
                  
                    
                      <label class="form__label">Availability</label>
                      <p>
                      <span class="inventoryNote">4</span>
                      <span>In stock</span>
                      </p>                      
                    
                  
                </div>
    <ul className='wishlist'>
        <Link>
            <li>
            <img src="https://medik-demo.myshopify.com/cdn/shop/t/11/assets/wishlist.svg" alt="" />
             <span className='p-1'>Add to Wishlist</span></li>
        </Link>
        <Link>
        <li>
            <img src="https://medik-demo.myshopify.com/cdn/shop/t/11/assets/wishlist.svg" alt="" />
             <span className='p-1'>Add to Wishlist</span></li>
        </Link>
        <Link>
        <li>
            <img src="https://medik-demo.myshopify.com/cdn/shop/t/11/assets/wishlist.svg" alt="" />
             <span className='p-1'>Add to Wishlist</span></li>
        </Link>
    </ul>
            <Form>
      {[ 'radio'].map((type) => (
        <div key={`${type}`} className="mb-3 ">
          <Form.Check
            
            label="1"
            name="group1"
            type={type}
            className=" radioborder"
            id={`inline-${type}-1`}
          />
          <Form.Check
            
            label="2"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          
        </div>
      ))}
    </Form>
    <div className="product_quantity">
    <div>
    <button className="minus" aria-label="Decrease" >
                −
              </button>
    </div>
              
              <input
                type="number"
                className="input-box"
                defaultValue={1}
                min={1}
                max={10}
                // value={data?.quantity}
              />
              <div>
              <button className="plus" aria-label="Increase"  >
                +
              </button>
              </div>
             
            </div>
            <div className=' '>
                <div className='  w-100'>

                <div className='w-100 '><Button className='w-100 rounded-0 addc'  onClick={ ()=>addcards1(props.pp1.name,props.pp1.price, props.pp1.imag, props.pp1.id)}  >Add Card</Button></div>
                <div className='w-100 '><Button className='w-100 rounded-0 addc addc2'>Quick buy</Button></div>
          </div>

        </div>
    </Col>

    </Row>
    </Container>
    
        
    </div>
  )
}

export default ProductSelectcart