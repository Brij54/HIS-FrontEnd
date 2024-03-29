import React, { useState } from 'react';
import Navbar from '../Navbar';
import Schedule from '../Pages/Schedule'; // Import the Schedule component

const ModifySchedule = ({ Toggle }) => {
    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const [roles, setRoles] = useState([]); // State to hold selected roles
    const [submitted, setSubmitted] = useState(false);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted!');
        // Assuming you want to submit only when email is not empty
        if (email.trim() !== '') {
            setSubmitted(true);
        }
    }

    // Handle role selection
    const handleRoleSelection = (role) => {
        if (roles.includes(role)) {
            setRoles(roles.filter(item => item !== role)); // Remove role if already selected
        } else {
            setRoles([...roles, role]); // Add role if not selected
        }
    }

    return (
        <div>
            <Navbar Toggle={Toggle} />
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Roles
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#" onClick={() => handleRoleSelection('Doctor')}>Doctors</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleRoleSelection('Nurse')}>Nurses</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleRoleSelection('Receptionist')}>Receptionist</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleRoleSelection('Pharmacist')}>Pharmacist</a></li>
                </ul>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="email-form">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Check</button>
            </form>
            {submitted && (
                <>
                    <div className="card">
                        <div className="card-body">
                            <div className="schedule">
                                <h2>Schedule</h2>
                                <p>Name: {name}</p>
                                <p>Email: {email}</p>
                                <p>Roles: {roles.join(', ')}</p> {/* Display selected roles */}
                                {/* Render the Schedule component */}
                                <Schedule />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ModifySchedule;
