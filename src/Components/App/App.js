import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginLogout from '../LoginLogout/LoginLogout';
import MainPage from '../MainPage/MainPage';
import UserDetails from '../UserDetails/UserDetails';
import UpdateDetails from '../UpdateDetails/UpdateDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div id='App'>
        <h1>🦕 Dinosaur App! 🦖</h1>
        <LoginLogout />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/user' element={<UserDetails />} />
          <Route path='/update' element={<UpdateDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
