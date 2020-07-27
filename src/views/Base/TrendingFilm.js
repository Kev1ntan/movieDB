import React, { useEffect } from 'react'
import {useDispatch, useSelector} from'react-redux'
import {useHistory} from 'react-router-dom'
import {getTrendingToday,getTrendingWeek} from '../../actions/TMDBapi'
import moment from 'moment'

const TrendingFilm = () => {
  let dispatch = useDispatch()
  let history = useHistory()
  let films = useSelector(state=>state.trending)
  let selectedTrendingFilm = useSelector(state=>state.selectedTrendingFilm)

  useEffect(()=>{
    dispatch(getTrendingToday())
    dispatch(getTrendingWeek())
    setTimeout(()=>{
      dispatch({type:"changeTrendingSelected", payload:"day"})
    },2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
      {films.length === 0 ? 
      "loading..."
      :
      <div>
        <div className="Title-container">
          <div className="Main-page-title">Trending Film</div>
          <div className="Active-container">
            <div className="Active" style={{backgroundColor: selectedTrendingFilm === "day" ? "blue" : "white", color: selectedTrendingFilm === "day" ? "white" : "black"}} onClick={()=>dispatch({type:"changeTrendingSelected", payload:"day"})}>Today</div>
            <div className="Active" style={{backgroundColor: selectedTrendingFilm === "week" ? "blue" : "white", color: selectedTrendingFilm === "week" ? "white" : "black"}} onClick={()=>dispatch({type:"changeTrendingSelected", payload:"week"})}>This Week</div>
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
                        <div className="Card-title-cont">
                          <div className="Card-title"><strong>{film.title}</strong></div>
                          <div>{moment(film.release_date).format("MMM Do, YYYY")}</div>
                        </div>
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

export default TrendingFilm
