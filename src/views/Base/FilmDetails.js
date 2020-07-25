import React, { lazy, useEffect } from 'react'
import {useDispatch, useSelector} from'react-redux'
import {useHistory, useParams} from 'react-router-dom'
import {getMovieDetails,getTvDetails} from '../../actions/TMDBapi'

const MovieDetails = () => {
  let dispatch = useDispatch()
  let history = useHistory()
  let {id,type} = useParams()
  let film = useSelector(state=>state.film)
  useEffect(()=>{
    if(type === "movie"){
      dispatch(getMovieDetails(id))
    }else{
      dispatch(getTvDetails(id))
    }
  },[])
  console.log(film)
  function refreshPage(filmId){
    if(type === "movie"){
      history.push(`/${type}/details/${filmId}`)
      dispatch(getMovieDetails(filmId))
    }else{
      history.push(`/${type}/details/${filmId}`)
      dispatch(getTvDetails(filmId))
    }
    window.scrollTo(0,0)
  }
  return (
    <>
      {
        film === "" ? "loading..." :
      <div>
        <div className="Film-Container" style={{background: `linear-gradient( rgba(0,0,0,0.7), rgba(0, 0, 0, 0.7) ),url(https://image.tmdb.org/t/p/original${film.backdrop_path})`}}>
          <div className="Film-poster" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${film.poster_path})`}}>
          </div>
          <div>
            <div className="Film-title">
              <strong>
                {`${film.title} (${film.release_date.substr(0,4)})`}
              </strong>
            </div>
            <div>
              {`${film.genres.reduce((a,b)=> {return a + " | " + b.name + " |"},"")} ${film.runtime}m`}
            </div>
            <br></br>
            <div className="Film-tag"><em>{film.tagline}</em></div>
            <div>
              <strong>
                Overview
              </strong>
            </div>
            <div>
              {film.overview}
            </div>
          </div>
        </div>
        <div className="Film-detail-body">
          <div className="Film-detail-left">
              <div className="Main-page-title">Trailers</div>
              <div className="Film-table">
                <table>
                  <tr>
                  {
                    film.videos.results.map(video=>{
                      return(
                        <td>
                          <iframe className="Film-trailer" src={`https://www.youtube.com/embed/${video.key}?controls=1`}>
                          </iframe>
                        </td>
                      )
                    })
                  }
                  </tr>
                </table>
              </div>
              <div className="Main-page-title">Recommendations</div>
              <div className="Film-table">
                <table>
                  <tr className="Card-container">
                    { 
                      film.recommendations.results.map(film=>{
                        return(
                          <td className="Card">
                            <div className="Recomendation-container" onClick={()=>refreshPage(film.id)}>
                              <div className="Recommendation-poster" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${film.backdrop_path})`}}>
                              </div>
                              <div className="Rec-title-cont">
                                <div><strong>{film.title}</strong></div>
                                {film.vote_count === 0 ? "NR": <div>{film.vote_average*10}<sup>%</sup></div>}
                              </div>
                            </div>
                          </td>
                          )
                        })
                    }
                  </tr>
                </table>
              </div>
            </div>
            <div className="Film-detail-right">
              <div className="Main-page-title">Keywords</div>
              { 
                film.keywords.keywords.length === 0 ? 
                "No keyword" :
                film.keywords.keywords.map(keyword=>{
                  return(
                    <div className="Keyword">{keyword.name}</div>
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

export default MovieDetails
