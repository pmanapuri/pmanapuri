// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const SkillsContainer = styled(motion.div)`
  padding: 50px;
  background-color: black;
  color: red;
  text-align: center;
`;

const Skill = styled(motion.div)`
  display: inline-block;
  margin: 20px;
  padding: 10px;
  border: 2px solid red;
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const skills = ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js'];

const Skills = () => {
  return (
    <Element name="skills">
      <SkillsContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>My Skills</h2>
        {skills.map(skill => (
          <Skill key={skill}>
            {skill}
          </Skill>
        ))}
      </SkillsContainer>
    </Element>
  );
};

export default Skills;
