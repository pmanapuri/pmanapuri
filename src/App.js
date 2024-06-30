// src/App.js
import React, { useState } from 'react';
import { GlobalStyle } from './styles';
import Header from './components/Header';
import MainContent from './components/MainContent';

const App = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleAnimationComplete = () => {
    setIsHeaderVisible(false);
  };

  return (
    <>
      <GlobalStyle />
      {isHeaderVisible ? (
        <Header onAnimationComplete={handleAnimationComplete} />
      ) : (
        <MainContent />
      )}
    </>
  );
};

export default App;
