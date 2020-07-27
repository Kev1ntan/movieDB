import React, { useEffect } from 'react'
import {useDispatch, useSelector} from'react-redux'
import {getUpcomingMovies,getMovieGenres} from '../../actions/TMDBapi'
import {
  CardDeck,
  Filter
} from '../components/Index'
const MovieUpComing = () => {
  let dispatch = useDispatch()
  let movies = useSelector(state=>state.menuFilms)
  let check = useSelector(state=>state.upcomingMovies)
  let genres = useSelector(state=>state.movieGenres)
  let type = "movie"

  useEffect(()=>{
    dispatch(getMovieGenres())
    dispatch(getUpcomingMovies())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
      {
        check.length === 0 ? "loading..." :
      <div className="Page-cont">
        <div className="Main-page-title">Upcoming Movies</div>
        <div className="Page-body">
          <div className="Util-cont">
            <Filter genres={genres}/>
          </div>
          <div className="Util-cont2">
            <CardDeck data={{films:movies,type}}/>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default MovieUpComing
