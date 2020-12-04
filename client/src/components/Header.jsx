import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="navigation">
      <div>
        <h1>HoopsCard</h1>
      </div>
      <div className="nav-links">
        {
          currentUser &&
          <>
            <Link to='/players'>Players</Link>
          </>
        }
        {
          currentUser ?
            <>
              <p>{currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <>
              <Link to='/login'>Login</Link>
              <br />
              <Link to='/register'>Register</Link>
            </>
        }
      </div>
    </div>
  )
}