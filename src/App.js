import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';


const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Project= lazy(() => import('./pages/Project'));
const Skills = lazy(() => import('./pages/Skills'));
const Resume = lazy(() => import('./pages/Resume'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    
      <BackToTop />
      <Footer />
    </Router>
  );
}

export default App;
