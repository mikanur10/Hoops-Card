import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'


export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="main-container-log">
      <div className="img-container-log">
        <img src="https://i.imgur.com/Ra1JITz.png" alt="LeBron" width="100%" height="100%"></img>
      </div>
      <div className="log-container">
        <form onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin(formData);
        }}>
          <h3 className="login-title">Login</h3>
          <input
            type='text'
            placeholder='username'
            name='username'
            className="form-input"
            value={formData.username}
            onChange={handleChange}
          />
          <br />
          <input
            type='password'
            name='password'
            placeholder='password'
            className="form-input"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <Link className="register-link" to='/register'>Register</Link>
          <button className="submit-log">Submit</button>
        </form>
      </div>
    </div >
  )
}
