import React from 'react'
import { useDispatch } from 'react-redux'
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import  { useEffect, useState } from 'react'
import { loginAction } from '../../Redux/Actions/UserActions';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useForm } from 'react-hook-form';

import { Avatar, Typography } from '@mui/material';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();
    const navi=useNavigate();
    const {userInfo}=useSelector(st=>st.userLogin);
    const submitForm=(e)=>{
        e.preventDefault();
        dispatch(loginAction(email,password))
    }

    useEffect(()=>{
      if(userInfo && userInfo.token){
        navi("/")
      }
    },[navi,userInfo])
  return (
    <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-lg-3  user-background for-login p-3">
        <div className="logo text-center d-flex justify-content-center">
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}} className='text-center'>
            <VpnKeyOutlinedIcon sx={{color:"blue"}}/>
          </Avatar>
        </div>
          <Typography component="h2" variant="h5" color={`black`} style={{fontFamily:"serif"}} className="mb-4">
            L o g i n
          </Typography>


        <form method="post" onSubmit={submitForm}>
          <div className="form-outline mb-4">
          <label className="form-label" for="form2Example1" style={{fontStyle:"oblique"}}>
            Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="form2Example1"
              className="form-control"
              autoComplete="email"
              autoFocus
            />
  
          </div>

          <div className="form-outline mb-4">
          <label className="form-label" for="form2Example2" >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="form2Example2"
              className="form-control"
            />
       
          </div>
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  name="remeberme"
                />
                <label className="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4 px-4" style={{fontFamily:"cursive"}}>
            Sign Up
          </button>

          <div className="text-center">
            <p>
              Not a member? <Link to="/register">Register</Link>
            </p>
            <p>Or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <FacebookIcon/>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <InstagramIcon/>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <TwitterIcon/>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <GitHubIcon/>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login
