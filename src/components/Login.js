import React, { useState } from 'react'
import '../css/LoginUser.css'

const Login = () => {
  const [userData, setUserData] = useState({ email:'', password:''});
  const [rememberMe, setRememberMe] = useState(false);
  function handleDataChange(e){
    const targetField = e.target.id;
    const value = e.target.value;

    switch(targetField){
        case 'email': {
            setUserData({...userData, email:value});
            break;
        }
        case 'password': {
            setUserData({...userData, password:value});
            break;
        }
        case 'rememberme': {
            setRememberMe(!rememberMe);
            break;
        }
    }
  }
  function handleSubmitClick(e){
    e.preventDefault();
    console.log('Hello :: ', userData.email);
  }
  return (
    <div className='login-maincontainer'>
        <div className='login-container'>
            <h2 className='login-title'>Login Form</h2>
            <form className='login-form'>
                <div className='login-input-label'>
                <label htmlFor='email' >Email* </label>
                </div>
                <div className='login-input'>
                <input id='email' type='email' placeholder='Email...' value={userData.email || ''} onChange={(e)=>handleDataChange(e)}/>
                </div>
                <div className='login-input-label'>
                <label htmlFor='password' >Password* </label>
                </div>
                <div className='login-input'>
                <input id='password' type='password' placeholder='Password...' value={userData.password || ''} onChange={(e)=>handleDataChange(e)}/>
                </div>
                <div className='login-input'>
                <div style={{display:'inline-block', padding:'5px 15px'}}>
                    <input id='rememberme' name='rememberme' type='checkbox'style={{width:'15px', marginRight:'15px'}} value={'male'} checked={rememberMe} onChange={(e)=>handleDataChange(e)}/>
                    <label htmlFor='rememberme'>Remember me</label>
                </div>
                </div>
                <input type='submit' value='Login' className='login-submit-button' onClick={(e)=>handleSubmitClick(e)}/>
            </form>
        </div>
    </div>
  )
}

export default Login