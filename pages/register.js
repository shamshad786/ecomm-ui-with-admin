import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

const Register = () => {

  const router = useRouter()


  const registeUserHandler =(e)=>{
    e.preventDefault();
    console.log('user register')
  }

  return (
   <>
      <div className='register-main-container-div'>
        <div className='register-wrapper shadow-sm  container'>
            <h1 className='register-heading-title-el'>Create An Account</h1>

            <div className='register-login-selector'>
            <div className={router.pathname === '/register' ? 'register-left-reg-div reg-active' : 'register-left-reg-div'}>
            <h4 className='register-left-reg-btn'>Register</h4>
            </div>
            <Link href={'/login'} passHref>
            <div className='register-right-reg-div'>
            <h4 className='register-right-log-btn'>Login</h4>
            </div>
            </Link>
            </div>

            <form className='register-form-div'  onSubmit={registeUserHandler}>
              <input type="text" placeholder='First Name' />
              <input type="text" placeholder='Last Name' />
              <input type="text" placeholder='username' />
              <input type="email" placeholder='email' />
              <input type="password" placeholder='password' />
              <input type="password" placeholder='confirm passwod' />
              <div className='register-agreement'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium obcaecati veritatis non, consequatur soluta odio sapiente similique, id debitis nulla tempore a? <b>Privacy Policy</b>
              </div>
              <button className='register-user-reg-btn'   type='submit'>Create Now</button>
            </form>
        </div>
      </div>
   </>
  )
}

export default Register