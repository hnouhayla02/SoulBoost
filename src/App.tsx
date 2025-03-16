import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import Verses from './pages/Verses';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/verses" element={<Verses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;