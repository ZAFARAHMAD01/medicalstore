// import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import '../src/css/style3.css'
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Contactus from './Pages/Contactus';
import Mainsection from './component/Mainsection';
import Button1 from './component/Button1';
import User from './Pages/User';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { Container, Row } from 'react-bootstrap'
import Multipage from './Pages/Multipage';
import Formgetdata from './Pages/Formgetdata';
import { useState } from 'react';
import Card1 from './component/Card1';
import Checkout from './component/Checkout';
import Oxygenpum from './Pages/Product/Oxygenpum';
import Discount from './component/Discount';
import { useSelector } from 'react-redux';
import Login1 from './Pages/Login1';
import Signup1 from './Pages/Signup1';



function App(props) {
  console.log(props.dd,'dd');

  
  
  const [email1,setEmail]=useState('');
  const [name1,setName]=useState('');
  const [password1,setPassword]=useState('');
  const [conpassword,setConfirmpassword]=useState('');
  console.log(email1);
  const handle=(e)=>{
    e.preventDefault(); 

    alert('kjguiu');
  }
  const data = 'Zafar';
  const data1= 'Zafaransari';
  const student = {
    name:'Zafar',
    class:'Btech',
    roll_no:21
  }
  
  console.log(props.data10);
  console.log(props.submit);
  // const curURL=window.location.href="http://localhost:3000/checkout";
  console.log(window.location.pathname); //yields: "/js" (where snippets run)
console.log(window.location.href)
const [hidee, setShowee] = useState(false);

const us = useSelector((state) => state.auth.user);
var us1 = useSelector((state) => state.auth.path);
console.log(us1,'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm');

// var xx='checkout'


  return (
    <div className="App">    


    <BrowserRouter>
    {/* <Header/> */}
     { us1===false?<Header/>:''} 
      <Routes>
        <Route path='/Home' element={<Header/>}/>
        <Route path='/' element={<Mainsection s='zafar'/>}/>
        <Route path='/contactus' element={<Contactus datas={data}/>}/>
        <Route path='/user' element={<User />} />
        <Route path='/login' element={<Login />} />
        <Route path='/ss' element={<Signup />} />
        <Route path='/multipage' element={<Multipage/>} />
        <Route path='/formgett' element={<Formgetdata/>} />
        <Route path='/formget' element={<Formgetdata />}/>
        <Route path='/addcard' element={<Card1 z1={hidee} />}/>
        <Route path='/checkout' element={ <Checkout che={hidee}/>}/> 
        <Route path='/:slug' element={ <Oxygenpum  />}/> 
        <Route path='/Discount' element={ <Discount  />}/> 
        <Route path='/Login1' element={ <Login1  />}/> 
        <Route path='/signupp' element={ <Signup1  />}/> 
        
      </Routes>
    </BrowserRouter>
    
  
    </div>
  );
}

export default App;
