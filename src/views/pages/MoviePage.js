import React, { lazy } from 'react'
const Movie = lazy(() => import('../Base/Movie'))

const MoviePage = () => {
  return (
    <>
      <div className="Container-main">
        <Movie/>
      </div>
    </>
  )
}

export default MoviePage
