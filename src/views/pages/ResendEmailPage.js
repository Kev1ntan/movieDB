import React, { lazy } from 'react'
const ResendEmail = lazy(() => import('../Base/ResendEmail'))

const ResendEmailPage = () => {
  return (
    <>
      <div className="Container-main">
        <ResendEmail/>
      </div>
    </>
  )
}

export default ResendEmailPage
