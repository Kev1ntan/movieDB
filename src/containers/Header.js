import React from 'react'
import {useDispatch, useSelector} from'react-redux'
import {useHistory} from 'react-router-dom'
import {getSearchFilm} from '../actions/TMDBapi'


const Header = () => {
  let dispatch = useDispatch()
  let history = useHistory()
  let lang = useSelector(state=>state.language)
  const [search,setSearch] = React.useState("")
  function submitForm(e){
    e.preventDefault()
    history.push(`/search/${search}`)
    dispatch(getSearchFilm(search))
  }
  return (
    <div className="App-header">
      <div>
        <span style={{cursor: "pointer"}} onClick={()=>history.push('/')}>TMDB</span>
        <div className="dropdown">
          <button className="dropbtn">{lang.movies}</button>
          <div className="dropdown-content">
            <div onClick={()=>history.push('/movie')}>{lang.popular}</div>
            <div onClick={()=>history.push('/movie/now-playing')}>{lang.nowPlaying}</div>
            <div onClick={()=>history.push('/movie/upcoming')}>{lang.upComing}</div>
            <div onClick={()=>history.push('/movie/toprated')}>{lang.topRated}</div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">{lang.TV}</button>
          <div className="dropdown-content">
            <div onClick={()=>history.push('/tv')}>{lang.popular}</div>
            <div onClick={()=>history.push('/tv/airingtoday')}>{lang.airingToday}</div>
            <div onClick={()=>history.push('/tv/ontv')}>{lang.onTV}</div>
            <div onClick={()=>history.push('/tv/toprated')}>{lang.topRated}</div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">{lang.people}</button>
          <div className="dropdown-content">
            <div onClick={()=>history.push('/person')}>{lang.popularPeople}</div>
          </div>
        </div> 
        <div className="dropdown">
          <button className="dropbtn">{lang.more}</button>
          <div className="dropdown-content">
            <div>{lang.discussions}</div>
            <div>{lang.leaderboard}</div>
            <div>{lang.support}</div>
            <div>API</div>
          </div>
        </div>
      </div>
      <div className="Header-menu-right">
        <div className="dropdown">
          <button className="dropbtn">lg</button>
          <div className="dropdown-content">
            <div onClick={()=>dispatch({type:"changeLg",lg:"english"})} >English</div>
            <div onClick={()=>dispatch({type:"changeLg",lg:"indonesia"})} >Indonesia</div>
          </div>
        </div>
        <div onClick={()=>history.push('/login')} className="Header-mr-item">
          {lang.login}
        </div>
        <div onClick={()=>history.push('/register')} className="Header-mr-item">
          Join TMDB
        </div>
        <div className="dropdown">
          <button className="dropbtn">{lang.search}</button>
          <div className="dropdown-search">
            <form onSubmit={(e)=>submitForm(e)}>
              <input onChange={(e)=>setSearch(e.target.value)} placeholder="Search..."/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)
