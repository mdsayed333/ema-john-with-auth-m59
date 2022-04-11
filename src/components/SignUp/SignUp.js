import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [stateError, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [createUserWithEmailAndPassword, user, error] = useCreateUserWithEmailAndPassword(auth);

    if(user){
        navigate(from, {replace: true});
    }

    const handleEmailBlur = (event) =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) =>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = (event) =>{
        setConfirmPassword(event.target.value);
    }
    
    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Your two Password did not match.");
            return;
        }
        if(password.length < 6){
            setError("Password must be 6 characters or longer");
            return;
        }
        createUserWithEmailAndPassword(email, password)
        // .then(result =>{
        //     console.log('user created...');
        //     // const user = result.user;
        //     // console.log(user);
        // })
        // .catch(error =>{
        //    setError(error);
        // });
    }


  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" required/>
          </div>

          <p style={{color: "orange"}}>{stateError} </p>
          <p style={{color: "orange"}}>{error} </p>

          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" required/>
          </div>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account?
          <Link className="form-link" to="/login">
           Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
