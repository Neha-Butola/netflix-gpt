import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

 const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
        <Header/>
        <div className="flex items-center min-h-screen">
        <img className="absolute top-0 -z-10" src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/banner.jpg" alt=""/>

          <form className="bg-black m-auto p-12 w-3/12 text-white rounded-lg bg-opacity-70 ">
              <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
              {!isSignInForm && (<input type="text" id="name" placeholder='Full Name' className='p-2 my-2 w-full bg-gray-600'/>)}


              <input type="text" id="email" placeholder='Email Address' className='p-2 my-2 w-full bg-gray-600'/>
              <input type="password" id="password" placeholder='Password' className='p-2 my-2 w-full bg-gray-600'/>
            
              <button className="p-4 my-4 bg-red-700 w-full" type="submit"> Submit</button>
              {
                <p onClick={toggleSignInForm} className="cursor-pointer">{ isSignInForm ? "New to Netflix? Signup Now" : "Already a user? Sign In" }</p>

              }
             
          </form>
        </div>

    </div>
  )
}

export default Login