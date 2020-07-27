import React, { useEffect } from 'react'
import {useDispatch, useSelector} from'react-redux'
import {getTopRatedMovies,getMovieGenres} from '../../actions/TMDBapi'
import {
  CardDeck,
  Filter
} from '../components/Index'
const MovieDetails = () => {
  let dispatch = useDispatch()
  let movies = useSelector(state=>state.menuFilms)
  let check = useSelector(state=>state.topRatedMovies)
  let genres = useSelector(state=>state.movieGenres)
  let type = "movie"

  useEffect(()=>{
    dispatch(getMovieGenres())
    dispatch(getTopRatedMovies())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
      {
        check.length === 0 ? "loading..." :
      <div className="Page-cont">
        <div className="Main-page-title">Top Rated Movies</div>
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

export default MovieDetails
