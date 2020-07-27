import React, { lazy } from 'react'
const MoviePlaying = lazy(() => import('../Base/MoviePlaying'))

const MovieNowPlayingPage = () => {
  return (
    <>
      <div className="Container-main">
        <MoviePlaying/>
      </div>
    </>
  )
}

export default MovieNowPlayingPage
