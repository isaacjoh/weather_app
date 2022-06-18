import React from 'react'
import "./index.css"
import { useEffect } from 'react';
import { UserAuth } from './context/AuthContext'

import { useNavigate } from 'react-router-dom'
function Login() {
  const {googleSignIn, user} = UserAuth();
  const navigate = useNavigate();
  
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error){
 console.log(error)
    }
  };

  useEffect(() => {
    if (user ) {
      navigate('../home');
    }
  
   
  }, [user, navigate])
 


console.log(user, "this is login")
  return (
    <div>
        <div 
        className="random-img flex flex-col items-center justify-center mb-10"
        ><h1 className='mb-10 text-4xl'>Whats the Weather like?</h1> <button 
        onClick={handleGoogleSignIn}
        className='bg-slate-200 w-40 h-10 rounded-md'>Sign in with Google</button></div>
    </div>
  )
}

export default Login