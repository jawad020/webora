import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';
import Header from './components/Header';
import Policy from './components/Policy';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';

function App() {
  return (
    <LanguageProvider>
      <Header />
      <div className="pt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
