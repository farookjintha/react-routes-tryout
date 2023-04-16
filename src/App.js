import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [users, setUser] = useState([
    {
      id: 1,
      name: 'Farook',
      city: 'Chennai'
    },
    {
      id: 2,
      name: 'John',
      city: 'Bangalore'
    },
    {
      id: 3,
      name: 'Karthik',
      city: 'Mumbai'
    }
  ]);

  const [userDetails, setUserDetails] = useState({
    name: 'Farook',
    email: 'farook@gmail.com',
    password: 'Welcome123',
    mobileNumber: '55435654353',
    address: 'Chennai'
  });


  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard users={users} />} />
        <Route path='/profile/:userID' element={<Profile users={users} />} />


        <Route path='/login' element={<Login userDetails={userDetails} />} />
        <Route path='/register' element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
