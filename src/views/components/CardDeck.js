import React from 'react'
import moment from 'moment'
import {useHistory} from 'react-router-dom'

const CardDeck = (props) => {
  let history = useHistory()
  return (
    <>
      {props.data.films.length === 0 ? 
        "Not Found..."
        :
        <div className="Card-deck-cont">
          { 
            props.data.films.map(film=>{
              return(
                <td key={film.id} className="Card-deck">
                  <div className="Card-deck-poster-cont" onClick={()=>history.push(`/${props.data.type}/details/${film.id}`)}>
                    <div className="Card-deck-poster" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${film.poster_path})`}}>
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
        </div>

      }
    </>
  )
}

export default CardDeck
