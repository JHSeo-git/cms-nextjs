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
import { useTOC, useDispatchTOC } from '../../lib/contexts/TOCContext';
import storage, { keys } from '../../lib/storage';
import { useRouter } from 'next/router';
import responsive, {
  BreakPoint,
  isBreakdown,
} from '../../styles/lib/responsive';
import { downSideAni, upSideAni } from '../../styles/lib/animataion';
import useStickyScroll from '../../lib/hook/useStickyScroll';
import useTOCItemList from '../../lib/hook/useTOCItemList';

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

    /* &::after {
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
    } */
  }
`;

const LeftOutSide = styled.div`
  ${responsive.desktop} {
    position: fixed;
    top: 0;
    left: ${majorSize.sideMenuWidth};
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.3);
    animation: ${dimFadeIn} 0.5s ease-in-out;
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
  const tocDispatch = useDispatchTOC();
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

  const initSideMenu = () => {
    if (!storage) return;
    if (!sideMenuDispatch) return;

    const sideMenu = storage.get(keys.sideMenu);
    if (sideMenu) {
      sideMenuDispatch({ type: 'OPEN_SIDE_MENU' });
    } else {
      sideMenuDispatch({ type: 'CLOSE_SIDE_MENU' });
    }
  };

  const ref = useRef<HTMLElement | null>(null);
  const [isSticky, handleScroll] = useStickyScroll(ref);

  const [tocMap] = useTOCItemList();
  const closeSideMenu = () => {
    if (!sideMenuDispatch) return;

    sideMenuDispatch({ type: 'CLOSE_SIDE_MENU' });
  };

  const [currentHeading, setCurrentHeading] = useState('');
  const handleScrollTOC = () => {
    if (!tocMap) return;
    if (!document.body) return;
    if (!ref?.current) return;
    for (let i = tocMap.length - 1; i >= 0; i--) {
      const pos = tocMap[i];
      // console.log(pos);
      if (pos.top < ref.current.scrollTop) {
        if (pos.id === currentHeading) return;
        setCurrentHeading(pos.id);
        if (!tocDispatch) return;
        tocDispatch({ type: 'SET_TOC_ID', payload: pos.id });
        return;
      }
    }
  };

  useEffect(() => {
    initSideMenu();
  }, []);

  useEffect(() => {
    const hashFromUrl = asPath.match(/#([a-z0-9]+[-]*[a-z0-9]+)/gi)?.toString();
    if (tocDispatch && hashFromUrl) {
      tocDispatch({ type: 'SET_TOC_ID', payload: hashFromUrl });
    }

    const breakdownFlag = isBreakdown('width', BreakPoint.desktop);
    if (breakdownFlag) {
      closeSideMenu();
    }

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
            {sideMenuState?.sideMenu && <LeftOutSide onClick={closeSideMenu} />}
          </LeftSide>
        )}
        <RightSide
          onScroll={() => {
            handleScroll();
            handleScrollTOC();
          }}
          ref={ref}
        >
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
