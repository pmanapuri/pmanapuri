// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { Element } from 'react-scroll';

const ProjectsContainer = styled(motion.div)`
  padding: 50px;
  background-color: black;
  color: white;
  text-align: center;
`;

const Project = styled(motion.div)`
  background: #1c1c1c;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  color: red;
`;

const ProjectDescription = styled.p`
  color: white;
`;

const Projects = () => {
  return (
    <Element name="projects">
      <ProjectsContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>My Projects</h2>
        <Project whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <ProjectTitle>Project 1</ProjectTitle>
          <ProjectDescription>
            Description of project 1. <FaGithub size={20} />
          </ProjectDescription>
        </Project>
        <Project whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <ProjectTitle>Project 2</ProjectTitle>
          <ProjectDescription>
            Description of project 2. <FaGithub size={20} />
          </ProjectDescription>
        </Project>
        {/* Add more projects here */}
      </ProjectsContainer>
    </Element>
  );
};

export default Projects;
