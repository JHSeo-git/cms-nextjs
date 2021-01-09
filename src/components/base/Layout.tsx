import React, { ReactNode, useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { BorderLine, majorSize, zIndexValue } from '../../styles/lib/utils';
import {
  useDispatchSideMenu,
  useSideMenu,
} from '../../lib/contexts/SideMenuContext';
import storage, { keys } from '../../lib/storage';
import { useRouter } from 'next/router';
import responsive from '../../styles/lib/responsive';
import { downSideAni, upSideAni } from '../../styles/lib/animataion';

const LayoutWrapper = styled.div`
  display: flex;
`;

interface StyledProps {
  $isOpen: boolean;
}

const dimFadeIn = keyframes`
  0%{
    background-color: rgba(0, 0, 0, 0);
  }
  100%{
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const LeftSide = styled.section<StyledProps>`
  width: ${majorSize.sideMenuWidth};
  height: 100vh;
  max-width: 25rem;
  overflow-y: auto;
  border-right: ${BorderLine.normal};
  transition: transform 0.2s ease-in-out, width 0.1s ease-in-out;
  background: white;
  ${(props) =>
    !props.$isOpen &&
    css`
      width: 0;
      transform: translateX(-100%);
    `}
  ${responsive.desktop} {
    position: fixed;
    top: ${majorSize.headerHeight};
    left: 0;
    z-index: ${zIndexValue.sideMenu};

    &::after {
      content: '';
      position: fixed;
      top: 0;
      left: ${majorSize.sideMenuWidth};
      right: 0;
      bottom: 0;
      z-index: 10;
      background-color: rgba(0, 0, 0, 0.3);
      ${(props) =>
        props.$isOpen &&
        css`
          animation: ${dimFadeIn} 0.5s ease-in-out;
        `}
    }
  }
`;

const RightSide = styled.section`
  height: 100vh;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  ${responsive.desktop} {
    margin-top: ${majorSize.headerHeight};
    height: calc(100vh - ${majorSize.headerHeight});
  }
`;

interface StyledHeaderProps {
  $isSticky: boolean;
}

const HeaderWrapper = styled.header<StyledHeaderProps>`
  background: white;
  position: sticky;
  z-index: ${zIndexValue.header};
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
  ${responsive.desktop} {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    ${(props) =>
      props.$isSticky
        ? css`
            top: 0;
            animation: none;
          `
        : css`
            top: 0;
            animation: none;
          `}
  }
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
        <title>{`${title} | NextBook`}</title>
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
