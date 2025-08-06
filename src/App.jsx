import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Footer from './components/Footer';
import SMSList from './components/SMSList';
import Dashboard from './components/Dashboard';
import { useState,useEffect } from 'react';
import Navbar from './components/Navbar';

function App() {
    const [theme, setTheme] = useState('light');

  // On initial load, read or set default theme
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored);
      document.documentElement.classList.toggle('dark', stored === 'dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar/>

        {/* <main className="flex-grow"> */}
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/sms" element={<SMSList />} />
          </Routes>
        {/* </main> */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
