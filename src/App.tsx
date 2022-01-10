import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import ContentRequisitos from './Components/ContentRequisitos';
import ContentBanner from './Components/ContentBanner';
import ContentBeneficios from './Components/ContentBeneficios';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App content">
      <Header />
      <Slider />
      <ContentRequisitos />
      <ContentBanner />
      <ContentBeneficios />
      <Footer />
      {/* 
        Header
        Slider
        Content
        Logo
        Beneficios
        Footer
      */}
    </div>
  );
}

export default App;
