import React,{ useState } from 'react'
import '../style.css'
import { Link } from 'react-router-dom';

function Sidebar({ Toggle }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        console.log('Before toggle:', isOpen);
        setIsOpen(!isOpen);
        console.log('After toggle:', !isOpen);
        Toggle();
    };
    return (

        <div className={`bg-white sidebar p-1 ${isOpen ? 'open' : ''}`}>
            <div className='m-2 list-group-item py-1'>
                
                <i className="bi bi-justify-left fs-4 me-4 sidebar-toggle" onClick={Toggle}></i>
                <span className='brand-name fs-4'></span>
            </div>
            {!isOpen && (
                <div className="sidebar-closed-icon">
                    <i className="bi bi-list fs-4" onClick={handleToggle}></i>
                </div>
            )}
            <hr className='text-dark' />
            <div className='list-group list-group-flush'>
                <Link to='/' className='list-group-item py-1'>
                    <i className='bi bi-speedometer2 fs-5 me-4'></i>
                    <span >DashBoard</span>
                </Link>
                <Link to='/add-staff' className='list-group-item py-2'>
                    <i className='bi bi-person-add fs-5 me-4'></i>
                    <span >Add Staff</span>
                </Link>
                <Link to='/stafflist' className='list-group-item py-2'>
                    <i className='bi bi-clipboard-data-fill fs-5 me-4'></i>
                    <span >Staff List</span>
                </Link>
                <Link to='/ms' className='list-group-item py-2'>
                    <i className='bi bi-receipt fs-5 me-4'></i>
                    <span >Modify Schedule</span>
                </Link>
                <a className='list-group-item py-2'>
                    <i className='bi bi-gear fs-5 me-4'></i>
                    <span >Setting</span>
                </a>
                <Link to='/deactivate' className='list-group-item py-2'>
                    <i className='bi bi-clipboard-data-fill fs-5 me-4'></i>
                    <span >Deactivate User</span>
                </Link>
                
            </div>

        </div>
    )
}

export default Sidebar;
