import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutme from './Pages/Aboutme';
import Contactme from './Pages/Contactme';
import Homepage from './Pages/Homepage';

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/about_me' element={<Aboutme />}/>
        <Route path='/contact_me' element={<Contactme/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  
    </div>
  );
}

export default App