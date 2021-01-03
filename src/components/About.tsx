import React from 'react';
import styled from 'styled-components';
import Title from './common/Title';

const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // temp background
  // TODO: interacitve background
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    background-color: ${(props) => props.theme.SecondaryColor.Color100};
    transform: skew(-20deg);
    transform-origin: left top;
    z-index: -1;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -20%;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.GrayColor.Color100};
    transform: skew(-20deg);
    transform-origin: right top;
    z-index: -1;
  }
`;

const Point = styled.span`
  color: ${(props) => props.theme.PrimaryColor.Color500};
  font-size: 2em;
`;

const About = () => {
  return (
    <Container>
      <Title align="center">
        <Point>TIL</Point> For Everyone
      </Title>
    </Container>
  );
};

export default About;
