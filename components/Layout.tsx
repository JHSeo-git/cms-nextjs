import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Header from './base/Header';
import Footer from './base/Footer';
import SideMenu from './base/SideMenu';

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
  background: #fafafa;
  border-right: 1px solid rgba(0, 0, 0, 0.07);
`;
const RightSide = styled.section`
  height: 100vh;
  flex: 1;
  overflow-y: auto;
`;

const Main = styled.main``;

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
