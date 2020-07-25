import React, { lazy } from 'react'
const FreeFilm = lazy(() => import('../Base/FreeFilm'))
const TrendingFilm = lazy(() => import('../Base/TrendingFilm'))
const PopularFilm = lazy(() => import('../Base/PopularFilm'))
const TrailerFilm = lazy(() => import('../Base/TrailerFilm'))

const MainPage = () => {
  return (
    <>
      <div className="Container-main">
        {/* <PopularFilm/> */}
        {/* <FreeFilm/> */}
        <TrailerFilm/>
        {/* <TrendingFilm/> */}
      </div>
    </>
  )
}

export default MainPage
