import React from 'react'
import Button1 from '../component/Button1'
import { Container, Form } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import logoo from '../images/logors.png'
import '../css/style3.css'
import { useNavigate } from 'react-router-dom';
function Contactus(p) {

  const navigate = useNavigate();

  const navbar = [{
    name:"Home",
    link:"/home",
    className:"nav-link"
  },
  {
    name:"Categories",
    link:"/category",
    className:"nav-link header-fon-size ho"
  },
  {
    name:"Courses",
    link:"/course",
    className:"nav-link header-fon-size ho"
  },
  {
    name:"Privacy & Policy",
    link:"/p&p",
    className:"nav-link header-fon-size ho"
  },
  ,
  {
    name:"About Us",
    link:"/about-us",
    className:"nav-link mapcol header-fon-size ho"
  },
  {
    name:"Contact Us",
    link:"/contact-us",
    className:"nav-link header-fon-size ho"
  }]
  
  const submitForm = (e) => {
    e.preventDefault(); 
    const formData = new FormData(e.target);
    const data = {
    password: formData.get('password'),
    email: formData.get('email'),
  };
   if(data.email === "zafar@gmail.com" && data.password === "123456"){
    alert("Login successful");
    navigate('/signup')
   }else{
    alert("Your email or pasword is incorrect")
    navigate('/login')
   }
  }

  return (
    <div><h1>Contactus</h1>
    <header className='d-flex sm-d-block justify-content-around mt-5 bg-info p-3'>   
    {
      navbar.map((data)=> <Button1 p={data}/>)
    }
    </header>
    <section className='mt-5'>
      <Container>
        <Row>
        <Col sm={8}>
          <Row>
            <Col sm><div class="card" >
                    <div class="card-body">
                      <h4 class="card-title">John Doe</h4>
                      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                      <a href="#" class="btn btn-primary">See Profile</a>
                    </div>
                  </div>
             </Col>
            <Col sm>
            <div class="card" >
                    <div class="card-body">
                      <h4 class="card-title">John Doe</h4>
                      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                      <a href="#" class="btn btn-primary">See Profile</a>
                    </div>
                  </div>
            </Col>
            <Col sm>
            <div class="card" >
                    <div class="card-body">
                      <h4 class="card-title">John Doe</h4>
                      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                      <a href="#" class="btn btn-primary">See Profile</a>
                    </div>
                  </div>
            </Col>

          </Row>
        </Col>
        <Col sm={4}><img src={logoo}></img></Col>
        </Row>

        <Row>
          <Col lg="6" >
            <Form onSubmit={submitForm} className='mx-auto border p-3'>
              <Form.Label>
                Email
              </Form.Label>
              <Form.Control name="email" type='email'/>
              <Form.Label>
                Pasword
              </Form.Label>
              <Form.Control name="password" type='password' className='mb-2'/>
              <Form.Control variant="success" className='bg-primary' type='submit'/>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
    
    </div>
  )
}

export default Contactus