import React, { lazy } from 'react'
const ResetPass = lazy(() => import('../Base/ResetPass'))

const ResetPassPage = () => {
  return (
    <>
      <div className="Container-main">
        <ResetPass/>
      </div>
    </>
  )
}

export default ResetPassPage
