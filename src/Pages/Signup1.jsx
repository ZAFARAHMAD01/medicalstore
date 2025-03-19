import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '..//css//style4.css'
import Footer from '../component/Footer'
import { adddatasignup } from '../Redux/Auth';
function Signup1() {
    const dispatch=useDispatch();
    
    const FirstName = useRef();
    const LastName = useRef();
    const Emailid = useRef();
    const PassWord = useRef();
     const us2= useSelector((state) => state.auth.user);
     
     
     // console.log(inputRef);
     const handleSubmit1 = (event) => {
         // alert('A name was submitted: ' + inputRef.current.value);
         event.preventDefault();
         const sigup={
             FName:FirstName.current.value,
             LName:LastName.current.value,
             Eid:Emailid.current.value,
             PW:PassWord.current.value
            }
            console.log(sigup);
            dispatch(adddatasignup(sigup))
            console.log(us2);
        
        console.log(LastName.current.value);
        console.log(Emailid.current.value);
        console.log(PassWord.current.value);
        
      };
  
  return (
    <div>
        <div className='formsigin1 mt-5' >
                    <br />
                    <br />
                    <h1>Sign Up</h1>
                 
                    <form className='p-5' autocomplete="off" onSubmit={handleSubmit1}>
                        <input
                            type="text"
                            placeholder="First Name"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            className='w-100'
                            ref={FirstName}
                            required
                        />
                        <br />
                        <br />
                        <input
                            type="text"
                            placeholder="Last Name"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            className='w-100'
                            ref={LastName}
                            
                            required
                        />
                        <br />
                        <br />
                        <input
                            type="email"
                            placeholder="Email"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            className='w-100'
                            ref={Emailid}

                            required
                        />
                        <br />
                        <br />
                        <input
                            type="password"
                            placeholder="Password"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)
                            required
                            className='w-100'
                            ref={PassWord}
                        />
                        <br />
                        <br />
                        <button type="submit" className='sigupbtn'>Sign up</button>
                        

                        
                    </form>

                    
            </div>
            <br />
            <br />

            <Footer/>
    </div>
  )
}

export default Signup1