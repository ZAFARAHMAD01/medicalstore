import React from 'react'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Signup() {
    const navigate = useNavigate();
    const subform = (e) => {
        e.preventDefault(); 
        const formData = new FormData(e.target);
        const data = {
        password: formData.get('password'),
        email: formData.get('email'),
        name: formData.get('name'),
        conpass: formData.get('con-password'),
    };
    if(data.conpass ===data.password){
        alert("Login successful");
        navigate('/contactus');
    }
    console.log(data.password);
    }
   
  return (
    <div>
<div className='w-50 mx-auto'>
<Row>
    <Col lg="6" >
      <Form onSubmit={subform} className='mx-auto border p-3'>
        <Form.Label>
          Name
        </Form.Label>
        <Form.Control name="name" type='text'/>
        <Form.Label>
          Username
        </Form.Label>
        <Form.Control name="Username" type='text'/>
        <Form.Label>
          Email
        </Form.Label>
        <Form.Control name="email" type='email'/>
        <Form.Label>
          Pasword
        </Form.Label>
        <Form.Control name="password" type='password' className='mb-2'/>
        <Form.Label>
          Confirm Pasword
        </Form.Label>
        <Form.Control name="con-password" type='password' className='mb-2'/>
        <Form.Control variant="success" className='bg-primary' type='submit'/>
      </Form>
    </Col>
  </Row>
</div>
</div>
  )
}

export default Signup