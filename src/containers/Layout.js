import React from 'react'
import {
  Content,
  Footer,
  Header
} from './index'
const Layout = () => {
  return (
    <div>
      <div className="Layout">
        <Header/>
        <div>
          <Content/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout
