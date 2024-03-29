import React, { useState } from 'react';
import Navbar from '../Navbar';
import '../StaffList/StaffList.css';
import { Link } from 'react-router-dom';

function StaffList({ Toggle }) {
  const [menu,setMenu] = useState("category");
  return (
    <div>
      <Navbar Toggle={Toggle} />
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item1" onClick={() => {setMenu("doctors")}}><Link style={{textDecoration : 'none'}} to ='/doctors'>Doctors</Link>{menu==="doctors"?<hr/>:<></>}
                {/* <Link className="nav-link active" aria-current="page" to="/doctors">
                  Doctor
                </Link> */}
              </li>
              <li className="nav-item1" onClick={() => {setMenu("nurses")}}><Link style={{textDecoration : 'none'}} to ='/nurses'>Nurses</Link>{menu==="nurses"?<hr/>:<></>}
              </li>
              <li className="nav-item1" onClick={() => {setMenu("receptionist")}}><Link style={{textDecoration : 'none'}} to ='/receptionist'>Receptionist</Link>{menu==="receptionist"?<hr/>:<></>}
              </li>
              <li className="nav-item1" onClick={() => {setMenu("pharmacist")}}><Link style={{textDecoration : 'none'}} to ='/pharmacist'>Pharmacist</Link>{menu==="pharmacist"?<hr/>:<></>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Wrap the `<h1>` elements within separate `Route` components */}
      
    </div>
  );
}

export default StaffList;
