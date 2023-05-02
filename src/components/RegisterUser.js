import React, { useEffect, useState } from 'react'
import '../css/RegisterUser.css'

const RegisterUser = () => {
  const [userData, setUserData] = useState({name:'', email:'', password:'', dob:'', gender:'', mobile:''});
  function handleDataChange(e){
    console.log('change :: ',e.target.id);
    const targetField = e.target.id;
    const value = e.target.value;

    switch(targetField){
        case 'name': {
            setUserData({...userData, name:value});
            break;
        }
        case 'email': {
            setUserData({...userData, email:value});
            break;
        }
        case 'password': {
            setUserData({...userData, password:value});
            break;
        }
        case 'dob': {
            setUserData({...userData, dob:value});
            break;
        } 
        case 'male'  : {
            setUserData({...userData, gender:value});
            break;
        }
        case 'female'  : {
            setUserData({...userData, gender:value});
            break;
        }
        case 'other'  : {
            setUserData({...userData, gender:value});
            break;
        }
        case 'mobile': {
            setUserData({...userData, mobile:value});
            break;
        }
    }
    
  }
  
  useEffect(()=>{
    console.log('user data :: ', userData);
  },[userData]);

  function handleSubmitClick(e){
    e.preventDefault();
    console.log('Hello :: ', userData.name);
  }
  return (
    <div className='register-maincontainer'>
        <div className='register-container'>
            <h2 className='register-title'>Registration Form</h2>
            <form className='register-form'>
                <div className='register-input-label'>
                <label htmlFor='name'>Name* </label>
                </div>
                <div className='register-input'>
                <input id='name' type='text' placeholder='Name...' value={userData.name || ''} onChange={(e)=>handleDataChange(e)}/>
                </div>
                <div className='register-input-label'>
                <label htmlFor='email' >Email* </label>
                </div>
                <div className='register-input'>
                <input id='email' type='email' placeholder='Email...' value={userData.email || ''} onChange={(e)=>handleDataChange(e)}/>
                </div>
                <div className='register-input-label'>
                <label htmlFor='password' >Password* </label>
                </div>
                <div className='register-input'>
                <input id='password' type='password' placeholder='Password...' value={userData.password || ''} onChange={(e)=>handleDataChange(e)}/>
                </div>
                <div className='register-input-label'>
                <label htmlFor='dob' >Date of birth* </label>
                </div>
                <div className='register-input'>
                <input id='dob' type='date' value={userData.dob || ''} onChange={(e)=>handleDataChange(e)}/>
                </div>
                <div className='register-input-label'>
                <label htmlFor='gender' >Gender* </label>
                </div>
                <div className='register-input'>
                <div style={{display:'inline-block', padding:'5px 15px'}}>
                    <input id='male' name='gender' type='radio'style={{width:'15px', marginRight:'15px'}} value={'male'} checked={userData.gender === 'male'} onChange={(e)=>handleDataChange(e)}/>
                    <label htmlFor='male'>Male</label>
                </div> 
                <div style={{display:'inline-block', padding:'5px 15px'}}>
                    <input id='female' name='gender' type='radio'style={{width:'15px', marginRight:'15px'}} value={'female'} checked={userData.gender === 'female'} onChange={(e)=>handleDataChange(e)}/>
                    <label htmlFor='female'>Female</label>
                </div> 
                <div style={{display:'inline-block', padding:'5px 15px'}}>
                    <input id='other' name='gender' type='radio'style={{width:'15px', marginRight:'15px'}} value={'other'} checked={userData.gender === 'other'} onChange={(e)=>handleDataChange(e)}/>
                    <label htmlFor='other'>Other</label>
                </div> 
                </div>
                <div className='register-input-label'>
                <label htmlFor='mobile' >Mobile* </label>
                </div>
                <div className='register-input'>
                <input id='mobile' type='tel' placeholder='Mobile...' onChange={(e)=>handleDataChange(e)}/>
                </div>
                <input type='submit' value='Submit' className='register-submit-button' disabled={(userData.name==='' || userData.email==='' || userData.password==='' || userData.gender==='' || userData.dob==='' || userData.mobile==='')? true: false } onClick={(e)=>handleSubmitClick(e)}/>
            </form>
        </div>
    </div>
  )
}

export default RegisterUser