import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import WaveSeparator from './components/WaveSeparator';
import { ThemeProvider } from './contexts/ThemeContext';
import { Services } from './components/Services';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { MyWork } from './components/pages/MyWork';

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <WaveSeparator topColor="var(--color-primary-bg)" botColor="var(--color-secondary-bg)" />
    <Services />
    <WaveSeparator topColor="var(--color-secondary-bg)" botColor="var(--color-primary-bg)" />
    <About />
    <WaveSeparator topColor="var(--color-primary-bg)" botColor="var(--color-secondary-bg)" />
    <Footer />
  </>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--color-primary-bg)', color: 'var(--color-primary-text)' }}>
          {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
          <div className={`transition-opacity duration-700 ${!loading ? "opacity-100" : "opacity-0"}`}>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/my-work" element={<MyWork />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App