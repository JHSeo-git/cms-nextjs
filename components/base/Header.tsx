import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Icon } from '../common/Icon';
import { BorderLine } from '../../styles/lib/utils';

const HeaderWrapper = styled.header`
  padding: 0 0.5rem;
  width: 100%;
  border-bottom: ${BorderLine.normal};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

const Anchor = styled.a`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  height: 3rem;
  transition: opacity 0.2s ease-in-out;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const Button = Anchor.withComponent('button');

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <LeftSide>
          <Button>
            <Icon icon="menu" aria-label="menu" />
          </Button>
          <Link href="/">
            <Anchor>
              <Icon icon="home" aria-label="home" />
            </Anchor>
          </Link>
        </LeftSide>
        <RightSide>
          <Link href="/about">
            <Anchor>
              <Icon icon="github" aria-label="github" />
            </Anchor>
          </Link>
          <Button>
            <Icon icon="bookmarkhollow" aria-label="bookmarkhollow" />
          </Button>
          <Anchor href="/api/users">Users API</Anchor>
        </RightSide>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
