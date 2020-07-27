import React, { lazy } from 'react'
const Tv = lazy(() => import('../Base/Tv'))

const TvPage = () => {
  return (
    <>
      <div className="Container-main">
        <Tv/>
      </div>
    </>
  )
}

export default TvPage
