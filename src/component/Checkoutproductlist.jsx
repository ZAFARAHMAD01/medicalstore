import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Image from 'react-bootstrap/Image';
import '../css/style4.css'
import Header from './Header';
import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function Checkoutproductlist(props) {
    const name2 = useSelector((state) => state.cart);
    
    // console.log(name2);
    console.log(name2,'imagesss');
    let total=0;
    for (let index = 0; index < name2.length; index++) {
      total+=name2[index].price
      
    }
    const [scrollPosition, setScrollPosition] = useState(0);
    const [style, setStyle] = useState()
    // const style={
    //   position:'relative'
    // }
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        console.log(position,'position');
        if (position >=220) {
          console.log('yes 220');
          setStyle({top:'0',transition: '2s', marginTop: '20px'})
          
        }
        else{
          setStyle({top:'30%'})
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
            
        };
    }, []);
    
  return (
    <div>
    
        <div className='s sticky w-50' style={style}>
        
            
            {name2?.map((data)=>{
            return (<>
                <div className='maindivv ps-3 pe-3'>
                <Table >
                  <tbody >
                    
                    <tr>
                      <td className='tdproimg'><div ><Image src={data.img} className='picsmallcart1' /> <span className="position-absolute badgeicon1   translate-middle rounded-5 bg-dark badge cartbutton ">{data.quantity}</span></div></td>
                      <td className='tdtext'>{data.name}</td>
                      <td className='tdprice'>${data.price}</td>
                      {console.log(name2.length,'td')}
                      
                    </tr>
                  </tbody>
                </Table>
               
                
                {/* <Row>
                <Col sm>

                <div className='maindivv-chlid'>
                    <div className='product-img'><Image src={data.img} className='picsmallcart1' /> {data.name}</div>
                    
                    </div>
                </Col>
                </Row>
                
                <div className='product-price'><p>Price: $<span id="productPrice">{data.price}</span></p></div>       */}
                </div>
                {/* <div>
                </div> */}
            </>)
          })}
                <br />
                <div className='subtotalpriceee ms-5 me-5'>
                  <div className="totalprice">
                      <p className=''>Subtotal</p>
                      {/* <p className='ms-4'>Subtotal item({name2.length})</p> */}

                  </div>
                  <div className="totalprice"><p>${total}</p></div>
                </div>
                <div className='subtotalpriceee ms-5 me-5'>
                  <div className="totalprice">
                      <p className=''>Shipping</p>
                      {/* <p className='ms-4'>Subtotal item({name2.length})</p> */}

                  </div>
                  <div className="totalprice"><p>Enter shipping Address</p></div>
                </div>
                <div className='subtotalpriceee ms-5 me-5'>
                  <div className="totalprice">
                      <p className=''>Estimeted Tax ?</p>
                      {/* <p className='ms-4'>Subtotal item({name2.length})</p> */}

                  </div>
                  <div className="totalprice"><p>$25</p></div>
                </div>
                <div className='subtotalpriceee ms-5 me-5'>
                  <div className="totalprice">
                      <h4 className=''>Total</h4>
                      {/* <p className='ms-4'>Subtotal item({name2.length})</p> */}

                  </div>
                  <div className="totalprice"><h4>USD${total}</h4></div>
                </div>

        </div>
    </div>
  )
}

export default Checkoutproductlist