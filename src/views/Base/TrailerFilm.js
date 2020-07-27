import React, { useEffect } from 'react'
import {useDispatch, useSelector} from'react-redux'
import {getTrailerMovies,getTrailerTv} from '../../actions/TMDBapi'

const TrailerFilm = () => {
  let dispatch = useDispatch()
  let films = useSelector(state=>state.trailers)
  let selectedFilm = useSelector(state=>state.selectedTrailerFilm)
  const [background, setBackground] = React.useState("")
  useEffect(()=>{
    dispatch(getTrailerMovies())
    dispatch(getTrailerTv())
    setTimeout(()=>{
      dispatch({type:"changeTrailerSelected", payload:"movie"})
    },4000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <div className="Active" style={{backgroundColor: selectedFilm === "movie" ? "blue" : "unset"}} onClick={()=>dispatch({type:"changeTrailerSelected", payload:"movie"})}>Streaming</div>
            <div className="Active" style={{backgroundColor: selectedFilm === "tv" ? "blue" : "unset"}} onClick={()=>dispatch({type:"changeTrailerSelected", payload:"tv"})}>on TV</div>
          </div>
        </div>
        <div className="Film-table">
          <table>
            <tbody>
              <tr>
              {
                films.map(film=>{
                  return(
                    <td key={film.id}>
                      <iframe title={film.id} onMouseEnter={(e)=>setBackground(film.backdrop_path)} className="Film-trailer" src={`https://www.youtube.com/embed/${film.videos.results[0].key}?controls=1`}>
                      </iframe>
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

export default TrailerFilm
