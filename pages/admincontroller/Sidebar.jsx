import React from 'react'
import {LineStyle, Timeline, TrendingUp, PersonOutline,Storefront ,Equalizer, AttachMoney,MailOutline,Chat, ChatBubbleOutline,WorkOutline,Report} from '@material-ui/icons'
import { useRouter } from 'next/router'


import Link from 'next/link'

const Sidebar = () => {

    const router = useRouter()

  return (
   <>
       <div className='sidebar'>
           <div className="sidebarWrapper">
               <div className="sideMenu">
                   <h3 className="sidebarTitle">Dasboard</h3>
                   <ul className="sidebarList">
                       <li className={router.pathname == '/admincontroller' ? "sidebarListItems active" : "sidebarListItems"}>
                       <Link href='/admincontroller'>
                        <a>
                        <LineStyle className='sidebarIcons' />
                        Home
                        </a>
                       </Link>
                       </li>
                       <li className="sidebarListItems">
                        <Timeline className='sidebarIcons'/>
                        Analytics
                       </li>
                       <li className="sidebarListItems">
                        <TrendingUp className='sidebarIcons'/>
                        Sales
                       </li>
                   </ul>
               </div>
               <div className="sideMenu">
                   <h3 className="sidebarTitle">Quick Menu</h3>
                   <ul className="sidebarList">
                       <li className={router.pathname == '/adminusers' ? "sidebarListItems active" : "sidebarListItems"}>
                       <Link href='/adminusers'>
                       <a>
                        <PersonOutline className='sidebarIcons' />
                        Users
                       </a>
                       </Link>
                       </li>
                       <li className={router.pathname == '/adminproducts' ? "sidebarListItems active" : "sidebarListItems"}>
                       <Link href='/adminproducts'>
                           <a>
                        <Storefront className='sidebarIcons'/>
                        Products
                           </a>
                       </Link>
                       </li>
                       <li className="sidebarListItems">
                        <AttachMoney   className='sidebarIcons'/>
                        Transactions
                       </li>
                       <li className="sidebarListItems">
                        <Equalizer className='sidebarIcons'/>
                        Reports
                       </li>
                   </ul>
               </div>
               <div className="sideMenu">
                   <h3 className="sidebarTitle">Notifications</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItems">
                        <MailOutline className='sidebarIcons' />
                        Mail
                       </li>
                       <li className="sidebarListItems">
                        <Chat className='sidebarIcons'/>
                        Feedback
                       </li>
                       <li className="sidebarListItems">
                        <ChatBubbleOutline className='sidebarIcons'/>
                        Messages
                       </li>
                   </ul>
               </div>
               <div className="sideMenu">
                   <h3 className="sidebarTitle">Staff</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItems">
                        <WorkOutline className='sidebarIcons' />
                        Manage
                       </li>
                       <li className="sidebarListItems">
                        <Timeline className='sidebarIcons'/>
                        Analytics
                       </li>
                       <li className="sidebarListItems">
                        <Report className='sidebarIcons'/>
                        Report
                       </li>
                   </ul>
               </div>
           </div>
       </div>
   </>
  )
}

export default Sidebar