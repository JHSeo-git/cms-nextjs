import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import Link from 'next/link';
import { Icon } from './common/Icon';

const Title = styled.h1`
  padding: 2rem 0;
  text-align: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.span`
  transition: transform 0.1s linear;
  svg,
  path {
    fill: #3884fe;
  }
  &:hover {
    transform: translateY(-10%);
  }
`;

const Content = styled.p`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Anchor = styled.a`
  font-size: 1.25rem;
  font-weight: bold;
  transition: all 0.2s linear;
  color: #3884fe;
  &:hover {
    text-decoration: underline;
    color: ${darken(0.2, '#3884fe')};
  }
`;

const Main = () => {
  return (
    <div>
      <Title>This Site is cloning GitBook</Title>
      <LogoWrapper>
        <Logo>
          <Icon icon="book" aria-label="book" width="60px" height="60px" />
        </Logo>
      </LogoWrapper>
      <Content>
        <Link href="/about">
          <Anchor>About</Anchor>
        </Link>
      </Content>
    </div>
  );
};

export default Main;
