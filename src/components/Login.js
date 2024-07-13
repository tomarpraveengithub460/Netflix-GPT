import Header from "./Header"
import { useState, useRef } from "react";
import { BG_URL } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate=useNavigate();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;

        if(!isSignInForm){
            //Sign Up Logic
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredentials)=>{
                const user=userCredentials.user;
                console.log(user);
                navigate('/browse');
            })
            .catch((error)=>{
                const errorCode=error.code;
                const errorMessage=error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
                // naviagate('/')
            })
        }else{
            //Sign In Logic
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredentials)=>{
                const user=userCredentials.user;
                console.log("Signed In successfully");
                console.log(user);
                navigate('/browse');
            })
            .catch((error)=>{
                const errorCode=error.code;
                const errorMessage=error.message;
                setErrorMessage("User not found");
                // navigate('');
            })
        }
    }
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="h-screen object-cover" src={BG_URL} alt="logo" />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
            >
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="p-4 my-4 w-full bg-gray-700"
                    />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <p className="text-red-500">{errorMessage}</p>
                <button onClick={handleButtonClick}
                    className="p-4 my-6 bg-red-700 w-full rounded-lg"
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 cursor-pointer font-bold" onClick={toggleSignInForm}>
                    {isSignInForm
                        ? "New to Netflix? Sign Up Now"
                        : "Already registered? Sign In Now."}
                </p>
            </form>
        </div>
    );
}
export default Login