// import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import '../src/css/style3.css'
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Checkout from '../../src/component/Checkout';



function App(props) {
  const [bestseller,setbestseller]=useState({
    id:"1",
    name:"Oxegen Pump",
    nameclassName:"nam",
    price:"$216",
    nameclassprice:"pric",
    link:"/home",
    imag:'https://medik-demo.myshopify.com/cdn/shop/products/pdt20.jpg?v=1542879339&width=533'
  }
  )
  
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
  
  return (
    <div className="App">    

    <BrowserRouter>
     <Header/>
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
        <Route path='/addcard' element={<Card1 pp={bestseller} />}/>
        
      </Routes>
    </BrowserRouter>
    
  
    </div>
  );
}

export default App;
