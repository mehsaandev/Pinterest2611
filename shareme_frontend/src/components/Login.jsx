import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "../firebase/firebase";

import shareVideo from "../assets/share.mp4";
import backgroud from "../assets/loginBackground.jpg";
import logo from "../assets/logo.png";
function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  };

 


  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="realtive w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 left-0 bottom-0 right-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="250px" alt="logo" />
          </div>
          <div className="shadow=2x1">
            <button
              type="button"
              className="bg-mainColor flex justify-center p-3 rounded-lg cursor-pointer outline-none "
              onClick={signInWithGoogle}
            >
              <FcGoogle className="mr-4" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
