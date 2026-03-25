import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <ImageGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;