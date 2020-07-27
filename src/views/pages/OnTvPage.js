import React, { lazy } from 'react'
const OnTv = lazy(() => import('../Base/OnTv'))

const OnTvPage = () => {
  return (
    <>
      <div className="Container-main">
        <OnTv/>
      </div>
    </>
  )
}

export default OnTvPage
