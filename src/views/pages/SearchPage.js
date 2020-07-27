import React, { lazy } from 'react'
const Search = lazy(() => import('../Base/Search'))

const SearchPage = () => {
  return (
    <>
      <div className="Container-main">
        <Search/>
      </div>
    </>
  )
}

export default SearchPage
