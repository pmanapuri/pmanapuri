// src/components/MainContent.js
import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Timeline from './Timeline';

const MainContent = () => {
  return (
    <>
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
    </>
  );
};

export default MainContent;
