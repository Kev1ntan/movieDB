import React from 'react'
import {useHistory} from 'react-router-dom'

const ResetPassPage = () => {
  let history = useHistory()
  return (
    <>
      <div className="Register-cont">
        <div className="Main-page-title">
          Reset Password
        </div>
        <div>
          Enter the email you used to sign up for a TMDb account and we'll send you the steps required to reset your password.
        </div>
        <br></br>
        <div>
          Email
        </div>
        <input className="Input" placeholder="What's your email?"/>
        <div>
          <button className="Button">Continue</button>
          <span className="Link" onClick={()=>history.push('/login')}>Cancel</span>
        </div>
      </div>
    </>
  )
}

export default ResetPassPage
