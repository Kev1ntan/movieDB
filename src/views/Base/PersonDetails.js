import React, { useEffect } from 'react'
import {useDispatch, useSelector} from'react-redux'
import {useHistory, useParams} from 'react-router-dom'
import {getPersonDetails} from '../../actions/TMDBapi'

const MovieDetails = () => {
  let dispatch = useDispatch()
  let history = useHistory()
  let {id} = useParams()
  let person = useSelector(state=>state.person)
  useEffect(()=>{
    dispatch(getPersonDetails(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  function sorting(data){
    for(let i = 0; i < data.length; i++){
      if(data[i].release_date){
        data[i].date = Number(data[i].release_date.substr(0,4))
      }else{
        data[i].date = Number(data[i].first_air_date.substr(0,4))
      }
    }
    let sorted = data.sort((a,b)=> a.date - b.date)
    return sorted
    
  }
  return (
    <>
      {
        person === "" ? "loading..." :
      <div className="Person-cont">
        <div className="Person-cont-left">
          <div className="Film-poster" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${person.profile_path})`}}/>
          <div className="Person-sub-title">Personal Info</div>
          <div className="Person-sub-title2">Known For</div>
          <div>{person.known_for_department}</div>
          <br></br>
          <div className="Person-sub-title2">Known Credits</div>
          <div>{person.combined_credits.cast.length}</div>
          <br></br>
          <div className="Person-sub-title2">Gender</div>
          <div>{person.gender === 1 ? "Female" : "Male"}</div>
          <br></br>
          <div className="Person-sub-title2">Birthday</div>
          <div>{person.birthday}</div>
          <br></br>
          <div className="Person-sub-title2">Place of Birth</div>
          <div>{person.place_of_birth}</div>
          <br></br>
          <div className="Person-sub-title2">Also Known As</div>
          <div>{person.also_known_as.join(",")}</div>
        </div>
        <div className="Person-cont-right">
          <div className="Person-title">{person.name}</div>
          <div className="Person-sub-title">Biography</div>
          <div>{person.biography}</div>
          <br></br>
          <div className="Person-sub-title">Known For</div>          
          <div className="Film-table">
            <table>
              <tbody>
                <tr className="Card-container">
                  { 
                    person.combined_credits.cast.map(film=>{
                      return(
                        <td key={film.id} className="Card">
                          <div className="Poster-Container" onClick={()=>history.push(`/${film.media_type}/details/${film.id}`)}>
                            <div className="Poster" style={{backgroundImage: film.poster_path === null ? `url(https://www.pn-denpasar.go.id/assets/CKImages/images/aa.jpg)` : `url(https://image.tmdb.org/t/p/original${film.poster_path})`}}>
                            </div>
                          </div>
                          <div className="Card-title-cont">
                            <div><center><strong>{film.title ? film.title : film.name}</strong></center></div>
                            {/* <div>{moment(film.release_date).format("MMM Do, YYYY")}</div> */}
                          </div>
                        </td>
                        )
                      })
                  }
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div>
              <div className="Person-sub-title">Acting</div>          
                {sorting(person.combined_credits.cast).reverse().map(arr=>{
                  return(
                    <div className="Film-list">{`${arr.release_date ? arr.release_date.substr(0,4) : arr.first_air_date.substr(0,4)} - ${arr.title ? arr.title : arr.name} As ${arr.character}`}</div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default MovieDetails
