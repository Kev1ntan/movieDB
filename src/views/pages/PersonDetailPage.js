import React, { lazy } from 'react'
const PersonDetails = lazy(() => import('../Base/PersonDetails'))


const PersonDetailsPage = () => {
  return (
    <>
      <div className="Film-detail-cont">
        <PersonDetails/>
      </div>
    </>
  )
}

export default PersonDetailsPage
