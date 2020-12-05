import { useState } from 'react';
import './Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
    <div className="main-container-reg">
      <div className="img-container-reg">
        <img src="https://i.imgur.com/Ra1JITz.png" alt="LeBron" width="100%" height="100%"></img>
      </div>
      <div className="reg-container">
        <h3 className="register-title">Register</h3>
        <form className="register-form" onSubmit={(e) => {
          e.preventDefault();
          props.handleRegister(formData);
        }}>
          <input
            type='text'
            name='username'
            placeholder='username'
            value={formData.username}
            onChange={handleChange}
          />
          <br />
          <input
            type='text'
            name='email'
            placeholder='email'
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <input
            type='password'
            name='password'
            placeholder='password'
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
