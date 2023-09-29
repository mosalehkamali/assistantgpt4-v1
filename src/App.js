import React,{useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import Products from './components/Products/Products';
import ChatExtra from './components/Products/ChatExtra/ChatExtra';

function App() {
 
  return (
    <div className="App">
       <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/ChatExtra" element={<ChatExtra />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
