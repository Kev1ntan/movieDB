import React from 'react'

const Footer = () => {
  return (
    <div className="App-footer">
      <div className="Footer-logo">
        TMDB
      </div>
      <div className="Footer-item">
        <ul>
          <li className="Footer-item-title">THE BASICS</li>
          <li>About TMDB</li>
          <li>Contact Us</li>
          <li>Support Forums</li>
          <li>API</li>
          <li>System Status</li>
        </ul>
      </div>
      <div className="Footer-item">
        <ul>
          <li className="Footer-item-title">GET INVOLVED</li>
          <li>Contribution Bible</li>
          <li>3rd Party Applications</li>
          <li>Add New Movie</li>
          <li>Add New TV Show</li>
        </ul>
      </div>
      <div className="Footer-item">
        <ul>
          <li className="Footer-item-title">COMMUNITY</li>
          <li>Guidelines</li>
          <li>Discussions</li>
          <li>Leaderboard</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="Footer-item">
        <ul>
          <li className="Footer-item-title">LEGAL</li>
          <li>Terms of Use</li>
          <li>API Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  )
}

export default React.memo(Footer)
