import { useState } from "react"
import Header from "./Header"


const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);


  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);

  
  }




  return (
    <div>

    <Header/>

    <div className="absolute" >
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='logo'/>
    </div>

    <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 text-white" >
    <h1 className="font-bold text-2xl">{isSignInForm? "Sign In" : "Sign Up"}</h1>
    {!isSignInForm && (
      <input type="text" placeholder="Full Name" className="p-2 my-4 w-full rounded-lg bg-gray-700"/>
    )}
      <input type="text" placeholder="Email Address" className="p-2 my-4 w-full rounded-lg bg-gray-700"/>
      <input type="text" placeholder="Password" className="p-2 my-4 w-full rounded-lg bg-gray-700"/>
      <button className="p-4 my-6  hover:bg-blue-700 bg-red-700 w-full rounded-lg ">{isSignInForm? "Sign In" : "Sign Up"}</button>
      <p className="py-2 cursor-pointer" onClick={toggleSignInForm} > {isSignInForm? "New To Netflix? sign Up Now" : "Alreday a Registered? Sign In Now"}</p>
    </form>
    
    </div>
    )
}

export default Login