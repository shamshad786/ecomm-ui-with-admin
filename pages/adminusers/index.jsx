import React from 'react'
import Sidebar from '../admincontroller/Sidebar'
import Topbar from '../admincontroller/Topbar'
import Userhome from './Userhome'

const index = () => {
  return (
  <>
     <Topbar/>
      <div className='sideContainer'>
      <Sidebar/>
      <Userhome/>
      </div>
  </>
  )
}

export default index