import React from 'react'
import '../../assets/css/style.css'
import '../../assets/css/responsive.css'
import googleicon from '../../assets/images/google-icon 1.png'
import appleicon from '../../assets/images/apple 1.png'
import logo from '../../assets/images/Group 8003.png'
import git from '../../assets/images/github.png'
import twitter from '../../assets/images/twitter.png'
import linkedin from '../../assets/images/carbon_logo-linkedin.png'
import discord from '../../assets/images/carbon_logo-discord.png'
import { Link, useNavigate } from 'react-router-dom'
import AppleSignin from 'react-apple-signin-auth';
import { useGoogleLogin } from '@react-oauth/google';
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });
  const navigate = useNavigate()
  const emailregex = `[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}`

  const schema = yup.object().shape({

    email: yup.string().required("Email is required").matches(emailregex,"Email is Invalid"),
    password: yup.string().required("Password is required"),


  })
  const { register, handleSubmit, getValues, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
   
      email: "",
      password: "",
   
    },
  })
  const HandleLogin=()=>{
    navigate('/uploads')
  }
  return (  
    <div className='row col-12 d-flex login-full'>
      <div className="col-6 login-left">
        <div className="row"><img src={logo} alt="" className='logo'/></div>
        <div className="row">
          <h1>BASE</h1>
        </div>
        <div className="row col-5 social">
          <div className="col-3"><img src={git} alt="" /></div>
          <div className="col-3"><img src={twitter} alt="" /></div>
          <div className="col-3"><img src={linkedin} alt="" /></div>
          <div className="col-3"><img src={discord} alt="" /></div>
        </div>
       
      </div> 
      <div className='col-12 login-top '>
<div className='d-flex'><img src={logo} alt="" className='logo'/>
        
          <h1>BASE</h1>
        </div>
      </div>
      <div className="col-lg-6 login-right container">
        <h2>Sign In</h2>
        <h3>Sign in to your account</h3>
        <div className="row col-lg-12">
       
          <button className='col-5 google' onClick={() => login()}><img src={googleicon} alt="" style={{margin:"0 15px 0 15px"}}/>sign in with Google</button>
          <AppleSignin
    /** Auth options passed to AppleID.auth.init() */
    authOptions={{
      /** Client ID - eg: 'com.example.com' */
      clientId: 'com.example.web',
      /** Requested scopes, seperated by spaces - eg: 'email name' */
      scope: 'email name',
      /** Apple's redirectURI - must be one of the URIs you added to the serviceID - the undocumented trick in apple docs is that you should call auth from a page that is listed as a redirectURI, localhost fails */
      redirectURI: 'https://example.com',
      /** State string that is returned with the apple response */
      state: 'state',
      /** Nonce */
      nonce: 'nonce',
      /** Uses popup auth instead of redirection */
      // usePopup: ${authOptions.usePopup},
    }} // REQUIRED
    /** General props */
    uiType="dark"
    /** className */
    className="apple-auth-btn"
    /** Removes default style tag */
    noDefaultStyle={false}
    /** Allows to change the button's children, eg: for changing the button text */
    buttonExtraChildren="Continue with Apple"
    /** Extra controlling props */
    /** Called upon signin success in case authOptions.usePopup = true -- which means auth is handled client side */
    onSuccess={(response) => console.log(response)} // default = undefined
    /** Called upon signin error */
    onError={(error) => console.error(error)} // default = undefined
    /** Skips loading the apple script if true */
    skipScript={false} // default = undefined
    /** Apple image props */
    iconProp={{ style: { marginTop: '10px' } }} // default = undefined
    /** render function - called with all props - can be used to fully customize the UI by rendering your own component  */
    render={(props) => <button {...props}className='col-5 google'><img src={appleicon} alt="" style={{margin:"0 15px 0 15px"}}/>sign in with Apple</button>}
  />
        </div>
        <form className='login-form' onSubmit={handleSubmit(HandleLogin)}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" {...register("email")}/>
            <span className="text-red-500 text-xs error">{errors.email?.message}</span>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="password" {...register("password")} />
            <span className="text-red-500 text-xs error">{errors.password?.message}</span>
          </div>
          <div class="mb-3">
            <Link>Forgot Password ?</Link></div>
          <button className='btn signin' type='submit'>Sign In</button>
          <div className='register-account'>Don't have an account? <Link>Register here</Link></div>
        </form>
      </div>
      {/* <div className="row col-12 social-res ">
          <div className="col-3"><img src={git} alt="" /></div>
          <div className="col-3"><img src={twitter} alt="" /></div>
          <div className="col-3"><img src={linkedin} alt="" /></div>
          <div className="col-3"><img src={discord} alt="" /></div>
        </div> */}
    </div>
  )
}

export default Login
