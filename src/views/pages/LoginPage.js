import React, { lazy } from 'react'
const Login = lazy(() => import('../Base/Login'))

const LoginPage = () => {
  return (
    <>
      <div className="Container-main">
        <Login/>
      </div>
    </>
  )
}

export default LoginPage
