import { useState } from "react";
import Header from "./Header";

const Login = ()=>{

    const [isSignInform, setIsSignInform] = useState(true);

    const toggleSignInform = ()=>{
        setIsSignInform(!isSignInform);
    };

    return (
        <div>
            <Header/>
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg" alt="BackgroundImg" />
            </div>
            <form className=" w-3/12 absolute p-12 bg-black mt-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded">

            <h1 className="font-bold text-3xl py-4">{isSignInform ? "Sign In" : "Sign Up"}</h1>

            {!isSignInform &&
                <input type="text" 
                placeholder="Full Name " 
                className="p-3 my-4 w-full bg-gray-700"/>}


                <input type="text" placeholder="Email Adress " className="p-3 my-4 w-full bg-gray-700"/>

              

                <input type="password" placeholder="Password" className="p-3 my-4 w-full bg-gray-700"/>


                <button className="p-3 my-6 w-full bg-red-700 rounded-lg">{isSignInform ? "Sign In" : "Sign Up"}</button>

                <p className="py-4 cursor-pointer" onClick={toggleSignInform}>{isSignInform? "New to netflix? Sign Up Now" : "Already resigistered ? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login;