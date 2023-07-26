import React from 'react'
import Header from '../component/Header/Index'
import SignupSignin from '../component/SignupSignin/Index'

function Signup() {
  return (
      <div>
          <Header />
          <div className='wrapper'>
              <SignupSignin/>
          </div>
    </div>
  )
}

export default Signup