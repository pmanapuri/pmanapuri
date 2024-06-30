// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const ProjectsContainer = styled(motion.div)`
  padding: 50px;
  background-color: #1c1c1c;
  color: white;
`;

const Project = styled.div`
  margin-bottom: 30px;
  border-bottom: 1px solid white;
`;

const Projects = () => {
  return (
    <Element name="projects">
      <ProjectsContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>My Projects</h2>
        <Project>
          <h3>Project 1</h3>
          <p>Description of project 1.</p>
        </Project>
        <Project>
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
        </Project>
        {/* Add more projects here */}
      </ProjectsContainer>
    </Element>
  );
};

export default Projects;
