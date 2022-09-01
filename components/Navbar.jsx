import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined, Info, Call,Home, MenuOutlined,CloseOutlined } from '@material-ui/icons'
import { useRouter } from 'next/router'

const Navbar = () => {

  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  const user = false;
  
  return (
    <>
      <div className='navbar-main-container shadow-sm'>
          <div className='navbar-warpper-div container'>
            <div className='navbar-Top-left'>
              <span className='navbar-language-div-top-left'>EN</span>
              <div className='search-div-navbar-top-left border'>
                  <input className='navbar-search-input'  type="text" placeholder='Search' />
                  <Search style={{color: 'gray', fontSize: 23 }} />
              </div>
              <div className='left-inner-homes-menu-lists'>
              <Link href={'/'} passHref>
                <span className={router.pathname === '/' ? 'navbar-link active' : 'navbar-link'}> <Home className='navbar-icon-top-left ' />Home</span>
              </Link>
              <Link href={'/about'} passHref>
                <span className={router.pathname === '/about' ? 'navbar-link active' : 'navbar-link'}> <Info className='navbar-icon-top-left' /> About</span>
              </Link>
              <Link href={'/contact'} passHref>
                <span className={router.pathname === '/contact' ? 'navbar-link active' : 'navbar-link'}> <Call className='navbar-icon-top-left'  />  Contact</span>
              </Link>
              </div>
            </div>
            <div className='navbar-Top-center'>
              <Image className='logo-img' src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''  width={100}  height={40} objectFit='cover' />
            </div>
            <div className='navbar-Top-right-div'>
            <div className='navbar-top-right'>
              {user ? (
                <>
                <Link href={`/userprofile/123`} passHref>
                <div className='user-container-div'>
                  <Image src={user.profile ? user.profile : '/images/user.png'}  width='32' height='32' alt='' />
                  <div className='login-user'><h6>Shamshad Hussain</h6></div>
                </div>
                </Link>
                </>
              ) : (
                <>
                <div className='register-main-container'>
                <Link href={'/register'} passHref>
                <div className='navbar-top-right' >Register</div>
                </Link>
                <Link href={'/login'} passHref>
                 <div className='navbar-top-right ' >Login</div>
                </Link>
                </div>
                </>
              )}
            </div>
            <Link href={'/cart'} passHref>
              <div className='navbar-top-right-badge' >
              <Badge badgeContent={8} overlap="rectangular"  color="secondary">
                <ShoppingCartOutlined color="action" />
              </Badge>
              </div>
            </Link>
            </div>
                <div className='ismobile-div'  onClick={()=> setIsMobile(!isMobile)} >
                    <button>
                    {isMobile ? (<CloseOutlined/>) : (<MenuOutlined/>) }
                    </button>

                    <div className={isMobile ? 'mobile-sidebar-menus-list shadow-sm' : null}>
                      <div className={isMobile ? 'mobile-side-user-register-block ' : 'mobile-side-user-register-none'}>
                      <div className='navbar-Top-center-block'>
              <Image className='logo-img' src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''  layout='fill' objectFit='cover' />
            </div>
                          {user ? (
                          <>
                          <Link href={`/userprofile/123`} passHref>
                          <div className='user-container-div-block'>
                            <Image src={user.profile ? user.profile : '/images/user.png'}  width='32' height='32' alt='' />
                            <div className='login-user'><h6>Shamshad Hussain</h6></div>
                          </div>
                          </Link>
                          </>
                        ) : (
                          <>
                          <div className='register-main-container-block'>
                          <Link href={'/register'} passHref>
                          <div className='navbar-top-right' >Register</div>
                          </Link>
                          <Link href={'/login'} passHref>
                          <div className='navbar-top-right ' >Login</div>
                          </Link>
                          </div>
                          </>
                        )}

                        <div className='left-inner-homes-menu-lists-block'>
                        <Link href={'/'} passHref>
                          <span className={router.pathname === '/' ? 'navbar-link active' : 'navbar-link'}> <Home className='navbar-icon-top-left ' />Home</span>
                        </Link>
                        <Link href={'/about'} passHref>
                          <span className={router.pathname === '/about' ? 'navbar-link active' : 'navbar-link'}> <Info className='navbar-icon-top-left' /> About</span>
                        </Link>
                        <Link href={'/contact'} passHref>
                          <span className={router.pathname === '/contact' ? 'navbar-link active' : 'navbar-link'}> <Call className='navbar-icon-top-left'  />  Contact</span>
                        </Link>
                        </div>

                      </div>
                    </div>
                </div>
          </div>
      </div>
     
    

    </>
  )
}

export default Navbar