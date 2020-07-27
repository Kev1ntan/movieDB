import React, { lazy } from 'react'
const Register = lazy(() => import('../Base/Register'))

const RegisterPage = () => {
  return (
    <>
      <div className="Container-main">
        <Register/>
      </div>
    </>
  )
}

export default RegisterPage
