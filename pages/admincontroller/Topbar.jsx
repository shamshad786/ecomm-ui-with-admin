import React from 'react'
import { NotificationsNone,Language, Settings } from '@material-ui/icons'
import Image from 'next/image'


const Topbar = () => {
  return (
    <div className='topbar shadow-sm'>
    <div className='topbarwrapper'>
    <div className='topLeft'>
        <span className='logo'>LOGO HERE</span>
    </div>
    <div className='topRight'>
        <div className="topbarRighticonsContainer">
          <NotificationsNone/>
          <span className="topiconbadge">2</span>
        </div>
        <div className="topbarRighticonsContainer">
          <Language/>
          <span className="topiconbadge">2</span>
        </div>
        <div className="topbarRighticonsContainer">
          <Settings/>
        </div>
        <Image  src='/images/user.png' width='40' height='40'  alt='adminProfile' />
        
    </div>
    </div>
    </div>
  )
}

export default Topbar