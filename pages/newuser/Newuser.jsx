import React from 'react'

const Newuser = () => {

  const createUserHandler = (e) =>{
    e.preventDefault();
    console.log('New user created');
  }


  return (
    <div  className='newUser-main-container'>
        <h1 className="newUserTitle">New User</h1>
        <form onSubmit={createUserHandler}  className="newUserForm">
          <div className='newUserItem'>
          <label >Username</label>
          <input type="text" placeholder='shamshad' />
          </div>  
          <div className='newUserItem'>
          <label >Full Name</label>
          <input type="text" placeholder='Shamshad Hussain' />
          </div>  
          <div className='newUserItem'>
          <label >E-mail</label>
          <input type="email" placeholder='shamshad3300@gmail.com' />
          </div>  
          <div className='newUserItem'>
          <label >Password</label>
          <input type="password" placeholder='Password' />
          </div>  
          <div className='newUserItem'>
          <label >Phone</label>
          <input type="text" placeholder='+91 8285543311' />
          </div>  
          <div className='newUserItem'>
          <label >Address</label>
          <input type="text" placeholder='New Delhi | India' />
          </div>  
          <div className='newUserItem'>
          <label >Gender</label>
          <div className="newUserGender">
          <input type="radio" name="gender" id="male" value="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female" value="female" />
          <label htmlFor="female">Female</label>
          <input type="radio" name="gender" id="other" value="other" />
          <label htmlFor="other">Other</label>
          </div>
          </div>  
          <div className='newUserItem'>
          <label>Active</label>
          <select className='newUserSelect' name='active' id='active'>
            <option value="Not Selected">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          </div>
          <button className="newUserCreate" type='submit'>Create</button>
        </form>
    </div>
  )
}

export default Newuser