import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { accentPresets } from './data.js';
import {
  ScrollProgressBar,
  BackToTopButton,
  Nav,
  Hero,
  Skills,
  Projects,
  Journey,
  Contact,
} from './sections.jsx';
import './styles.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('portfolio-theme') : null;
    if (saved === 'light' || saved === 'dark') return saved;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });
  const [accent, setAccent] = useState(accentPresets[0]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-accent',
      theme === 'dark' ? accent.dark : accent.light
    );
  }, [accent, theme]);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <>
      <ScrollProgressBar />
      <Nav theme={theme} setTheme={setTheme} accent={accent} setAccent={setAccent} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <BackToTopButton />
    </>
  );
}

const rootEl = document.getElementById('root');
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<App />);
}

export default App;
