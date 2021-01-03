import React, { ReactNode, useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { BorderLine } from '../../styles/lib/utils';
import {
  useDispatchSideMenu,
  useSideMenu,
} from '../../lib/contexts/SideMenuContext';
import storage, { keys } from '../../lib/storage';
import { useRouter } from 'next/router';

const LayoutWrapper = styled.div`
  display: flex;
`;

interface StyledProps {
  $isOpen: boolean;
}

const LeftSide = styled.section<StyledProps>`
  width: 18rem;
  height: 100vh;
  max-width: 25rem;
  overflow-y: auto;
  border-right: ${BorderLine.normal};
  transition: transform 0.2s ease-in-out, width 0.1s ease-in-out;
  ${(props) =>
    !props.$isOpen &&
    css`
      width: 0;
      transform: translateX(-100%);
    `}
`;
const RightSide = styled.section`
  height: 100vh;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;

interface StyledHeaderProps {
  $isSticky: boolean;
}

const downSideAni = keyframes`
  0%{
    transform: translateY(-100%);
  }
  100%{
    transform: translateY(0);
  }
`;

const upSideAni = keyframes`
  0%{
    top: 0;
  }
  100%{
    top: -100%;
  }
`;

const HeaderWrapper = styled.header<StyledHeaderProps>`
  background: white;
  position: sticky;
  z-index: 10;
  ${(props) =>
    props.$isSticky
      ? css`
          top: 0;
          animation: ${downSideAni} 0.2s ease-in-out;
        `
      : css`
          top: -100%;
          animation: ${upSideAni} 2s ease-in-out;
        `}
`;

const Main = styled.main`
  flex: 1;
`;

type Props = {
  sideMenu?: ReactNode;
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  sideMenu,
  children,
  title = 'This is the default title',
}: Props) => {
  const sideMenuState = useSideMenu();
  const sideMenuDispatch = useDispatchSideMenu();
  const { asPath } = useRouter();

  const onSideMenuClick = () => {
    if (!sideMenuState || !sideMenuDispatch) return;

    if (sideMenuState.sideMenu) {
      sideMenuDispatch({ type: 'CLOSE_SIDE_MENU' });
      storage.set(keys.sideMenu, false);
    } else {
      sideMenuDispatch({ type: 'OPEN_SIDE_MENU' });
      storage.set(keys.sideMenu, true);
    }
  };

  const toggleSideMenu = () => {
    if (!storage) return;
    if (!sideMenuDispatch) return;

    const sideMenu = storage.get(keys.sideMenu);
    if (sideMenu) {
      sideMenuDispatch({ type: 'OPEN_SIDE_MENU' });
    } else {
      sideMenuDispatch({ type: 'CLOSE_SIDE_MENU' });
    }
  };

  const [isSticky, setSticky] = useState(false);
  const [prevTop, setPrevTop] = useState(0);
  const ref = useRef<HTMLElement | null>(null);
  const handleScroll = () => {
    if (!ref.current) return;
    if (prevTop < ref.current.scrollTop) {
      setSticky(false);
    } else {
      setSticky(true);
    }
    setPrevTop(ref.current.scrollTop);
  };

  useEffect(() => {
    toggleSideMenu();
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.scrollTo(0, 0);
  }, [asPath]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LayoutWrapper>
        {sideMenu && (
          <LeftSide $isOpen={sideMenuState ? sideMenuState.sideMenu : true}>
            {sideMenu}
          </LeftSide>
        )}
        <RightSide onScroll={handleScroll} ref={ref}>
          <HeaderWrapper $isSticky={isSticky}>
            <Header
              isSideMenu={sideMenu ? true : false}
              onSideMenuClick={onSideMenuClick}
            />
          </HeaderWrapper>
          <Main>{children}</Main>
          <Footer />
        </RightSide>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
