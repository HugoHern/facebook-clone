import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'

const Login = () => {
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum a ipsam doloremque, voluptate nobis neque exercitationem minus consequatur molestiae repellendus odit deserunt placeat fugiat tempora dolorem nemo necessitatibus provident dolore?</p>
            <span>Don't you have an account?</span>
            <Link to='/register'>
            <button>Register</button>
            </Link>
          </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Password' />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login