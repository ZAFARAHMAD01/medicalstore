import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductSelectcart from '../../component/ProductSelectcart'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Container, Row } from 'react-bootstrap'
import { Col, Button, Form } from 'react-bootstrap';
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import Card1 from '../../component/Card1';
import '..//../css/style4.css';
import Oxygenpum1 from '..//../images/oxygen-pump1.webp'
import Oxygenpum2 from '..//../images/oxygen-pimp2.jpg'
import { add, addOne, remove, removeOne } from '../../Redux/CartSlice';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '..//../javascript/myjavascript'
import '..//../css/style3.css'
import mask1 from '..//../images/facemask1.webp'
import mask_black from '..//../images/facemask2.webp'
import mask_pop from '..//../images/facemask3.webp'
import mask_up from '..//../images/facemask4.webp'
// import {addOne,removeOne} from '../Redux/CartSlice.jsx'



function Oxygenpum(props) {
  const {slug} =useParams();
  const {catogoriea}=useParams();
  
  console.log(catogoriea,'this');
  
  console.log(slug,'zafa');
  
  const bestseller = [{
    id:"1",
    name:"Oxegen Pump",
    nameclassNameName:"nam",
    price:parseInt(216)
    ,
    nameclassNameprice:"pric",
    link:"/home",
    imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt20.jpg?v=1542879339&width=533',
    imag1:Oxygenpum1,
    imag2:Oxygenpum2,
    imag3:'https://medik-demo.myshopify.com/cdn/shop/products/pdt20.jpg?v=1542879339&width=533',
    imag4:'https://medik-demo.myshopify.com/cdn/shop/products/pdt20.jpg?v=1542879339&width=533',
    discription:'jaascjiacj',
    slug:"oxygenpump",
    catogoriea:"oxygenpump"



    // imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt20.jpg?v=1542879339&width=533'
  },
  {
    id:"2",
    name:"Face Mask",

    nameclassNameName:"nam",
    price:parseInt(316),
    nameclassNameprice:"pric",
    link:"/home",
    imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt23.jpg?v=1542880721&width=533',
    slug:"face-mask",
    


  },
  {
    id:"10",

    name:"Orthopadic Footwear",
    nameclassNameName:"nam",
    price:parseInt(729),
    nameclassNameprice:"pric",
    link:"/home",
    imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt14.jpg?v=1542875196&width=533',
    slug:"Orthopadic-Footwear"
  },
  {
    id:"3",

    name:"Fore thermometer",
    nameclassNameName:"nam",
    price:parseInt(629),
    nameclassNameprice:"pric",
    link:"/home",
    imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt13.jpg?v=1542875072&width=533',
    slug:"Fore-thermometer"
  },
  {
    id:"4",

    name:"Padometer",
    nameclassNameName:"nam",
    price:parseInt(619),
    nameclassNameprice:"pric",
    link:"/home",
    imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt13.jpg?v=1542875072&width=533',
    slug:"padometer"

  },
  {
    id:"5",

    name:"Operation Scissors",
    nameclassNameName:"nam",
    price:parseInt(419),
    nameclassNameprice:"pric",
    link:"/home",
    imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt13.jpg?v=1542875072&width=533',
    slug:"Operation-Scissors",


  },
  {
    id:"6",

    name:"Ear thermometer",
    nameclassNameName:"nam",
    price:parseInt(489),
    nameclassNameprice:"pric",
    link:"/home",
    imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt13.jpg?v=1542875072&width=533',
    slug:"Ear-thermometer"
  },
  {
    id:"7",

    name:"Lence case kit",
    nameclassNameName:"nam",
    price:parseInt(379),
    nameclassNameprice:"pric",
    link:"/home",
    imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt13.jpg?v=1542875072&width=533',
    slug:"Lence-case-kit"

  },
  {
    id:"11",

    name:"Ear thermometer mask1",
    nameclassName:"nam",
    price:parseInt(489),
    nameclassprice:"pric",
    link:"/home",
    imag:mask1,
    slug:"Ear-thermometer",
    catogoriea:"face-mask"


},
{
  id:"12",

  name:"Ear thermometer mask2",
  nameclassName:"nam",
  price:parseInt(489),
  nameclassprice:"pric",
  link:"/home",
  imag:mask_black,
  slug:"Ear-thermometer",
  catogoriea:"face-mask"

},
{
  id:"13",

  name:"Ear thermometer mask3",
  nameclassName:"nam",
  price:parseInt(489),
  nameclassprice:"pric",
  link:"/home",
  imag:mask_pop,
  slug:"Ear-thermometer",
  catogoriea:"face-mask"

},
{
  id:"14",

  name:"Ear thermometer mask4",
  nameclassName:"nam",
  price:parseInt(489),
  nameclassprice:"pric",
  link:"/home",
  imag:mask_up,
  slug:"Ear-thermometer",
  catogoriea:"face-mask"

}
 ]
  const [detail,setDetail]=useState([]);
  console.log(bestseller);
  useEffect(()=>{
    const finddetail=bestseller.filter(bestseller =>bestseller.slug===slug);
    if(finddetail.length>0){
      setDetail(finddetail[0]);
      
    }
    else{
      window.location.href='/';
    }
  },[slug])
  
  console.log(slug,'r');
  console.log(detail,'r2');
  const dispatch = useDispatch();
  const [quantity,setQuantity]=useState(1);
  
  const addOneMMore1 = (id,price) => {
    const datadetail = {
      id:id,
      price:price,
      quantity:quantity+1

    }
    console.log(datadetail,'ppppppppppppppp');
    setQuantity(datadetail.quantity);
    


  }

  const removeOneMore1 = (id,price) => {
    const datadetail = {
      id:id,
      price:price,
      quantity:quantity-1

    }
    console.log(datadetail,'ppppppppppppppp');
    setQuantity(datadetail.quantity);
    
    

  }
  // const [show, setShow] = useState(false);
  
  
  // const handleClose = () => setShow(false);
  
  const nevigate=useNavigate();
  const name2 = useSelector((state) => state.cart);
  console.log(name2,'newname');
  const Checkout=(e,id,price)=>{
    
  }
  let totalPric = 0;
    for(let i=0; i<name2.length; i++){
      totalPric+=name2[i]?.price;
    }
    console.log(totalPric);
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
      
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const   addcards1 = (id,price,img) => {
    const datadetail1 = {
      id:id,
      price:price,
      img,
      quantity

    }
    console.log(datadetail1,'pppppppppppppppxxxxx');
    dispatch(add(datadetail1));
    setQuantity(1);
      
      setShow((s) => !s);
    // nevigate('/addcard',{ state: { id:datadetail1.id,price:datadetail1.price,img:datadetail1.img } });

  }
//   const [imgdetail,setImagedetail]=useState();
//   const ChangeImage=(im)=>((detail.imag=im),
//   setImagedetail(detail.imag)
            

// )


 // recommonded products

  // facemask


const [mask,setMask]=useState([]);
  console.log(bestseller);
  useEffect(()=>{
    const finddetai2=bestseller.filter(bestseller =>bestseller.catogoriea);
    
    
    if(finddetai2.length>0){
      setMask(finddetai2);
      
    }
    else{
      window.location.href='/';
    }
  },[catogoriea])
  
  console.log(mask,'today');
  const [mask2,setMarks2]=useState([]);
  useEffect(()=>{

    {bestseller.map((data2)=>{
      
      console.log(data2.catogoriea,'cato');
      console.log(data2.slug,'cato');
      console.log(slug,'to');
      console.log(data2.catogoriea,'to');
    const finddetai2=bestseller.filter(bestseller =>bestseller.catogoriea===slug);
      
      if(data2.catogoriea===slug){
        console.log('true');
        
        setMarks2(finddetai2)
      }
      
    })}
  },[slug])
  console.log(mask2,'mastoday2k2');
  return (
    <div>
        {
             [detail].map((cardss)=>
             <>
             <Container>
                    <Row>
                      <Col sm>
                         <section classNameName='cross2'>
                            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                              <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                              </div>
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <img src={cardss.imag} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" id='img11'>
                                  <img src={cardss.imag} className="d-block w-100" alt="..." />
                                  
                                </div>
                                <div className="carousel-item">
                                  <img src={cardss.imag} className="d-block w-100" alt="..." />
                                  

                                </div>
                              </div>
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon rounded-circle next" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                              </button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon rounded-circle next" aria-hidden="true"></span>
                                <span className="visually-hidden next">Next</span>
                              </button>
                            </div>
                  </section>
                  <section className='itemsgallerya'>

                  <Row className='mt-3 '>
                  
                    <Col sm className='gallery-b ' >
                    <Image src={cardss.imag} className='itemsgallery' />

                    </Col>
                    <Col sm >
                    <Image src={cardss.imag} className='itemsgallery'  />

                    </Col>
                    <Col sm>
                    <Image src={cardss.imag} className='itemsgallery'  />
                    </Col>
                    <Col sm>
                    <Image src={cardss.imag} className='itemsgallery' />

                    </Col>
                  </Row>
                  </section>
                      </Col>
                      <Col sm>
                         <h1 className='text-center'>{cardss.name}</h1>
                         {/* {detail.id} */}
                         {/* {detail.price} */}
                         <h5>sold out</h5>
                         <h2 className='text-center'>${cardss.price}</h2>
                         <h2 className='text-center'>${cardss.discription}</h2>  
                         <div><FaStar className='rating'/><FaStar className='rating' /><FaStar className='rating'/><FaStar className='rating'/><FaStarHalfAlt className='rating'/> 1 review</div>
                         <div className="quantity">
  <button
    className="minus"
    aria-label="Decrease"
    onClick={() => removeOneMore1(detail?.id, detail?.price)}
  >
    −
  </button>
  <input
    type="number"
    className="input-box"
    defaultValue={1}
    min={1}
    max={10}
    value={quantity}
    onChange={(e) => setQuantity(e.target.value)} // Assuming you want to handle input change
  />
  <button
    className="plus"
    aria-label="Increase"
    onClick={() => addOneMMore1(detail?.id, detail?.price)}
  >
    +
  </button>
</div>

            <div className=' ADDCARD1  w-100'>

                <div className='btnwidth'><Button className='w-100 rounded-0 addc addc2' >Quick buy</Button></div>
                <div className='btnwidth '><Button className='w-100 rounded-0 addc' id="addbut" onClick={ ()=>addcards1(detail?.id,detail?.price,detail?.imag)}>Add Card</Button></div>
          </div>
                      </Col>
                    </Row>

             </Container> 
             {/* 2nd offcanvas */}
             <Offcanvas placement="end" scroll="true"  show={show} onHide={handleClose} {...props}>
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
            <button type="button" class="btn-close " aria-label="Close" onClick={()=>removeFromCart(data)}></button>
                <Col sm><Image src={data.img} className='picsmallcart' /></Col>
                <Col sm>
                <h4>{data.name}</h4>
               <p>Price: $<span id="productPrice">{data.price}</span></p>
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
                  <Button className='w-100 checkout' onClick={()=>Checkout(props.pp.id,props.pp.price)}>Check Out</Button>
                </div>
                <div className='mt-3 '>
                  <Button className='w-100 viewcart'>View Cart</Button>
                </div>
        </Offcanvas.Body>
      </Offcanvas>
      <br />
      <h1>Product Recommonded</h1>
      <Container fluid>

      <Row>

      {mask2.map((data)=>{
            return (<>
            

              <Col md={3} className='mt-4 proimg'>
      {/* {props.p} */}
      <Card  > 
      <Image src={data.imag} className='po' />
      <div className='addcard w-100'>
                <div className='d-flex ADDCARD w-100'>

                <div className='w-100 '><Button className='w-100 rounded-0 addc addc2'>Quick buy</Button></div>
                <div className='w-100 '><Button className='w-100 rounded-0 addc'  >Add Card</Button></div>
          </div>

        </div>
      <div className='p-4 crdpadding'>

        <Link to={data.slug} className='product-link'><div className= {data.nameclassName}>
        {data.name}
        </div></Link>
        <div className={data.nameclassprice}>
        ${data.price}
        {/* <p>{props.imag}</p> */}

        </div>
        <div><FaStar className='rating'/><FaStar className='rating' /><FaStar className='rating'/><FaStar className='rating'/><FaStarHalfAlt className='rating'/> 1 review</div>

      </div>
      </Card>
      </Col>
                      </>)
                    })}
      </Row>
      </Container>

             </>)
             }
    </div>
  )
}

export default Oxygenpum 