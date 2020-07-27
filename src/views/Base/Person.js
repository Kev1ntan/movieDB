import React, { useEffect } from 'react'
import {useDispatch, useSelector} from'react-redux'
import {useHistory} from 'react-router-dom'
import {getPopularPeople} from '../../actions/TMDBapi'
import {
} from '../components/Index'
const TV = () => {
  let dispatch = useDispatch()
  let history = useHistory()
  let people = useSelector(state=>state.popularPeople)
  useEffect(()=>{
    dispatch(getPopularPeople())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  function cutFilm(films){
    if(films.length === 0){
      return "No Data..."
    }
    let mergeFilm = ""
    for(let i = 0; i< films.length; i++){
      let str = films[i].name ? films[i].name : films[i].title
      if(i === films.length-1){
        mergeFilm += str
      }else{
        mergeFilm += str + ","
      }
    }
    if(mergeFilm.length > 22){
      return mergeFilm.substr(0,22) + "..."
    }
    return mergeFilm
  }
  return (
    <>
      {
        people.length === 0 ? "loading..." :
        <div className="Page-cont">
          <div className="Main-page-title">Popular People</div>
          <div className="Page-body">
            <div className="Util-cont2">
              <div className="Card-deck-cont">
                { 
                  people.map(person=>{
                    return(
                      <div key={person.id} className="Card-deck">
                        <div className="Card-deck-poster-cont" onClick={()=>history.push(`/person/details/${person.id}`)}>
                          <div className="Card-deck-poster" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${person.profile_path})`}}>
                          </div>
                          <div className="Card-title-cont">
                            <div className="Card-title"><strong>{person.name}</strong></div>
                            <div>{cutFilm(person.known_for)}</div>
                          </div>
                        </div>
                      </div>
                      )
                    })
                }
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default TV
