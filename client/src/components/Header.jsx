import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="nav-main-container">
      <div className="navigation">
        <div>
          <h1 className="logo">HoopsCard</h1>
        </div>
        <div className="nav-links">
          {
            currentUser &&
            <>
              <Link className="players-link" to='/players'>Players</Link>
            </>
          }
          {
            currentUser ?
              <>
                <p>{currentUser.username}</p>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
              </>
              :
              <>
                <Link className="login" to='/login'>Login</Link>
                <Link className="register" to='/register'>Register</Link>
              </>
          }
        </div>
      </div>
    </div>
  )
}