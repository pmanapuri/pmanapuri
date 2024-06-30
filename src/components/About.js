// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const AboutContainer = styled(motion.div)`
  padding: 50px;
  text-align: center;
  background-color: #1c1c1c;
  color: white;
`;

const About = () => {
  return (
    <Element name="about">
      <AboutContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>About Me</h2>
        <p>Hey! I'm Preetham, and I'm an incoming freshman at Carnegie Mellon University for Computer Science. Thanks for visiting my site!</p>
      </AboutContainer>
    </Element>
  );
};

export default About;
