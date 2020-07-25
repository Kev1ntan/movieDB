import React, { lazy, useEffect } from 'react'
import {useDispatch, useSelector} from'react-redux'
import {useHistory} from 'react-router-dom'
import {getPopularMovies,getPopularTv} from '../../actions/TMDBapi'
import moment from 'moment'

const PopularFilm = () => {
  let dispatch = useDispatch()
  let history = useHistory()
  let films = useSelector(state=>state.popularFilm)
  let selectedFilm = useSelector(state=>state.selectedPopularFilm)

  useEffect(()=>{
    dispatch(getPopularMovies())
    dispatch(getPopularTv())
    setTimeout(()=>{
      dispatch({type:"changePopularSelected", payload:"movie"})
    },2000)
    return ()=>{

    }
  },[])
  console.log(films)
  return (
    <>
      {films.length === 0 ? 
      "loading..."
      :
      <div>
        <div className="Title-container">
          <div className="Main-page-title">What's Popular</div>
          <div className="Active-container">
            <div className="Active" style={{backgroundColor: selectedFilm === "movie" ? "blue" : "white", color: selectedFilm === "movie" ? "white" : "black"}} onClick={()=>dispatch({type:"changePopularSelected", payload:"movie"})}>Streaming</div>
            <div className="Active" style={{backgroundColor: selectedFilm === "tv" ? "blue" : "white", color: selectedFilm === "tv" ? "white" : "black"}} onClick={()=>dispatch({type:"changePopularSelected", payload:"tv"})}>On TV</div>
          </div>
        </div>
        <div className="Film-table">
          <table>
            <tbody>

              <tr className="Card-container">
                { 
                  films.map(film=>{
                    return(
                      <td key={film.id} className="Card">
                        <div className="Poster-Container" onClick={()=>history.push(`/${film.media_type}/details/${film.id}`)}>
                          <div className="Poster" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${film.poster_path})`}}>
                          </div>
                          <div className="Rating">
                            {film.vote_count === 0 ? "NR": <div>{film.vote_average*10}<sup>%</sup></div>}
                          </div>
                        </div>
                        <div className="Card-title"><strong>{film.title}</strong></div>
                        <div>{moment(film.release_date).format("MMM Do, YYYY")}</div>
                      </td>
                      )
                    })
                }
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      }
    </>
  )
}

export default PopularFilm
