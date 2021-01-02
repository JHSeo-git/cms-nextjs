import React, { ReactNode, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { BorderLine } from '../../styles/lib/utils';
import {
  useDispatchSideMenu,
  useSideMenu,
} from '../../lib/contexts/SideMenuContext';
import storage, { keys } from '../../lib/storage';

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
`;

const Main = styled.main`
  padding: 0.5rem;
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

  useEffect(() => {
    if (!storage) return;
    if (!sideMenuDispatch) return;

    const sideMenu = storage.get(keys.sideMenu);
    if (sideMenu) {
      sideMenuDispatch({ type: 'OPEN_SIDE_MENU' });
    } else {
      sideMenuDispatch({ type: 'CLOSE_SIDE_MENU' });
    }
  }, []);

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
        <RightSide>
          <Header
            isSideMenu={sideMenu ? true : false}
            onSideMenuClick={onSideMenuClick}
          />
          <Main>{children}</Main>
          <Footer />
        </RightSide>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
