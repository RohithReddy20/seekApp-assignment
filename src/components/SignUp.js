import React from "react";

import { signInWithGoogle } from '../service/firebase';
import '../App.css';
import "./SignUp.css";
function SignUp() {

  return (
    <div className="signupContainer">
      <div className = "signup">
        <div className="image-container">
          <figure>
            <img src="./bg2.png" alt="bg"/>
          </figure>
        </div>
        <div className="form-container">
          <h2>Welcome to SeekApp</h2>
          <p>Please login to Continue</p>
          <div className="button-container">
            <button className="button-signup" onClick={signInWithGoogle}>SIGN IN</button>
            <button className="button-signin" onClick={signInWithGoogle}>SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default SignUp;
