import React from 'react'
import Image from 'next/image'
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from '@material-ui/icons'
import Link from 'next/link'


const Edituser = () => {

const updateUserHandle = (e)=>{
    e.preventDefault()
    console.log('user update')
}



  return (
  <>
      <div className='EditUserList'>
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit User</h1>
            <Link href='/newuser' passHref> 
            <button className='userAddButton'>Create</button>
            </Link>
        </div>
        <div className='userContainer'>
            <div className='userShow shadow-sm'>
                <div className="userShowTop">
                <Image className='userShowProfilePic' src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={40} height={40} objectFit='cover' alt=""/>
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Shamshad Hussain</span>
                    <span className="userShowUserTitle">Software Developer</span>
                </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                    <PermIdentity className='userShowIcons' />
                    <span className="userShowInfoTitle">sam5663</span>
                    </div>
                    <div className="userShowInfo">
                    <CalendarToday className='userShowIcons'/>
                    <span className="userShowInfoTitle">08-12-1996</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                    <PhoneAndroid className='userShowIcons'/>
                    <span className="userShowInfoTitle">+91 82-8554-3311</span>
                    </div>
                    <div className="userShowInfo">
                    <MailOutline className='userShowIcons'/>
                    <span className="userShowInfoTitle">shamshad3300@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                    <LocationSearching className='userShowIcons'/>
                    <span className="userShowInfoTitle">New Delhi | India</span>
                    </div>
                </div>
            </div>
            <div className='userUpdate shadow-sm'>
                <span className="updateTitle">Edit</span>
                <form  className="userUpdateForm" onSubmit={(e)=> updateUserHandle(e)}>
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder='sam5663' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder='Shamshad Hussain' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>E-mail</label>
                            <input type="text" placeholder='shamshad3300@gmail.com' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder='+91 82-8554-3311' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder='New Delhi | India' className='userUpdateInput' />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                        <Image className='userUpdateImg' src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={70} height={70} objectFit='cover' alt=""/>
                        <div className='uploadIcon'>
                        <label htmlFor="file"><Publish className='imageUpdateIcon' /></label>
                        <input type="file" id='file' style={{display: 'none'}} />
                        </div>
                        </div> 
                        <button className="userUpdateButton" type='submit' >Update</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
  </>
  )
}

export default Edituser