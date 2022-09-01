import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {

  const router = useRouter();

  const loginUserHandler = (e)=>{
      
    e.preventDefault();

      console.log('user logged in clicked');
  }

  return (
    <>
      <div className='register-main-container-div'>
        <div className='register-wrapper container'>
            <h1 className='register-heading-title-el'>Log In Your Account</h1>

            <div className='register-login-selector'>
            <Link href={'/register'} passHref>
            <div className='register-left-reg-div'>
            <h4 className='register-left-reg-btn'>Register</h4>
            </div>
            </Link>
            <div className={router.pathname === '/login' ? 'register-right-reg-div reg-active' : 'register-right-reg-div'}>
            <h4 className='register-right-log-btn'>Login</h4>
            </div>
            </div>

            <form className='register-form-div'  onSubmit={loginUserHandler}>
              <input type="text" placeholder='username' />
              <input type="password" placeholder='password' />
              <button className='register-user-reg-btn'    type='submit'>Login Now</button>
              <Link href={''}>
                <a className='reg-log-forget-password'>Forget Password ?</a>
              </Link>
            </form>
        </div>
      </div>
   </>
  )
}

export default Login