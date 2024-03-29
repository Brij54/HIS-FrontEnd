import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './component/Sidebar';
import Home from './component/Dashboard/Home';
import { useState } from 'react';
import AddDoctor from './component/adddoctor/AddDoctor';
import AddStaff from './component/AddStaff/AddStaff';
import AddNurse from './component/AddNurse/AddNurse';
import AddPharmacist from './component/AddPharmacist/AddPharmacist';
import AddReceptionist from './component/AddReceptionist/AddReceptionist';
import StaffList from './component/StaffList/StaffList';
import Category from './component/Pages/Category';
import Deactivate from './component/Deactivate/Deactivate';
import ModifySchedule from './component/ModifySchedule/ModifySchedule';
// import D from './component/Pages/D';
function App() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <Router>
      <div className='container-fluid bg-secondary min-vh-100'>
        <div className='row'>
          {toggle && (
            <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
              <Sidebar Toggle={Toggle} />
            </div>
          )}
          
          {toggle && <div className='col-4 col-md-2'></div>}
          <div className='col'>
            {/* Render routes for different components */}
            <Routes>
              <Route path='/' element={<Home Toggle={Toggle} />} />
              <Route path='/add-staff' element={<AddStaff Toggle={Toggle} />} />
              <Route path='/add-doctor' element={<AddDoctor Toggle={Toggle} />} /> 
              <Route path='/add-nurse' element={<AddNurse Toggle={Toggle} />} /> 
              <Route path='/add-pharmacist' element={<AddPharmacist Toggle={Toggle} />} />
              <Route path='/add-receptionist' element={<AddReceptionist Toggle={Toggle} />} />
              <Route path='/stafflist' element={<StaffList Toggle={Toggle}/>} />
              <Route path='/doctors' element={<Category category='doctors' Toggle = {Toggle}/>} />
              
              <Route path='/nurses' element={<Category category='nurses' Toggle={Toggle}/>} />
              <Route path='/receptionist' element={<Category category='receptionist' Toggle={Toggle}/>} />
              <Route path='/pharmacist' element={<Category category='pharmacist'Toggle={Toggle}/>} />
              <Route path='/deactivate' element={<Deactivate Toggle={Toggle}/>} />
              <Route path='/ms' element={<ModifySchedule Toggle={Toggle}/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
