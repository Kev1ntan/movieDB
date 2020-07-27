import React, { lazy } from 'react'
const TvAiring = lazy(() => import('../Base/TvAiringToday'))

const TvAiringPage = () => {
  return (
    <>
      <div className="Container-main">
        <TvAiring/>
      </div>
    </>
  )
}

export default TvAiringPage
