import React, { lazy } from 'react'
const TvTopRated = lazy(() => import('../Base/TvTopRated'))

const TvTopRatedPage = () => {
  return (
    <>
      <div className="Container-main">
        <TvTopRated/>
      </div>
    </>
  )
}

export default TvTopRatedPage
