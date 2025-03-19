import React, { useEffect, useState } from 'react'
import logo from '../images/logo (1).png'
import { Container, Row } from 'react-bootstrap'
import pro1 from '../images/pro1.jpg'
import Thermometer from '../images/menuban.jpg'
import { Link, useLocation } from 'react-router-dom'
import { Col, Button, Form } from 'react-bootstrap';

import '../css/style4.css';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaPhone, FaRegEnvelope, FaLocationArrow, FaTwitter, FaFacebook, FaInstagram, IoLogoLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useDispatch, useSelector } from 'react-redux';

import Offcanvas from 'react-bootstrap/Offcanvas';



// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { add, addOne, remove, removeOne } from '../Redux/CartSlice'
function Header(p) {
  console.log(p.data);
  const name2 = useSelector((state) => state.cart);
  console.log(name2)
  const [show, setShow] = useState(false);
  
  const location = useLocation();
  const{id,price,img}=location.state || {};
  useEffect(()=>{

    if(id!=null){
  
      console.log(setShow(true),'settrrr');
      console.log(show,'settrrr1');
      
      
    }
  })
  
  
  
  const dispatch = useDispatch();
  
  const handleClose = () => setShow(false);
  const addcards = (name,price, img, id,slug) =>{
    const data = {
      id:id,
      name:name,
      price:price,
      img:img,
      
      slug:slug
    }
    console.log(data,'s');
    
    
    
    
    setShow((s) => !s);}
    let totalPric = 0;
    console.log(name2,'header');
    console.log(name2.length,'hed');
    
    
    for(let i=0; i<name2.length; i++){
      totalPric+=name2[i].price;
      console.log(totalPric);
      
    }
    console.log(totalPric,'header');
    
    const removeFromCart = (name) => {
      dispatch(remove(name));
    }
    const addOneMMore = (id,price) => {
      
      
    const data = {
        id,
        price
      }
      console.log(price,'myprice');
      
      dispatch(addOne(data))
    }
    const removeOneMore = (id,price) => {
      const data = {
        id:id,
        price
      }
      console.log(price,'myprice4');

      dispatch(removeOne(data))
    }
    
  return (
    <>
      <header id='hed' className='w-100'>
        <Container fluid>
          <div class="headersect">

            <div class="logo">
              <img src={logo} alt="" />
            </div>
            <div class="headersec">

              <div class="logo1">


                <p>  <FaPhone className='blue blue10' /> (00) 000 123 456789</p>
              </div>
              <div class="logo1">
                <p><FaRegEnvelope className='blue blue10' /> info@example.com</p>
              </div>
              <div class="logo1 logo11">
                <p>| <FaLocationArrow className='blue blue10' />  Store Loacation </p>
              </div>
            </div>
          </div>
        

        </Container>
      </header>
      <div className='hrrr2'></div>
      <hr className='hrrr'/>
      <nav class="container navbar navbar-expand-sm " >
        <div class="container-fluid navsh">
          <button class="navbar-toggler border-0 " type="button" data-bs-toggle="offcanvas" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon bluetogle"></span>
          </button>
          <div class="offcanvas offcanvas-start w-70%" id="collapsibleNavbar" aria-controls="offcanvasScrolling">
            <ul class="navbar-nav">
              <div class="offcanvas-header"  data-bs-scroll="true" data-bs-backdrop="false">
                <h1 class="offcanvas-title">Heading</h1>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
              </div>
              {/* <a class="nav-link active" id="hom" href="#">Home</a> */}
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Home
              </a>

              <div class="dropdown-menu  w-100 animate slideIn" aria-labelledby="navbarDropdown ">
                <Container className='drops'>
                  <Row>
                    <Col sm={2}>
                      <ul><h6>Thermometer </h6>
                        <hr />
                        <li>Equinox</li>
                        <li>Equinox</li>
                        <li>Equinox</li>
                        <li>Equinox</li>
                        <li>Equinox</li>
                        <li>Equinox</li>
                        <li>Equinox</li>

                      </ul>
                    </Col>
                    <Col sm={2}>
                      <ul><h6>Thermometer</h6>
                        <hr />
                        <li>Equinox</li>
                        <li>Equinox</li>
                        <li>Equinox</li>
                        <li>Equinox</li>
                        <li>Equinox</li>
                        <li>Equinox</li>
                        <li>Equinox</li>
                      </ul>
                    </Col>
                    <Col sm={2}>
                      <ul><h6>Thermometer</h6>
                        <hr />
                        <li>Equinox</li>
                        <li>Equinox</li>
                        <li>Equinox</li>
                        <li>Equinox</li>
                        <li>Equinox</li>
                        <li>Equinox</li>
                        <li>Equinox</li>

                      </ul>
                    </Col>
                    <Col sm={6}>
                      <img src={Thermometer} alt="" className='p-5' />
                    </Col>
                  </Row>
                </Container>
              </div>


              <li class="nav-item">
                <a class="nav-link" href="#" id='collection'>collection</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Biomedical</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Eqipment</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Medic Tools</a>
              </li>

              <li class="nav-item">
                <div class="dropdown3">
                  <button class="dropbtn3 dropdown-toggle">Pages</button>
                  <div class="dropdown3-content">

                    <Link to="/" className='page my-link'>Home </Link>
                    <Link to="/contact-us" className='page'>About us </Link>
                    <Link to="/contactus" className='page'>Contact us </Link>
                    <Link to="/contact-us" className='page'>products </Link>
                    <Link to="/contact-us" className='page'>Helps</Link>
                    <Link to="/ss" className='page'>Signup</Link>
                    <Link to="/multipage" className='page'>Multiple pages</Link>
                    <Link to="/formgett" className='page'>Form get</Link>
                    <Link to="/addcard" className='page'>Addcard</Link>
                    

                  </div>
                </div>
                {/* <a class=" page nav-link">Pages</a>
                  <ul className='dropdown2'>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                  </ul> */}

                {/* <a class="nav-link" href="#">Pages</a>
              <Link  to="/contact-us" className='page'>Pages
                <ul className='dropdown2'>
                  <li>ab</li>
                  <li>ab</li>
                  <li>ab</li>
                </ul>
              </Link> */}
              </li>


            </ul>

          </div>
          <div className='dropdown'>
            <img src={pro1} class="d-block w-100" alt="..." />
          </div>
          <div class="icons">


          <div className='d-flex icsize'>
          <div className='icsize1'><IoIosSearch /></div>
          <div className='icsize1 position-relative'><MdOutlineShoppingBag /><span class="position-absolute top-0 start-100 translate-middle  badge badge-circle badge-primary">5</span></div>
          
        </div>
          </div>
        </div>
        <div className='ico'>

        <div className='d-flex icsize'>
          <div className='icsize1'><IoIosSearch /></div>
          <div className='icsize1  position-relative' onClick={ ()=>addcards()}><MdOutlineShoppingBag /><span className="position-absolute badgeicon top-0   translate-middle rounded-5 bg-dark badge cartbutton ">{name2.length}</span></div>
          <div className='icsize1'><Link to="/Login1" ><FaRegUserCircle /></Link></div>
        </div>
        </div>
       
      </nav>
      <Offcanvas placement="end" scroll="true"  show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping cart</Offcanvas.Title>
        </Offcanvas.Header>
          <hr/>
        <Offcanvas.Body className='smcart'>
          {name2?.map((data)=>{
            return (<>
              <Container>
              {/* <Addproductvalue/> */}
              
              <Row className='rowforsmallcart'>
              {console.log(data,'js')}
                <Col sm><Image src={data.img} className='picsmallcart' /></Col>
                <Col sm><h4>{data.name}</h4>
               <p>Price: $<span id="productPrice">{data.price}</span></p>

              <br/>
              
              <br/>
              <div className="quantity">
              <button className="minus" aria-label="Decrease" onClick={()=>removeOneMore(data?.id,data?.price)} >
                −
              </button>
              <input
                type="number"
                className="input-box"
                defaultValue={1}
                min={1}
                max={10}
                value={data?.quantity}
              />
              <button className="plus" aria-label="Increase"  onClick={()=>addOneMMore(data?.id,data?.price)}>
                +
              </button>
            </div>
                        
                </Col>
            <button type="button" class="btn-close" aria-label="Close" onClick={()=>removeFromCart(data)}></button>
              </Row>
              {/* new row */}
              
              {/* <Addproductvalue/> */}
              
              
              </Container>

            </>)
          })}
            
              <div className='mt-3 p-3'>
                <Container >
                <div className='veidiv'>
                  <div><svg id="Component_60_1" data-name="Component 60 – 1" xmlns="http://www.w3.org/2000/svg" width="23.159" height="21.5" viewBox="0 0 23.159 21.5" class="icon icon-free-shipping">
  <path id="Line_352" data-name="Line 352" d="M6.47.75H0A.75.75,0,0,1-.75,0,.75.75,0,0,1,0-.75H6.47A.75.75,0,0,1,7.22,0,.75.75,0,0,1,6.47.75Z" transform="translate(7.496 5.637)" fill="currentcolor"></path>
  <path id="Path_54601" data-name="Path 54601" d="M19.659,25.363H5.678a1.817,1.817,0,0,1-1.815-1.815V5.678A1.817,1.817,0,0,1,5.678,3.863H19.544a1.817,1.817,0,0,1,1.815,1.815V10.84a.75.75,0,0,1-1.5,0V5.678a.315.315,0,0,0-.315-.315H5.678a.316.316,0,0,0-.315.315v17.87a.315.315,0,0,0,.315.315H19.659a.315.315,0,0,0,.315-.315V20.936a.75.75,0,0,1,1.5,0v2.612A1.817,1.817,0,0,1,19.659,25.363Z" transform="translate(-3.863 -3.863)" fill="currentcolor"></path>
  <path id="Path_54602" data-name="Path 54602" d="M186.027,111.452h0a1.15,1.15,0,0,1-1.062-1.582l1.485-3.653a.75.75,0,0,1,.164-.248l6.21-6.215a2.1,2.1,0,0,1,2.965,0l.784.784a2.1,2.1,0,0,1,0,2.965l-6.21,6.215a.75.75,0,0,1-.248.165l-3.653,1.485A1.149,1.149,0,0,1,186.027,111.452Zm1.755-4.531-1.114,2.742,2.742-1.114,6.1-6.108a.6.6,0,0,0,0-.844l-.784-.784a.6.6,0,0,0-.844,0Z" transform="translate(-174.027 -93.427)" fill="currentcolor"></path>
  <path id="Line_353" data-name="Line 353" d="M2.688,3.438a.748.748,0,0,1-.53-.22L-.53.53A.75.75,0,0,1-.53-.53.75.75,0,0,1,.53-.53L3.219,2.158a.75.75,0,0,1-.53,1.28Z" transform="translate(18.539 7.649)" fill="currentcolor"></path>
  <path id="Path_54603" data-name="Path 54603" d="M213.588,213.576a.748.748,0,0,1-.53-.22l-2.688-2.688a.75.75,0,0,1,1.061-1.061l2.688,2.688a.75.75,0,0,1-.53,1.28Z" transform="translate(-197.783 -197.067)" fill="currentcolor"></path>
  <path id="Line_354" data-name="Line 354" d="M0,3.931a.748.748,0,0,1-.53-.22.75.75,0,0,1,0-1.061L2.651-.53a.75.75,0,0,1,1.061,0,.75.75,0,0,1,0,1.061L.53,3.711A.748.748,0,0,1,0,3.931Z" transform="translate(15.567 10.13)" fill="currentcolor"></path>
  <path id="Path_54604" data-name="Path 54604" d="M47.82,71.078a.75.75,0,0,1-.57-.263l-.963-1.128a.75.75,0,1,1,1.14-.974l.354.415.958-1.28a.75.75,0,0,1,1.2.9l-1.52,2.031a.75.75,0,0,1-.576.3Z" transform="translate(-43.574 -63.729)" fill="currentcolor"></path>
  <path id="Line_355" data-name="Line 355" d="M5.126.75H0A.75.75,0,0,1-.75,0,.75.75,0,0,1,0-.75H5.126a.75.75,0,0,1,.75.75A.75.75,0,0,1,5.126.75Z" transform="translate(7.496 10.734)" fill="currentcolor"></path>
  <path id="Path_54605" data-name="Path 54605" d="M47.82,156.094a.75.75,0,0,1-.57-.263l-.963-1.128a.75.75,0,0,1,1.14-.974l.354.415.958-1.28a.75.75,0,1,1,1.2.9l-1.52,2.031a.75.75,0,0,1-.576.3Z" transform="translate(-43.574 -143.648)" fill="currentcolor"></path>
  <path id="Line_356" data-name="Line 356" d="M2.427.75H0A.75.75,0,0,1-.75,0,.75.75,0,0,1,0-.75H2.427a.75.75,0,0,1,.75.75A.75.75,0,0,1,2.427.75Z" transform="translate(7.496 15.831)" fill="currentcolor"></path>
  <path id="Path_54606" data-name="Path 54606" d="M47.82,241.109a.75.75,0,0,1-.57-.263l-.963-1.128a.75.75,0,1,1,1.141-.974l.354.415.958-1.28a.75.75,0,1,1,1.2.9l-1.52,2.031a.75.75,0,0,1-.576.3Z" transform="translate(-43.574 -223.567)" fill="currentcolor"></path>
</svg><br/><span class="summary__title">
        Add note
        </span></div>
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="38.197" height="21.5" viewBox="0 0 38.197 21.5" class="icon icon-free-shipping">
  <g id="Group_25127" data-name="Group 25127" transform="translate(-1083.836 -1161.835)">
    <path id="Path_54444" data-name="Path 54444" d="M76.155,6.988H95.1a.132.132,0,0,1,.132.132V23.868" transform="translate(1014.583 1155.597)" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="1.5"></path>
    <line id="Line_317" data-name="Line 317" x1="4.357" transform="translate(1090.739 1179.465)" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="1.5"></line>
    <line id="Line_318" data-name="Line 318" x1="11.098" transform="translate(1101.294 1179.465)" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="1.5"></line>
    <path id="Path_54445" data-name="Path 54445" d="M291.733,32.235h6.362a.4.4,0,0,1,.338.188l4.479,7.216a1.261,1.261,0,0,1,.19.665v5.1a1.46,1.46,0,0,1-1.46,1.46h-1.3" transform="translate(818.182 1132.596)" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="1.5"></path>
    <circle id="Ellipse_200" data-name="Ellipse 200" cx="3.068" cy="3.068" r="3.068" transform="translate(1112.393 1176.449)" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="1.5"></circle>
    <path id="Path_54446" data-name="Path 54446" d="M131.987,165.909a3.068,3.068,0,1,1-3.068-3.068A3.068,3.068,0,0,1,131.987,165.909Z" transform="translate(969.308 1013.608)" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="1.5"></path>
    <path id="Path_54447" data-name="Path 54447" d="M340,62.32h-3.635a.293.293,0,0,0-.289.346l.765,4.31a.415.415,0,0,0,.408.341h6.064" transform="translate(777.784 1105.187)" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="1.5"></path>
    <line id="Line_319" data-name="Line 319" x2="4.116" transform="translate(1086.602 1165.636)" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="1.5"></line>
    <line id="Line_320" data-name="Line 320" x2="4.389" transform="translate(1088.04 1169.229)" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="1.5"></line>
    <line id="Line_321" data-name="Line 321" x2="5.754" transform="translate(1086.714 1176.415)" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="1.5"></line>
    <line id="Line_322" data-name="Line 322" x2="5.88" transform="translate(1084.586 1172.822)" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="1.5"></line>
  </g>
</svg><br/><span class="summary__title">
        Shipping
        </span></div>
                  <div><svg id="Component_63_1" data-name="Component 63 – 1" xmlns="http://www.w3.org/2000/svg" width="29.339" height="21.5" viewBox="0 0 29.339 21.5" class="icon icon-free-shipping">
  <path id="Rectangle_8832" data-name="Rectangle 8832" d="M3-.75H24.839A3.754,3.754,0,0,1,28.589,3V17a3.754,3.754,0,0,1-3.75,3.75H3A3.754,3.754,0,0,1-.75,17V3A3.754,3.754,0,0,1,3-.75Zm21.839,20A2.253,2.253,0,0,0,27.089,17V3A2.253,2.253,0,0,0,24.839.75H3A2.253,2.253,0,0,0,.75,3V17A2.253,2.253,0,0,0,3,19.25Z" transform="translate(0.75 0.75)" fill="currentcolor"></path>
  <path id="Line_339" data-name="Line 339" d="M2.524.75H0A.75.75,0,0,1-.75,0,.75.75,0,0,1,0-.75H2.524a.75.75,0,0,1,.75.75A.75.75,0,0,1,2.524.75Z" transform="translate(0.75 10.75)" fill="currentcolor"></path>
  <path id="Line_340" data-name="Line 340" d="M10.22.75H0A.75.75,0,0,1-.75,0,.75.75,0,0,1,0-.75H10.22a.75.75,0,0,1,.75.75A.75.75,0,0,1,10.22.75Z" transform="translate(18.369 10.75)" fill="currentcolor"></path>
  <path id="Line_341" data-name="Line 341" d="M0,6.822a.75.75,0,0,1-.75-.75V0A.75.75,0,0,1,0-.75.75.75,0,0,1,.75,0V6.072A.75.75,0,0,1,0,6.822Z" transform="translate(10.566 14.677)" fill="currentcolor"></path>
  <path id="Line_342" data-name="Line 342" d="M0,6.229a.75.75,0,0,1-.75-.75V0A.75.75,0,0,1,0-.75.75.75,0,0,1,.75,0V5.479A.75.75,0,0,1,0,6.229Z" transform="translate(10.566 0.75)" fill="currentcolor"></path>
  <path id="Path_54586" data-name="Path 54586" d="M127.382,79.8c-.186,0-.349,0-.492,0l-.259,0a.75.75,0,0,1-.73-.923c.033-.137.818-3.382,2.535-4.762a3.52,3.52,0,0,1,2.209-.823,2.955,2.955,0,0,1,2.223,1,2.719,2.719,0,0,1,.672,2.046,3.036,3.036,0,0,1-1.091,2.108A7.811,7.811,0,0,1,127.382,79.8Zm3.263-5.015a2.041,2.041,0,0,0-1.269.492,7.134,7.134,0,0,0-1.745,3.021,6.2,6.2,0,0,0,3.866-1.019,1.529,1.529,0,0,0,.547-1.063,1.234,1.234,0,0,0-.293-.931A1.454,1.454,0,0,0,130.645,74.79Z" transform="translate(-116.064 -67.705)" fill="currentcolor"></path>
  <path id="Path_54587" data-name="Path 54587" d="M55.374,79.8a7.812,7.812,0,0,1-5.067-1.362,3.036,3.036,0,0,1-1.091-2.108,2.719,2.719,0,0,1,.672-2.046,2.955,2.955,0,0,1,2.223-1,3.52,3.52,0,0,1,2.208.822c1.717,1.38,2.5,4.625,2.535,4.762a.75.75,0,0,1-.73.923l-.259,0C55.722,79.8,55.56,79.8,55.374,79.8ZM52.111,74.79a1.454,1.454,0,0,0-1.107.5,1.234,1.234,0,0,0-.293.931,1.529,1.529,0,0,0,.547,1.063A6.2,6.2,0,0,0,55.123,78.3a7.155,7.155,0,0,0-1.744-3.021A2.041,2.041,0,0,0,52.111,74.79Z" transform="translate(-45.559 -67.705)" fill="currentcolor"></path>
  <path id="Line_343" data-name="Line 343" d="M3.206,3.956a.748.748,0,0,1-.53-.22L-.53.53A.75.75,0,0,1-.53-.53.75.75,0,0,1,.53-.53L3.736,2.675a.75.75,0,0,1-.53,1.28Z" transform="translate(10.566 11.353)" fill="currentcolor"></path>
  <path id="Line_344" data-name="Line 344" d="M0,3.956a.748.748,0,0,1-.53-.22.75.75,0,0,1,0-1.061L2.675-.53a.75.75,0,0,1,1.061,0,.75.75,0,0,1,0,1.061L.53,3.736A.748.748,0,0,1,0,3.956Z" transform="translate(7.359 11.353)" fill="currentcolor"></path>
  <path id="Line_345" data-name="Line 345" d="M5.515.75H0A.75.75,0,0,1-.75,0,.75.75,0,0,1,0-.75H5.515a.75.75,0,0,1,.75.75A.75.75,0,0,1,5.515.75Z" transform="translate(19.479 15.268)" fill="currentcolor"></path>
  <path id="Line_346" data-name="Line 346" d="M2.757.75H0A.75.75,0,0,1-.75,0,.75.75,0,0,1,0-.75H2.757a.75.75,0,0,1,.75.75A.75.75,0,0,1,2.757.75Z" transform="translate(19.479 17.776)" fill="currentcolor"></path>
Discount
        </svg><br/><span class="summary__title">
        Discount
        </span></div>
</div>
                </Container>
                <hr/>
              </div>
              <div className='subtotal'>
                <div>SubTotal</div>
                <div>$ {totalPric}</div>
              </div>
                Text and shipping calculated out
                <div className='mt-3 '>
                  <Button className='w-100 checkout' >Check Out</Button>
                </div>
                <div className='mt-3 '>
                  <Button className='w-100 viewcart'>View Cart</Button>
                </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Header