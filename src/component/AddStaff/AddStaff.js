import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import '../AddStaff/AddStaff.css';

function AddStaff({ Toggle }) {
    return (
        <div>
            <Navbar Toggle={Toggle} />
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Add Staff</h5>
                    <div className="button-container">
                        <div className="button-row">
                            {/* Link to add a doctor page */}
                            <Link to="/add-doctor" className="button">
                                Add Doctor
                            </Link>
                            <Link to="/add-nurse" className="button">
                                Add Nurse
                            </Link>


                        </div>
                    </div>
                    {/* Add other button rows */}
                    <div className='button-container2'>
                        <Link to="/add-pharmacist" className="button">
                            Add Pharmacist
                        </Link>
                        <Link to="/add-receptionist" className="button">
                            Add Receptionist
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AddStaff;
