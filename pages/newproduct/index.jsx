import React from 'react'
import Topbar from '../admincontroller/Topbar'
import Sidebar from '../admincontroller/Sidebar'
import Newproduct from './Newproduct'

const index = () => {
  return (
    <>
    <Topbar/>
       <div className='sideContainer'>
           <Sidebar/>
            <Newproduct/>
       </div>
   </>
  )
}

export default index