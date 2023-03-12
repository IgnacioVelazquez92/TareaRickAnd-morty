import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);


