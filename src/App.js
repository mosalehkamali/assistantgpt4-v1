import React,{useStat , useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import Products from './components/Products/Products';
import ChatExtra from './components/Products/ChatExtra/ChatExtra';

function App() {
  useEffect(() => {
    // Set the title dynamically
    document.title = 'Assistant GPT4';

    // You can also change the favicon dynamically (optional)
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = 'http://assistantgpt4.com/GPTlogo.png'; // Replace with your favicon path
    }
  }, []);
 
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
