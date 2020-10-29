import React, { useState } from 'react'

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailOnChange = (e) => {
    setEmail(e.target.value)
    
  }
  const passwordOnChange = (e) => {
    setPassword(e.target.value)
    
  }
  const onSumbit = (e) => {
    e.preventDefault()
    
  }
  const Send = () => {
    alert(`email: ${email}, password: ${password}`)
    setEmail('')
    setPassword('')
  }
  return (
    <div className="login">
      <div className="create_acc">
        <h1>Log in to Example</h1>
        <p>
          <a href={'/'}>or create account</a>
        </p>
      </div>
      <div className="form">
        <form onSubmit={onSumbit}>
          <p>E-mail</p>
          <input
            placeholder="e.g.john.doe@gmail.com"
            onChange={emailOnChange}
            value={email}
          ></input>
          <p>Password</p>
          <input
            placeholder="***********"
            type="password"
            onChange={passwordOnChange}
            value={password}
          ></input>
        </form>
      </div>
      <div className="checkbox">
        <input type="checkbox" />
        <p>
          Agree with <a href={'/'}>Terms&Conditions</a>
        </p>
      </div>
      <button onClick={Send}>Login</button>
      <p>
        <a href={'/'}>Forgotten password?</a>
      </p>
    </div>
  )
}
