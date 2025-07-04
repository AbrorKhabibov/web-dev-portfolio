import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/reusables/Navbar';
import { ThemeProvider } from './contexts/ThemeContext';
import { HomePage } from './components/pages/Home';
import { MyWork } from './components/pages/MyWork';
import { Contact } from './components/pages/Contact';
import { Services } from './components/pages/Services';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--color-primary-bg)', color: 'var(--color-primary-text)' }}>
          {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
          <div className={`transition-opacity duration-700 ${!loading ? "opacity-100" : "opacity-0"}`}>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/my-work" element={<MyWork />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App