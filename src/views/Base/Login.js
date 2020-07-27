import React from 'react'
import {useHistory} from 'react-router-dom'

const LoginPage = () => {
  let history = useHistory()

  return (
    <>
      <div className="Login-cont">
        <div className="Main-page-title">
          Login to your account
        </div>
        <div>
          In order to use the editing and rating capabilities of TMDb, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple.
           <span className="Link" onClick={()=>history.push('/register')}>Click here</span> to get started.
        </div>
        <br></br>
        <div>
          If you signed up but didn't get your verification email, <span className="Link" onClick={()=>history.push('/resendemail')}>click here</span> to have it resent.
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
          <button className="Button">Login</button>
          <span onClick={()=>history.push('/resetpass')} className="Link">Reset password</span>
        </div>
      </div>
    </>
  )
}

export default LoginPage
