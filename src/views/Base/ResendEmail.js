import React from 'react'
import {useHistory} from 'react-router-dom'

const ResendEmailPage = () => {
  let history = useHistory()
  return (
    <>
      <div className="Register-cont">
        <div className="Main-page-title">
          Resend activation email
        </div>
        <div>
          Missing your account verification email? Enter your email below to have it resent.
        </div>
        <br></br>
        <div>
          Email
        </div>
        <input placeholder="What's your email?" className="Input"/>
        <div>
          <button className="Button">Send</button>
          <span className="Link" onClick={()=>history.push('/login')}>Cancel</span>
        </div>
      </div>
    </>
  )
}

export default ResendEmailPage
