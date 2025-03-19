import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '..//css//style4.css'
import Footer from '../component/Footer';
function Login1() {
    
    return (
        <div >
            <div className='formsigin1 mt-5 p-2'>
                    <br />
                    <br />
                    <h1>Sign in</h1>
                 
                    <form className='p-5'>
                        <input
                            type="email"
                            placeholder="Email"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            className='w-100'

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
                        />
                        <br />
                        <br />
                        <button type="submit" className='sigupbtn'>signin</button>
                        <div className="forgetbutn">
                            <div className="forgetbutton"><p>Forget Password</p></div>
                            <div className="forgetbutton">
                            </div>
                        </div>

                        
                    </form>

                    
            </div>
            <br />
            <br />
            <Footer/>
        </div>

  )
}

export default Login1