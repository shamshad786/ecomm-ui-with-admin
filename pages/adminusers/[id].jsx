import React from 'react'
import Topbar from '../admincontroller/Topbar';
import Sidebar  from '../admincontroller/Sidebar';
import Edituser from './Edituser';
const Adminuseridpage = () => {

  return (
   <>
    <Topbar/>
       <div className='sideContainer'>
           <Sidebar/>
            <Edituser/>
       </div>
   </>
  )
}

export default Adminuseridpage