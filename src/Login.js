import React from 'react'
import "./index.css"
import {signInWithGoogle} from "./Firebase"
function Login() {




  return (
    <div>
        <div 
        className="random-img flex flex-col items-center justify-center mb-10"
        ><h1 className='mb-10 text-4xl'>Whats the Weather like?</h1> <button 
        onClick={signInWithGoogle}
        className='bg-slate-200 w-40 h-10 rounded-md'>Sign in with Google</button></div>
    </div>
  )
}

export default Login