import React from 'react'
import {useHistory} from 'react-router-dom'

const RegisterPage = () => {
  let history = useHistory()
  return (
    <>
      <div className="Register-cont">
        <div className="Main-page-title">
          Sign up for an account
        </div>
        <div>
          Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.
        </div>
        <br></br>
        <div>
          Username
        </div>
        <input className="Input"/>
        <div>
          Password
        </div>
        <input className="Input"/>
        <div>
          Password Confirm
        </div>
        <input className="Input"/>
        <div>
          Email
        </div>
        <input className="Input"/>
         <div>
          By clicking the "Sign up" button below, I certify that I have read and agree to the TMDb terms of use and privacy policy.
        </div>
        <br></br>
        <div>
          <button className="Button">Sign Up</button>
          <span className="Link" onClick={()=>history.push('/')}>Cancel</span>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
