// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const ContactContainer = styled(motion.div)`
  padding: 50px;
  background-color: #1c1c1c;
  color: white;
  text-align: center;
`;

const Contact = () => {
  return (
    <Element name="contact">
      <ContactContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me via email at <a href="mailto:mpreetham@cmu.edu" style={{ color: 'red' }}>you@example.com</a></p>
      </ContactContainer>
    </Element>
  );
};

export default Contact;
