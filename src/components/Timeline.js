// src/components/Timeline.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const TimelineItem = styled(motion.div)`
  width: 60%;
  background: #2e2e2e;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  color: white;
`;

const timelineVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

const Timeline = () => {
  return (
    <TimelineContainer>
      <TimelineItem initial="hidden" whileInView="visible" variants={timelineVariants}>
        <h3>2018</h3>
        <p>Started my journey in web development.</p>
      </TimelineItem>
      <TimelineItem initial="hidden" whileInView="visible" variants={timelineVariants}>
        <h3>2020</h3>
        <p>Worked on amazing projects.</p>
      </TimelineItem>
      {/* Add more timeline items here */}
    </TimelineContainer>
  );
};

export default Timeline;
