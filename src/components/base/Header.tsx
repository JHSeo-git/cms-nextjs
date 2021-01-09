import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Icon } from '../common/Icon';
import { BorderLine, majorSize } from '../../styles/lib/utils';
import config from '../../lib/meta/config';
import responsive from '../../styles/lib/responsive';

const Wrapper = styled.div`
  padding: 0 0.5rem;
  width: 100%;
  border-bottom: ${BorderLine.normal};
  ${responsive.desktop} {
    height: ${majorSize.headerHeight};
    padding: 0 1rem;
  }
`;

const Nav = styled.nav`
  height: 100%;
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

interface Props {
  isSideMenu: boolean;
  onSideMenuClick: () => void;
}

const Header = ({ isSideMenu = true, onSideMenuClick }: Props) => {
  return (
    <Wrapper>
      <Nav>
        <LeftSide>
          {isSideMenu && (
            <Button onClick={onSideMenuClick}>
              <Icon icon="menu" aria-label="menu" />
            </Button>
          )}
          <Link href="/">
            <Anchor>
              <Icon icon="home" aria-label="home" />
            </Anchor>
          </Link>
          <Link href="/about">
            <Anchor>
              <Icon icon="book" aria-label="book" />
            </Anchor>
          </Link>
        </LeftSide>
        <RightSide>
          <Anchor
            title="Github"
            href={`https://github.com/${config.github_account}`}
            target="_blank"
            rel="noopener"
          >
            <Icon icon="github" aria-label="github" />
          </Anchor>
          <Button>
            <Icon icon="bookmarkhollow" aria-label="bookmarkhollow" />
          </Button>
        </RightSide>
      </Nav>
    </Wrapper>
  );
};

export default Header;
