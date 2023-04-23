import React from 'react'
import { Link } from 'react-router-dom';
import { getCurrentUser, logout } from '../auth';



const Navbar = () => {
  const currentUser = getCurrentUser();
  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <nav className='h-20 bg-blue-400 flex flex-col items-center justify-center'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {currentUser ? (
          <>
                    <Link to="/profile">Profile</Link>
                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
            );
          };
          
          export default Navbar;