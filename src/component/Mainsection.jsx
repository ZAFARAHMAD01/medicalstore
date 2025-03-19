import React, { useEffect } from 'react'
import log10 from '../images/icon--1_100x_1.png'
import log11 from '../images/icon--2_100x_1.png'
import team1 from '../images/team-4_100X_08560cb1-f96c-4713-8209-b977f92d6fe2.jpg'
import team2 from '../images/team-3_100X_efade10b-a516-4279-9bda-41bb125b370a.jpg'
import team3 from '../images/team-2_100X_ac31952c-e865-4ee2-9344-4f18504c679e.jpg'
import team4 from '../images/team-1_100X_e2826b3a-0a3f-44ea-9de1-4daf50fbe226.jpg'
import work1 from '../images/blog10.jpg'
import work2 from '../images/blog9.jpg'
import work3 from '../images/blog8.jpg'
import work4 from '../images/blog7.jpg'
import term1 from '../images/home-banner2_1920X_1.jpg'
import term2 from '../images/home-banner_1920X_1.jpg'
import term3 from '../images/home-bg_1_1.jpg'
import log from '../images/pdt22.jpg'
import log2 from '../images/pdt13.jpg'
import log3 from '../images/pdt21.jpg'
import log4 from '../images/pdt23.jpg'
import log5 from '../images/pdt18.jpg'
import log6 from '../images/pdt17.jpg'
import log7 from '../images/pdt16.jpg'
import log8 from '../images/pdt15.jpg'
import log9 from '../images/Medil.png'
import slide2 from '../images/slider02_2000x_1.jpg'
import slide1 from '../images/slider01_2000x_1.jpg'
import slide3 from '../images/slider03_2000x_1.jpg'
import { Container, Row,Col, Button, Form } from 'react-bootstrap'
import Footer from './Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import Card1 from './Card1'
import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Routes, Route, useParams } from 'react-router-dom';

import mask1 from '../images/facemask1.webp'

function Mainsection(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const options = [

    {
      name: 'Disable backdrop',
      scroll: false,
      backdrop: false,
    },
    {
      name: 'Enable body scrolling',
      scroll: true,
      backdrop: false,
    },
    {
      name: 'Enable both scrolling & backdrop',
      scroll: true,
      backdrop: true,
    },
  ];
  const bestseller = [{
    id:"1",
    name:"Oxegen Pump",
    nameclassName:"nam",
    price:parseInt(216)
    ,
    nameclassprice:"pric",
    link:"/home",
    imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt20.jpg?v=1542879339&width=533',
    slug:"oxygenpump",
    catogoriea:"face-mask"
    

    // imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt20.jpg?v=1542879339&width=533'
  },
  {
    id:"2",
    name:"Face Mask",

    nameclassName:"nam",
    price:parseInt(316),
    nameclassprice:"pric",
    link:"/home",
    imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt23.jpg?v=1542880721&width=533',
    slug:"face-mask"

  },
  {
    id:"10",

    name:"Orthopadic Footwear",
    nameclassName:"nam",
    price:parseInt(729),
    nameclassprice:"pric",
    link:"/home",
    imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt14.jpg?v=1542875196&width=533',
    slug:"Orthopadic-Footwear"

  },
  {
    id:"3",

    name:"Fore thermometer",
    nameclassName:"nam",
    price:parseInt(629),
    nameclassprice:"pric",
    link:"/home",
    imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt13.jpg?v=1542875072&width=533',
    slug:"Fore-thermometer"
  },
  {
    id:"4",

    name:"Padometer",
    nameclassName:"nam",
    price:parseInt(619),
    nameclassprice:"pric",
    link:"/home",
    imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt10.jpg?v=1542874364&width=533',
    slug:"padometer"

  },
  {
    id:"5",

    name:"Operation Scissors",
    nameclassName:"nam",
    price:parseInt(419),
    nameclassprice:"pric",
    link:"/home",
    imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt11.jpg?v=1542874644&width=533',
    slug:"Operation-Scissors"

  },
  {
    id:"6",

    name:"Ear thermometer",
    nameclassName:"nam",
    price:parseInt(489),
    nameclassprice:"pric",
    link:"/home",
    imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt9.jpg?v=1542874140&width=533',
    slug:"Ear-thermometer"
  },
  {
    id:"7",

    name:"Lence case kit",
    nameclassName:"nam",
    price:parseInt(379),
    nameclassprice:"pric",
    link:"/home",
    imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt6.jpg?v=1542873498&width=533',
    slug:"Lence-case-kit"
  },
  
 ]
  const Feutreditem = [{
    id:"100",
    name:"Calories Meter",
    nameclassName:"nam",
    price:parseInt(216)
    ,
    nameclassprice:"pric",
    link:"/home",
    imag:log,
    slug:"Calories-Meter",
    catogoriea:"Calories-Meter"
    

    // imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt20.jpg?v=1542879339&width=533'
  },
  {
    id:"101",
    name:"Forehead-Thermometer",

    nameclassName:"nam",
    price:parseInt(316),
    nameclassprice:"pric",
    link:"/home",
    imag:log2,
    slug:"face-mask",
    slug:"Forehead-Thermometer",


  },
  {
    id:"102",

    name:"Dental flox box",
    nameclassName:"nam",
    price:parseInt(729),
    nameclassprice:"pric",
    link:"/home",
    imag:log3,
    slug:"Orthopadic-Footwear"

  },
  {
    id:"103",

    name:"Sleeping Eye Mask",
    nameclassName:"nam",
    price:parseInt(629),
    nameclassprice:"pric",
    link:"/home",
    imag:log5,
    slug:"Fore-thermometer"
  },
  {
    id:"104",

    name:"Smart Mask",
    nameclassName:"nam",
    price:parseInt(619),
    nameclassprice:"pric",
    link:"/home",
    imag:log6,
    slug:"padometer"

  },
  {
    id:"105",

    name:"Calories Meter",
    nameclassName:"nam",
    price:parseInt(419),
    nameclassprice:"pric",
    link:"/home",
    imag:log7,
    slug:"Operation-Scissors"

  },
  {
    id:"6",

    name:"Hand glufs",
    nameclassName:"nam",
    price:parseInt(489),
    nameclassprice:"pric",
    link:"/home",
    imag:log8,
    slug:"Ear-thermometer"
  },
  {
    id:"106",

    name:"Lence case kit",
    nameclassName:"nam",
    price:parseInt(379),
    nameclassprice:"pric",
    link:"/home",
    imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt6.jpg?v=1542873498&width=533',
    slug:"Lence-case-kit"
  },
  
 ]

  const [key, setKey] = useState('home');
  

  useEffect(()=>{
    AOS.init({duration:2000});

  })
 

  return (
    <div>

          <section className='cross'>
           <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
             <div class="carousel-indicators">
               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
             </div>
             <div class="carousel-inner">
               <div class="carousel-item active">
                 <img src={slide1} class="d-block w-100" alt="..." />
                 <div class="carousel-caption d-none d-md-block">
                   <h2 class="banner__heading h1 heaing-crosol text-start">Digital <br />Blood pressure </h2>
                   <div class="banner__text text-start">
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit. Maecenas sed lacus</p>
                   </div>
                   <div>
                     <br />
                     <a type="btn" className='btn bgc'>Buy Now</a>

                   </div>
                 </div>
               </div>
               <div class="carousel-item">
                 <img src={slide2} class="d-block w-100" alt="..." />
                 <div class="carousel-caption  d-none d-md-block">
                   <h2 class="banner__heading h1 heaing-crosol text-start">Medical <br />First & Kit</h2>
                    <div class="banner__text text-start">
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       <br /> Maecenas sed lacus
                     </p>
                   </div>
                   <div>
                     <br />
                      <a type="btn" className='btn bgc'>Buy Now</a>

                    </div>
                 </div>
               </div>
               <div class="carousel-item">
                 <img src={slide3} class="d-block w-100" alt="..." />
                 <div class="carousel-caption d-none d-md-block ">
                   <h2 class="banner__heading h1 heaing-crosol text-start">Digital <br />Glucometer</h2>
                   <div class="banner__text text-start">
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed lacus</p>
                   </div>
                   <div>
                     <br />
                     <a type="btn" className='btn bgc float-start'>Buy Now</a>

                   </div>
                 </div>

               </div>
             </div>
             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Previous</span>
             </button>
             <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Next</span>
             </button>
           </div>
         </section>
      <div style={{ height: "100px" }}></div>
      <section>
        <Container>
          <Row className='p-3'>

            <div className='col-md-8 banner mt-3' data-aos='slide-right'>

              <img src={term1} alt="Snow" className='picwidth100  mleft bannerimg rounded-3' />
              <div class="top-left">
                <h1>Ear Thermometer</h1>
                <span>Pellentesque posuere orci <br />lobortis scelerisque blandit. <br /> Donec id tellus lacinia an, tincidunt risus ac</span><br /><br />
                <a href="/collections" class=" btn bg-blue  primary-button ">Buy now</a>
              </div>

            </div>
            <div className='col-md-4 bg-blue rounded-3 mt-3 ' data-aos='slide-left'>
              <div className='free'>

                <h1>Free shipping
                  35% OFF</h1>
                <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac</p>
              </div>

            </div>


          </Row>
        </Container>
      </section>
      {/* <div style={{ height: "100px" }}></div> */}
 <section>
   <div class="container">
     <div className='row p-3'>

       <div className='col-md-4 bg-blue rounded-3 mt-3' data-aos='slide-right'>
         <h2>Trusted Brands</h2>
         <p>Pellentesque posuere orci lobortis scelerisque blandit</p>
         <ul>
           <li>Huge Selection</li>
           <li>Always low price</li>
           <li>Fast Shipping</li>
         </ul>

       </div>
       <div className='col-md-8 banner mt-3 ' data-aos='slide-left'>

         <img src={term2} alt="Snow" className='picwidth100 bannerimg  mright rounded-3' />
         <div class="top-left1">
           <h1>Stethoscope</h1>
           <span>Pellentesque posuere orci <br />lobortis scelerisque blandit. <br /> Donec id tellus lacinia an, tincidunt risus ac</span><br /><br />
           <a href="/collections" class=" btn bg-blue  primary-button ">Buy now</a>
         </div>

       </div>


     </div>
   </div>
 </section>
 <div style={{ height: "100px" }}></div>
 <section>
   <img src={term3} alt="Snow" className='picwidth100  hhhh-50' />
   <div class="centered">
     <h1>One stop destination for all your medical need.</h1>
     <span>Pellentesque posuere orci lobortis scelerisque blandit</span><br /><br />
     <Button type="submit">Subscribe</Button>
 <div style={{ height: "600px" }}></div>
 {/* <div style={{ height: "100px" }}></div> */}


   </div>


 </section>
 <div style={{ height: "100px" }}></div>
 <section style={{ width: "100%", margin: "auto" }}>
   <Container fluid>
     <Row>
       <col-md-4>
         <h1 className='text-center'>Shop By Category</h1>
         <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac
         </p>
       </col-md-4>
     </Row>
     <br />
     <br />
     <br />

     <Row>

        <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3" 
    >
      <Tab eventKey="home" title="Home">
        <Row>
        {
             Feutreditem.map((cardss)=>
             <Card1 pp={cardss} />)
             }
        </Row>
      </Tab>
      <Tab eventKey="profile" title="Profile">
      <Row>

      {
             bestseller.map((cardss)=>
             <Card1 pp={cardss} />)
             }
      </Row>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
    </Row>

      
   </Container>

 </section>
      <div style={{ height: "100px" }}></div>
<Col sm><img class="card-img-top hurry " src={log9} alt="Card image"></img>
<div class="centered1 text-start">
    <h1>Hurry UP.</h1>
    <h2>Hurry Up! Daily Deal Of The Day</h2>
    <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat velit.Donec id tellus lacinia an, tincidunt risus ac, consequat velit</p>
    <br /><br />
    <Button type="submit" className='h-100'>Buy Now</Button>
 <div style={{ height: "700px" }}></div>

</div>
</Col>
<div style={{ height: "100px" }}></div>
<section style={{ width: "50%", margin: "auto" }}>
    <Container>
        <Row>
            <col-md-4>
                <h1 className="text-center">New Arrivals</h1>
                <p>Pellentesque posuere orci lobortis scelerisque blandit. <br />Donec id tellus lacinia an, tincidunt risus ac
                </p>

            </col-md-4>
        </Row>
    </Container>

    <div style={{ height: "100px" }}></div>

</section>
<Container>

  <Row>
    <Col sm>
    <div class="card mt-3 proimg">
      <div class="card-body">
        <img class="card-img-top" src={log5} alt="Card image" style={{ width: "100%" }} />
        <div className='addcard w-100'>
          <div className='d-flex ADDCARD w-100'>

            <div className='w-100 '><Button className='w-100 rounded-0 addc addc2'>Quick buy</Button></div>
            <div className='w-100 '><Button className='w-100 rounded-0 addc' onClick={toggleShow}>Add Card</Button></div>
          </div>

        </div>
        <div className='cardpadding'>

          <a href="/products/calories-meter" class="full-unstyled-link">
            Sleeping Eye Mask<span class="choosen-swatch">
              <br />
            </span>
          </a>
          <span class="price-item price-item--regular">
            $279.00
          </span>
          <br />
          <FaStar className='rating' />
          <FaStar className='rating' />
          <FaStar className='rating' />
          <FaStar className='rating' />
          <FaStarHalfAlt className='rating' /> 1 review
        </div>
      </div>
    </div>
    </Col>
    <Col sm>
    <div class="card mt-3 proimg">
      <div class="card-body">
        <img class="card-img-top" src={log6} alt="Card image" style={{ width: "100%" }} />
        <div className='addcard w-100'>
          <div className='d-flex ADDCARD w-100'>

            <div className='w-100 '><Button className='w-100 rounded-0 addc addc2'>Quick buy</Button></div>
            <div className='w-100 '><Button className='w-100 rounded-0 addc' onClick={toggleShow}>Add Card</Button></div>
          </div>

        </div>
        <div className='cardpadding'>

          <a href="/products/calories-meter" class="full-unstyled-link">
            Smart Mask <span class="choosen-swatch">
              <br />
            </span>
          </a>
          <span class="price-item price-item--regular">
            $279.00
          </span>
          <br />
          <FaStar className='rating' />
          <FaStar className='rating' />
          <FaStar className='rating' />
          <FaStar className='rating' />
          <FaStarHalfAlt className='rating' /> 1 review
        </div>
      </div>
    </div>
    </Col>
    <Col sm>
    <div class="card mt-3 proimg">
      <div class="card-body">
        <img class="card-img-top" src={log7} alt="Card image" style={{ width: "100%" }} />
        <div className='addcard w-100'>
          <div className='d-flex ADDCARD w-100'>

            <div className='w-100 '><Button className='w-100 rounded-0 addc addc2'>Quick buy</Button></div>
            <div className='w-100 '><Button className='w-100 rounded-0 addc' onClick={toggleShow}>Add Card</Button></div>
          </div>

        </div>
        <div className='cardpadding'>

          <a href="/products/calories-meter" class="full-unstyled-link">
            Calories Meter <span class="choosen-swatch">
              <br />
            </span>
          </a>
          <span class="price-item price-item--regular">
            $279.00
          </span>
          <br />
          <FaStar className='rating' />
          <FaStar className='rating' />
          <FaStar className='rating' />
          <FaStar className='rating' />
          <FaStarHalfAlt className='rating' /> 1 review
        </div>
      </div>
    </div>
    </Col>
  </Row>
</Container>
      <div style={{ height: "100px" }}></div>

      <Container>
        <Row>
          <Col sm className='mt-3'>
            <Row className='sky-blue' data-aos='slide-right'>
              <Col xs={12} md={8}>
                <h1>Free Shipping</h1>
                <p>Pellentesque posuere orci lobortis scelerisque blandit.</p>
              </Col>
              <Col xs={12} md={4} data-aos='slide-right'>
                <img class="card-img-top" src={log10} alt="Card image" />
              </Col>
            </Row>
          </Col>
          <Col sm className='mt-3'><Row className='sky-blue2' data-aos='slide-right'>
            <Col xs={12} md={8}>
              <h1>24x7 Support</h1>
              <p>Pellentesque posuere orci lobortis scelerisque blandit..</p>
            </Col>
            <Col xs={12} md={4} data-aos='slide-right'>
              <img class="card-img-top" src={log11} alt="Card image" />
            </Col>
          </Row></Col>
        </Row>
      </Container>
      <div style={{ height: "100px" }}></div>
      <Container style={{ margin: "auto" }}>
        <h1>Customer Testimonials</h1>
        <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac</p>
      </Container>
      <div style={{ height: "100px" }}></div>
      <Container>
        <Row>
          <Col sm ><div class="card mt-3" style={{ padding: "10%" }} >
            <img class="card-img-top" src={team1} alt="Card image" className='rounded-circle circlsmall' />
            <div class="card-body">
              <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat</p>
              <a href="/products/calories-meter" class="full-unstyled-link">
                Geoferray marsala <span class="choosen-swatch">
                  <br />
                </span>
              </a>
              <span class="price-item price-item--regular">
                Marketting manager
              </span>
            </div>
          </div></Col>
          <Col sm> <div class="card mt-3" style={{ padding: "10%" }} >
            <img class="card-img-top" src={team2} alt="Card image" className='rounded-circle circlsmall' />
            <div class="card-body">
              <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat</p>

              <a href="/products/calories-meter" class="full-unstyled-link">
                Amanda Mayam <span class="choosen-swatch">
                  <br />
                </span>
              </a>
              <span class="price-item price-item--regular">
                Co-Founder
              </span>
            </div> </div></Col>
          <Col sm><div class="card mt-3" style={{ padding: "10%" }}  >
            <img class="card-img-top" src={team3} alt="Card image" className='rounded-circle circlsmall' />
            <div class="card-body">
              <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat</p>

              <a href="/products/calories-meter" class="full-unstyled-link">
                Danel Moor <span class="choosen-swatch">
                  <br />
                </span>
              </a>
              <span class="price-item price-item--regular">
                Marketting & CEO
              </span>
            </div></div></Col>
          <Col sm><div class="card mt-3" style={{ padding: "10%" }}  >
            <img class="card-img-top" src={team4} alt="Card image" className='rounded-circle circlsmall' />
            <div class="card-body">
              <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat</p>

              <a href="/products/calories-meter" class="full-unstyled-link">
                Alex Macw <span class="choosen-swatch">
                  <br />
                </span>
              </a>
              <span class="price-item price-item--regular">
                Project Lead
              </span>
            </div></div></Col>
        </Row>
      </Container>
      <div style={{ height: "100px" }}></div>
      <div className='bgblue'>
        <div style={{ height: "100px" }}></div>
        {/* <Container fluid className='sky-blue2'> */}
        <h2 class=" news-title h1 ">Newsletter Subscribe</h2>
        <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac</p>
        <div className='formmm'>

          <Form>
            <div className='dis'>

              <div>

                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </div>
              <div>

                <Button type="submit">Submit</Button>
              </div>
            </div>




          </Form>
        </div>
        <div style={{ height: "100px" }}></div>

      </div>
      <div style={{ height: "100px" }}></div>
      <Container>
        <Row>
          <Col sm><div class="card mt-3"  >
            <img class="card-img-top" src={work1} alt="Card image" />
            <div class="card-body" style={{ padding: "10%" }} >
              <a href="/products/calories-meter" class="full-unstyled-link">
                NOV 21 <span class="choosen-swatch">
                  <br />
                </span>
              </a>
              <p>6 Comments | RAM M</p>

              <a href="/products/calories-meter" class="full-unstyled-link">
                Best caring Doctor <span class="choosen-swatch">
                  <br />
                </span>
              </a>
              <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat</p>
              <Button variant="primary">Read More</Button>{' '}
            </div></div></Col>
          <Col sm><div class="card mt-3" >
            <img class="card-img-top" src={work2} alt="Card image" />
            <div class="card-body" style={{ padding: "10%" }} >
              <a href="/products/calories-meter" class="full-unstyled-link">
                NOV 21 <span class="choosen-swatch">
                  <br />
                </span>
              </a>
              <p>6 Comments | RAM M</p>

              <a href="/products/calories-meter" class="full-unstyled-link">
                Best caring Doctor <span class="choosen-swatch">
                  <br />
                </span>
              </a>
              <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat</p>
              <Button variant="primary">Read More</Button>{' '}
            </div></div></Col>
          <Col sm><div class="card mt-3" >
            <img class="card-img-top" src={work3} alt="Card image" />
            <div class="card-body" style={{ padding: "10%" }} >
              <a href="/products/calories-meter" class="full-unstyled-link">
                NOV 21 <span class="choosen-swatch">
                  <br />
                </span>
              </a>
              <p>6 Comments | RAM M</p>

              <a href="/products/calories-meter" class="full-unstyled-link">
                Best caring Doctor <span class="choosen-swatch">
                  <br />
                </span>
              </a>
              <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat</p>
              <Button variant="primary">Read More</Button>{' '}
            </div></div></Col>
          <Col sm><div class="card mt-3" >
            <img class="card-img-top" src={work4} alt="Card image" />
            <div class="card-body" style={{ padding: "10%" }} >
              <a href="/products/calories-meter" class="full-unstyled-link">
                NOV 21 <span class="choosen-swatch">
                  <br />
                </span>
              </a>
              <p>6 Comments | RAM M</p>

              <a href="/products/calories-meter" class="full-unstyled-link">
                Best caring Doctor <span class="choosen-swatch">
                  <br />
                </span>
              </a>
              <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat</p>
              <Button variant="primary">Read More</Button>{' '}
            </div></div></Col>
        </Row>
        <div style={{ height: "100px" }}></div>
        
      </Container>
      {/* addcardoffcanvas */}
   
      <Offcanvas placement="end" scroll="true" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping cart</Offcanvas.Title>
        </Offcanvas.Header>
          <hr/>
        <Offcanvas.Body>
        

          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        
        </Offcanvas.Body>
      </Offcanvas>
    <Footer/>
    </div>
  )
}

export default Mainsection