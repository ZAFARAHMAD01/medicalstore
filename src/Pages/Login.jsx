import React from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
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
  )
}

export default Login