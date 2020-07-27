import React, { useEffect } from 'react'
import {useDispatch, useSelector} from'react-redux'
import {getSearchFilm} from '../../actions/TMDBapi'
import {useHistory, useParams} from 'react-router-dom'
import moment from 'moment'

const Search = () => {
  let dispatch = useDispatch()
  let history = useHistory()
  let {qry} = useParams()
  let films = useSelector(state=>state.searchFilm)
  useEffect(()=>{
    dispatch(getSearchFilm(qry))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  function shortOverview(str){
    if(str){
      if(str.length > 120){
        return str.substr(0,120) + "..."
      }else{
        return str
      }
    }
  }
  return (
    <>
      {
        films.length === 0 ? "loading..." :
      <div className="Page-cont">
        <div className="Page-body">
          <div className="Util-cont">
          </div>
          <div className="Util-cont2">
            {
              films.map(film=>{
                return(
                  <div key={film.id} className="Search-list">
                    <div  onClick={()=>history.push(`/${film.media_type}/details/${film.id}`)} className="Search-poster" style={{backgroundImage: film.poster_path ? `url(https://image.tmdb.org/t/p/original${film.poster_path})` : `url(https://www.pn-denpasar.go.id/assets/CKImages/images/aa.jpg)`}} />
                    <div className="Search-title-cont">
                      <div className="Search-title">{film.name ? film.name : film.title}</div>
                      <div className="Search-title2">{moment(film.release_date ? film.release_date : film.first_air_date).format("MMM Do, YYYY")}</div>
                      <div>{shortOverview(film.overview)}</div>
                    </div>

                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default Search
