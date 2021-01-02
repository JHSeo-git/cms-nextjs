import React from 'react';
import styled from 'styled-components';
import Title from './common/Title';

const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
