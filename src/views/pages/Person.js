import React, { lazy } from 'react'
const Person = lazy(() => import('../Base/Person'))

const PersonPage = () => {
  return (
    <>
      <div className="Container-main">
        <Person/>
      </div>
    </>
  )
}

export default PersonPage
