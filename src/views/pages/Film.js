import React, { lazy } from 'react'
const FilmDetails = lazy(() => import('../Base/FilmDetails'))


const Film = () => {
  return (
    <>
      <div className="Film-detail-cont">
        <FilmDetails/>
      </div>
    </>
  )
}

export default Film
