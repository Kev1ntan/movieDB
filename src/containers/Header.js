import React from 'react'
import {useDispatch, useSelector} from'react-redux'
import {useHistory} from 'react-router-dom'

const Header = () => {
  let dispatch = useDispatch()
  let history = useHistory()
  let lang = useSelector(state=>state.language)
  return (
    <div className="App-header">
      <div>
        <span style={{cursor: "pointer"}} onClick={()=>history.push('/')}>TMDB</span>
        <div className="dropdown">
          <button className="dropbtn">{lang.movies}</button>
          <div className="dropdown-content">
            <a href="#">{lang.popular}</a>
            <a href="#">{lang.nowPlaying}</a>
            <a href="#">{lang.upComing}</a>
            <a href="#">{lang.topRated}</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">{lang.TV}</button>
          <div className="dropdown-content">
            <a href="#">{lang.popular}</a>
            <a href="#">{lang.airingToday}</a>
            <a href="#">{lang.onTV}</a>
            <a href="#">{lang.topRated}</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">{lang.people}</button>
          <div className="dropdown-content">
            <a href="#">{lang.popularPeople}</a>
          </div>
        </div> 
        <div className="dropdown">
          <button className="dropbtn">{lang.more}</button>
          <div className="dropdown-content">
            <a href="#">{lang.discussions}</a>
            <a href="#">{lang.leaderboard}</a>
            <a href="#">{lang.support}</a>
            <a href="#">API</a>
          </div>
        </div>
      </div>
      <div className="Header-menu-right">
        <div className="dropdown">
          <button className="dropbtn">lg</button>
          <div className="dropdown-content">
            <a onClick={()=>dispatch({type:"changeLg",lg:"english"})} >English</a>
            <a onClick={()=>dispatch({type:"changeLg",lg:"indonesia"})} >Indonesia</a>
          </div>
        </div>
        <div className="Header-mr-item">
          {lang.login}
        </div>
        <div className="Header-mr-item">
          Join TMDB
        </div>
        <div className="Header-mr-item">
          search
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)
