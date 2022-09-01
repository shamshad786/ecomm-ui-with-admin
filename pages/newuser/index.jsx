import React from 'react'
import Topbar from '../admincontroller/Topbar'
import Sidebar from '../admincontroller/Sidebar'
import Newuser from './Newuser'

const index = () => {
  return (
    <>
    <Topbar/>
       <div className='sideContainer'>
           <Sidebar/>
          <Newuser/>
       </div>
   </>
  )
}

export default index