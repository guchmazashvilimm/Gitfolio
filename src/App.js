
import React from 'react';
import './App.css';
import Home from "./components/Home/Home"
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';
function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        
      </main>
      <Footer/>
      <ScrollUp/>
    </div>
  );
}

export default App;
