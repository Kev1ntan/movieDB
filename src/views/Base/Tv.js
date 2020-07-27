import React, { useEffect } from 'react'
import {useDispatch, useSelector} from'react-redux'
import {getPopularTv,getTVGenres} from '../../actions/TMDBapi'
import {
  CardDeck,
  Filter
} from '../components/Index'
const TV = () => {
  let dispatch = useDispatch()
  let tv = useSelector(state=>state.menuFilms)
  let check = useSelector(state=>state.popularTVs)
  let genres = useSelector(state=>state.tvGenres)
  let type = "tv"
  useEffect(()=>{
    dispatch(getTVGenres())
    dispatch(getPopularTv())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
      {
        check.length === 0 ? "loading..." :
      <div className="Page-cont">
        <div className="Main-page-title">Popular TV</div>
        <div className="Page-body">
          <div className="Util-cont">
            <Filter genres={genres}/>
          </div>
          <div className="Util-cont2">
            <CardDeck data={{films:tv,type}}/>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default TV
