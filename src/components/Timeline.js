// src/components/Timeline.js
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaChalkboardTeacher, FaHandsHelping, FaRobot } from 'react-icons/fa';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  background-color: #1c1c1c;
  padding: 50px;
`;

const Timeline = () => {
  return (
    <TimelineContainer>
      <h2>Timeline</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'black', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid black' }}
          date="2020-2024"
          iconStyle={{ background: 'red', color: '#fff' }}
          icon={<FaRobot />}
        >
          <h3 className="vertical-timeline-element-title">Allen High School Robotics Club Programmer</h3>
          <p>
            Worked on programming robot functionalities in Java and Matlab for FRC & BEST competition robots.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'black', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid black' }}
          date="2022 - 2024"
          iconStyle={{ background: 'red', color: '#fff' }}
          icon={<FaChalkboardTeacher />}
        >
          <h3 className="vertical-timeline-element-title">CSBase Vice President & Director of Workshops</h3>
          <p>
            Organized and taught monthly CS webinars & programs, teaching 1300+ students across 42 international chapters. Led 600+ students to market and teach lessons.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'black', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid black' }}
          date="2020 - 2021"
          iconStyle={{ background: 'red', color: '#fff' }}
          icon={<FaHandsHelping />}
        >
          <h3 className="vertical-timeline-element-title">Toys for Texans Vice President & Head of Chapter Operations</h3>
          <p>
            Provided toys and books to underprivileged children across the state. Helped raise $700,000+ for over 15,000 children Helped work with 300+ partners and formed 13 school chapters. Featured on CBS News, Star Local Media, and more.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </TimelineContainer>
  );
};

export default Timeline;
