import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Movements from '../pages/Movements';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movements />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
