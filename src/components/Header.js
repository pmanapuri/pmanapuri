// src/components/Header.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ReactTyped } from "react-typed";

const HeaderContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  color: red;
`;

const headerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } },
};

const Header = ({ onAnimationComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 3500); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <HeaderContainer
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={headerVariants}
    >
      <Name>
        <ReactTyped
          strings={["Hi. I'm Preetham Manapuri"]}
          typeSpeed={40}
          backSpeed={50}
          loop={false}
        />
      </Name>
    </HeaderContainer>
  );
};

export default Header;
