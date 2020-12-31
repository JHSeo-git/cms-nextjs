import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu';
import { BorderLine } from '../../styles/lib/utils';

type Props = {
  children?: ReactNode;
  title?: string;
};

const LayoutWrapper = styled.div`
  display: flex;
`;

const LeftSide = styled.section`
  width: 25rem;
  height: 100vh;
  max-width: 25rem;
  overflow-y: auto;
  border-right: ${BorderLine.normal};
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

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <LayoutWrapper>
      <LeftSide>
        <SideMenu />
      </LeftSide>
      <RightSide>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </RightSide>
    </LayoutWrapper>
  </div>
);

export default Layout;
