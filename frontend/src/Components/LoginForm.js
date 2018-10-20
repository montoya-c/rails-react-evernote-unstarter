import React, {Component} from 'react';

const LoginForm = (props) => {
  return (
      <div>
        <form onSubmit ={e => e.preventDefault()}>
          <h1>WritroSpect</h1>
          <div>
            <input type="text" onChange={props.handleChange} placeholder="username" name= "username"/>
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" onChange={props.handleChange} placeholder="Password" name="password"/>
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" onClick={e => props.login()} value="Login" />
        </form>
      </div>
    )

}
export default LoginForm
