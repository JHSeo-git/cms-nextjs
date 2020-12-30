import React from 'react';
import styled from 'styled-components';
import { Icon } from './common/Icon';
import Title from './common/Title';

const LogoWrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.span`
  transition: transform 0.1s linear;
  svg,
  path {
    fill: ${(props) => props.theme.PrimaryColor.Color500};
  }
  &:hover {
    transform: translateY(-10%);
  }
`;

const Home = () => {
  return (
    <>
      <LogoWrapper>
        <Logo>
          <Icon
            icon="repository"
            aria-label="repository"
            width="60px"
            height="60px"
          />
        </Logo>
      </LogoWrapper>
      <Title align="center">This Site is TIL Booklog</Title>
    </>
  );
};

export default Home;
