import React,{useEffect} from 'react'
import {useDispatch, useSelector} from'react-redux'

const Filter = (props) => {
  let dispatch = useDispatch()
  let selectedGenres = useSelector(state=>state.selectedGenres)
  useEffect(()=>{
    return ()=>{
      dispatch({type:"resetFilter"})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
    {
      props.genres.length === 0 ?
       "loading..."
      :   
      <div className="Filter-cont">
        <div className="Util-title">Filter</div>
        <div className="Filter-genres-cont">
          {
            props.genres.map(genre=>{
              return(
                <div onClick={()=>dispatch({type:'changeSelectedGenres',payload:genre.id})} style={{backgroundColor: selectedGenres.filter(gen => gen === genre.id).length !== 0 ? "gray" : "white"}} className="Genre-item" key={genre.id}>{genre.name}</div>
              )
            })
          }
        </div>
        <div className="Filter-button-cont">
          <div className="Filter-button" onClick={()=>dispatch({type:"filter"})}>Filter</div>
          <div className="Reset-button" onClick={()=>dispatch({type:"resetFilter"})}>Reset</div>
        </div>
      </div>
    }
    </>
  )
}

export default Filter
