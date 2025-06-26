import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import WaveSeparator from './components/WaveSeparator';
import { ThemeProvider } from './contexts/ThemeContext';
import { Services } from './components/Services';
import { About } from './components/About';

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--color-primary-bg)', color: 'var(--color-primary-text)' }}>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
        <div className={`transition-opacity duration-700 ${!loading ? "opacity-100" : "opacity-0"}`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Hero />
          <WaveSeparator topColor="var(--color-primary-bg)" botColor="var(--color-secondary-bg)" />
          <Services />
          <WaveSeparator topColor="var(--color-secondary-bg)" botColor="var(--color-primary-bg)" />
          <About />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App