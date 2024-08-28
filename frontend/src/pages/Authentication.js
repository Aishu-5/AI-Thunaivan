import React, { useState } from 'react'
import Login from '../components/auth/Login'
import SignUp from '../components/auth/SignUp'
export default function Authentication() {
  const [authState, setAuthState] = useState('login')
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-500 min-h-screen grid grid-cols-2">
      <div>
        <img
          className="object-center p-10"
          src="https://i.pinimg.com/originals/14/bb/c9/14bbc99c3907c39d21ec10163ec14e92.png"
          alt="svg"
        />
      </div>



      {authState === 'login' && (
        <Login setAuthState={setAuthState} />
      )}
      {authState === 'signup' && <SignUp setAuthState={setAuthState} />}
    </div>
  )
}