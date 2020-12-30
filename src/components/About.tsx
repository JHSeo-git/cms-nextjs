import React from 'react';
import styled from 'styled-components';
import Title from './common/Title';

const Content = styled.p`
  text-align: center;
  font-size: 1.25rem;
  color: ${(props) => props.theme.GrayColor.Color700};
`;

const About = () => {
  return (
    <>
      <Title align="center" appearance="primary">
        TIL Blog For Everyone
      </Title>
      <Content>My Name is Jun Hyung Seo</Content>
      <Content>Everybody call me Seo.</Content>
    </>
  );
};

export default About;
