import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';


function Navbar({ Toggle }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent"> 
        <div className="container-fluid">
          {/* Move the toggle button to the sidebar */}
          <i className="bi bi-justify-left fs-4 sidebar-toggle" onClick={Toggle}></i>
          <div className='m-3'>
            <Link to = '/'>
                <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
                <span className='brand-name fs-4'>HIS</span>
            </Link>
          </div>
          
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <img src='home/brij/Desktop/logo.jpg' alt = 'profile image' className='profile-image' />
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Setting</a></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
