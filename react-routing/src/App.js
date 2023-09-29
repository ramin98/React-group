import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import { Header } from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';

export function App() {
  let [userArr, setuserArr] = useState([{ name: 'Ramin', id: 1, title: "Ramin ipsum dolor sit amet consectetur adipisicing elit. Eum, repellat?" }, { name: 'Sahib', id: 2, title: "Sahib ipsum dolor sit amet consectetur adipisicing elit. Eum, repellat?" }, { name: 'Fidan', id: 3, title: "Fidan ipsum dolor sit amet consectetur adipisicing elit. Eum, repellat?" }])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/*' element={<About userArr={userArr} />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}




