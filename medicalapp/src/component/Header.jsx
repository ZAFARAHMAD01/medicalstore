import React, { useEffect } from 'react'
import logo from '../images/logo (1).png'
import { Container, Row } from 'react-bootstrap'
import pro1 from '../images/pro1.jpg'
import Thermometer from '../images/menuban.jpg'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import '../css/style4.css';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaPhone, FaRegEnvelope, FaLocationArrow, FaTwitter, FaFacebook, FaInstagram, IoLogoLinkedin, FaSquareXTwitter } from "react-icons/fa6";

import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header(p) {
  console.log(p.data);
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
          <div className='icsize1 position-relative'><MdOutlineShoppingBag /><span class="position-absolute top-0 start-100 translate-middle  badge badge-circle badge-primary">5</span></div>
          <div className='icsize1'><FaRegUserCircle /></div>
        </div>
        </div>
       
      </nav>
      
    </>
  )
}

export default Header