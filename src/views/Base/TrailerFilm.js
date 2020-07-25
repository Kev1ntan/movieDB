import React, { useEffect } from 'react'
import {useDispatch, useSelector} from'react-redux'
import {useHistory} from 'react-router-dom'
import {getTrailerMovies,getTrailerTv} from '../../actions/TMDBapi'
import moment from 'moment'

const TrailerFilm = () => {
  let dispatch = useDispatch()
  let history = useHistory()
  let films = useSelector(state=>state.trailers)
  let selectedFilm = useSelector(state=>state.selectedTrailerFilm)
  const [background, setBackground] = React.useState("")
  useEffect(()=>{
    console.log(films)
    dispatch(getTrailerMovies())
    dispatch(getTrailerTv())
    setTimeout(()=>{
      dispatch({type:"changeTrailerSelected", payload:"movie"})
    },4000)
    return ()=>{

    }
  },[])
  return (
    <>
      {films.length === 0 ? 
      "loading..."
      :
      <div className="Trailer-cont" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${background})`}}>
        <div className="Title-container">
          <div className="Main-page-title">Latest Trailers</div>
          <div className="Active-container">
            <div className="Active" style={{backgroundColor: selectedFilm === "movie" ? "blue" : "white", color: selectedFilm === "movie" ? "white" : "black"}} onClick={()=>dispatch({type:"changeTrailerSelected", payload:"movie"})}>Streaming</div>
            <div className="Active" style={{backgroundColor: selectedFilm === "tv" ? "blue" : "white", color: selectedFilm === "tv" ? "white" : "black"}} onClick={()=>dispatch({type:"changeTrailerSelected", payload:"tv"})}>on TV</div>
          </div>
        </div>
        <div className="Film-table">
          <table>
            <tr>
            {
              films.map(film=>{
                return(
                  <td key={film.id}>
                    <iframe onMouseEnter={(e)=>setBackground(film.backdrop_path)} className="Film-trailer" src={`https://www.youtube.com/embed/${film.videos.results[0].key}?controls=1`}>
                    </iframe>
                  </td>
                )
              })
            }
            </tr>
          </table>
        </div>
      </div>
      }
    </>
  )
}

export default TrailerFilm
