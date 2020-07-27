import React, { lazy } from 'react'
const MovieUpcoming = lazy(() => import('../Base/MovieUpcoming'))

const MovieUpcomingPage = () => {
  return (
    <>
      <div className="Container-main">
        <MovieUpcoming/>
      </div>
    </>
  )
}

export default MovieUpcomingPage
