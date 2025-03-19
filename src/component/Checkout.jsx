import React, { useEffect } from 'react'
import { IoBagOutline } from "react-icons/io5";
import '../css/style4.css'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Checkoutproductlist from './Checkoutproductlist';
import { FaLock } from "react-icons/fa";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { useLocation } from 'react-router-dom';
import { paths } from '../Redux/Auth';
function Checkout(props) {

    console.log(props.che,'che');
    var chee=props.che;
    console.log(chee);
    
    const dispatch = useDispatch();
    const daaa={
        pathsname:'/checkout'
    }

    const name2 = useSelector((state) => state.cart);
    console.log(name2);
    const us3= useSelector((state) => state.auth.user);
  const location = useLocation();
//   if (location.pathname==='/checkout') {
    
//       console.log(us3,'use333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333');
//       dispatch(paths(daaa))
//       console.log(us3,'use333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333');
//   }
  console.log(location.pathname,'ittt');
 
  const handleSubmit2 = (event) => {
    // alert('A name was submitted: ' + inputRef.current.value);
    event.preventDefault();
    const dad={
        pathnames:'zaaaaa',
        name:'zafar'
        ,id:'1'
        
    }
    dispatch(paths(dad))
    console.log(us3,'newwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
    
   
   
   
 };
  
   
   
    return (
        <div>
            
        
            
            {/* <Container> */}
            <Row className='rowdivider'>

            
                <Col sm >
                    <Container className='ps-5 pe-5 '>

                        <div className='contact-login'>

                            <div>

                                <h1>Contact</h1>
                            </div>
                            <div>
                                <h2>Login</h2>
                            </div>
                        </div>
                        <form action="/action_page.php">
                            <div className="form-floating mb-3 mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email or Mobile phone number"
                                    name="email"
                                />
                                <label htmlFor="email">Email or Mobile phone number</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Checked checkbox
                                </label>
                            </div>
                            <h2 className='text-start'>Delivery</h2>
                            <div className="form-group">
                                <div className="form-control-wrap">
                                    <select className="form-select js-select2 select2-hidden-accessible" data-select2-id="3" tabindex="-1" aria-hidden="true">
                                        <option value="default_option" data-select2-id="5">Country/Relegion</option>
                                        <option value="option_select_name" data-select2-id="27">Option select name</option>
                                        <option value="option_select_name" data-select2-id="28">Option select name</option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <div className='contact-login'>
                                <div>
                                    <input type="text" class="form-control" id="default-01" placeholder="First Name(Optional)"></input>
                                </div>
                                <div>
                                    <input type="text" class="form-control" id="default-01" placeholder="Last Name"></input>
                                </div>
                            </div>
                            <br />
                            <input type="text" class="form-control" id="default-01" placeholder="Address"></input>
                            <br />
                            <input type="text" class="form-control" id="default-01" placeholder="Appartment,suit etc(optional)"></input>
                            <br />
                            <div className='contact-login1 '>
                                <div className='pe-2' >
                                    <input type="text" class="form-control" id="default-01" placeholder="City"></input>

                                </div>
                                <div>
                                    <div class="form-control-wrap ">
                                        <div class="form-control-select">
                                            <select class="form-control required" data-msg="Required" id="fw-nationality" name="fw-nationality" required="">
                                                <option value="">State</option>
                                                <option value="us">United State</option>
                                                <option value="uk">United KingDom</option>
                                                <option value="fr">France</option>
                                                <option value="ch">China</option>
                                                <option value="cr">Czech Republic</option>
                                                <option value="cb">Colombia</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                                <div className='ps-2'>
                                    <input type="text" class="form-control" id="default-01" placeholder="PIN CODE"></input>

                                </div>
                            </div>
                            <br />
                            <div className="custom-control custom-checkbox checked text-start">
                                <input type="checkbox" className="custom-control-input" checked="" id="customCheck2" />
                                <label className="custom-control-label ms-1" for="customCheck2"> Option Label</label>
                            </div>
                            <br />
                            <h4 className='text-start'>Payment</h4>
                            <p className='text-start'>ALL transection secure and encrypted</p>
                            <div className='bgggray '>
                                <div className="input-group contact-login cardd pt-2 pb-2">

                                    <div>

                                        <p className='ms-4 mt-2'> Credit card</p>
                                    </div>
                                    <div className="input-group-append me-3">
                                        <span className="input-group-text" id="basic-addon2">PAY</span>
                                    </div>
                                </div>
                                
                            <div className='ps-4 pe-4'>
                            <br />  
                            <div className='contact-login2 expiry-date1'>
                                <div  >
                                    <input type="text" name="search" placeholder="Card number" />
                                </div>
                                <div className='iconslock'>
                                    <FaLock />
                                </div>
                            </div>
                            <br />
                            <div className='cardnumber'>
                                <div className='expiry-date'>
                                     <input type="text" name="search" className='w-100' placeholder="Expiry date(MM / YY)" />

                                </div>
                                <div className='securitycode' id='in' >
                                    <div >
                                        <input type="text" name="search"  className='w-100' placeholder="Security Code" />
                                    </div>
                                    <div>
                                         <RxQuestionMarkCircled />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <Row>
                                <Col sm>
                                    <div className='expiry-date'>
                                        <input type="text" name="search"  className='w-100' placeholder="Name on card" />
                                    </div>

                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col sm>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label" for="flexCheckChecked">
                                        Use shipping address as billing address
                                        </label>
                                     </div>
                                </Col>
                            </Row>
                            <br />
                            <h5 className='text-start'>Billing Address</h5>
                            <br />
                            <div >
                                    <div class="form-control-wrap ">
                                        <div class="form-control-select">
                                            <select class="form-control required" data-msg="Required" id="fw-nationality" name="fw-nationality" required="">
                                                <option value="">Country/ Relegion</option>
                                                <option value="us">United State</option>
                                                <option value="uk">United KingDom</option>
                                                <option value="fr">France</option>
                                                <option value="ch">China</option>
                                                <option value="cr">Czech Republic</option>
                                                <option value="cb">Colombia</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            <br />
                            <Row>
                                <Col sm>
                                    <div className='expiry-date'>
                                        <input type="text" name="search"  className='w-100' placeholder="First Name(Optional)" />
                                    </div>
                                    <br />

                                </Col>
                                
                                <Col sm>
                                    <div className='expiry-date'>
                                        <input type="text" name="search"  className='w-100' placeholder="Last Name" />
                                    </div>

                                </Col>
                            </Row>
                            <Row>
                                <Col sm>
                                    <div className='expiry-date'>
                                        <input type="text" name="search"  className='w-100' placeholder="Address" />
                                    </div>


                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col sm>
                                    <div className='expiry-date'>
                                        <input type="text" name="search"  className='w-100' placeholder="Appartement etc (Optional)" />
                                    </div>


                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col sm>
                                    <div className='expiry-date2'>
                                        <input type="text" name="search"  className='w-100' placeholder="City" />
                                    </div>
                                     <br />
                                </Col>
                                <Col sm>
                                    <div className='expiry-date2'>
                                    {/* <div className="flex-wrap"> */}
                                        <select className=" js-select2 select2-hidden-accessible w-100" data-select2-id="3" tabindex="-1" aria-hidden="true">
                                            <option value="default_option" data-select2-id="5">Country/Relegion</option>
                                            <option value="option_select_name" data-select2-id="27">Option select name</option>
                                            <option value="option_select_name" data-select2-id="28">Option select name</option>
                                        </select>
                                    {/* </div> */}
                                     </div>
                                    <br />

                                </Col>
                                <Col sm>
                                    <div className='expiry-date2'>
                                        <input type="text" name="search"  className='w-100' placeholder="PIN CODE" />
                                    </div>

                                </Col>
                            </Row>
                            </div>
                            </div>
                            <br />
                            <button type="submit" className="btn pay-btn btn-primary w-100 bg-dark">
                                Pay now
                            </button>
                            <br />
                        </form>
                        <br />

                    </Container>
                </Col>
                <Col sm className='rowdivider1'>
                    <div >

                        <Checkoutproductlist  className="sticky" />
                    </div>
                </Col>
            </Row>
            {/* </Container> */}
        </div>
    )
}

export default Checkout