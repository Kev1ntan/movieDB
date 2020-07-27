import React, { lazy } from 'react'
const MovieTopRated = lazy(() => import('../Base/MovieTopRated'))

const MovieTopRatedPage = () => {
  return (
    <>
      <div className="Container-main">
        <MovieTopRated/>
      </div>
    </>
  )
}

export default MovieTopRatedPage
