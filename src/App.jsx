import { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import Home from './pages/Home';
import Starter from './Components/Starter';
import Login from './pages/login';
import Signup from './pages/Signup';
import {ThemeContext} from './Context/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  const [theme, setTheme] = useState('light')

  useEffect(()=>{
    setTheme (localStorage.getItem('theme')? localStorage.getItem('theme'):'dark')
  },[])

  

  return (

    <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`${theme} ${theme == 'dark' ? 'bg-[#121212]' : null} min-h-[100vh]`}>
          <Router>
          <Starter />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          </Router>
        </div>
      </ThemeContext.Provider>
      
  );
}

export default App
