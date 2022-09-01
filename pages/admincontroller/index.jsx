import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Home from './Home'

const index = () => {
  return (
    <>
      <Topbar/>
      <div className='sideContainer'>
      <Sidebar/>
      <Home/>
      </div>
    </>
  )
}

export default index