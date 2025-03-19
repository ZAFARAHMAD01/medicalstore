import React, { useEffect, useState } from 'react'
import { Button, Col, Container,Row,Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Pythoncontent from './Pythoncontent';
import Login from './Login';
import { FcPrevious } from 'react-icons/fc';
function Multipage(props) {  
  
  const [user,setUser]=useState({
    user : "login"
  }
  )
  const py = () =>{
    setUser(previousState =>{
      return {...previousState,user:"pythonpage"}

    })
  }
  const htm = () =>{
    setUser(previousState =>{
      return {...previousState,user:"htmlpage"}

    })
  }
  const log = () =>{
    setUser(previousState =>{
      return {...previousState,user:"loginpage"}

    })
  }
  console.log(user.user)
  return (
    <div>

        <Container fluid>
        <Row>
            <Col className='bg-primary'>
                <Button className='w-100' onClick={log}>Login</Button><br/>
                <Button className='w-100' onClick={py} name = {user.user} >Python</Button><br/>
                <Button className='w-100' onClick={htm}>HTML</Button><br/>
                <Button className='w-100'>HTML</Button><br/>
                <Button className='w-100'>HTML</Button><br/>
                <Button className='w-100'>HTML</Button><br/>
                <Button className='w-100'>HTML</Button><br/>
                <Button className='w-100'>HTML</Button><br/>
                <Button className='w-100'>HTML</Button><br/>
                <Button className='w-100'>HTML</Button><br/>
                <Button className='w-100'>HTML</Button><br/>
                <Button className='w-100'>HTML</Button><br/>
                <Button className='w-100'>HTML</Button><br/>
            </Col>
            <Col sm={9} >
            <div className='w-50 mx-auto'>
       {
        
       user.user==='pythonpage'?<Pythoncontent/>:user.user==='loginpage'?<Login/>:<></>
       }
{/* <Row>
    <Col lg="12" >
      <Form onSubmit={props.submit}  className='mx-auto border p-3'>
        <Form.Label>
          Name
        </Form.Label>
        <Form.Control name="name1" type='text' value={props.name1}/>
        <Form.Label>
          Username
        </Form.Label>
        <Form.Control name="Username1" type='text'/>
        <Form.Label>
          Email
        </Form.Label>
        <Form.Control name="email1" type='email'/>
        <Form.Label>
          Pasword
        </Form.Label>
        <Form.Control name="password1" type='password' className='mb-2'/>
        <Form.Label>
          Confirm Pasword
        </Form.Label>
        <Form.Control name="con-password1" type='password' className='mb-2'/>
        <Form.Control variant="success" className='bg-primary' type='submit'/>
      </Form>
    </Col>
  </Row> */}
</div>
            </Col>
        </Row>
            
        </Container>
        {/* python */}
    </div>
  )
}

export default Multipage