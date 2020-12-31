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
  /* Syntax highlighting */
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata,
  .token.plain-text {
    color: #6a737d;
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword,
  .token.operator {
    color: #d73a49;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #22863a;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #032f62;
  }

  .token.function,
  .token.class-name {
    color: #6f42c1;
  }

  /* language-specific */

  /* JSX */
  .language-jsx .token.punctuation,
  .language-jsx .token.tag .token.punctuation,
  .language-jsx .token.tag .token.script,
  .language-jsx .token.plain-text {
    color: #24292e;
  }

  .language-jsx .token.tag .token.attr-name {
    color: #6f42c1;
  }

  .language-jsx .token.tag .token.class-name {
    color: #005cc5;
  }

  .language-jsx .token.tag .token.script-punctuation,
  .language-jsx .token.attr-value .token.punctuation:first-child {
    color: #d73a49;
  }

  .language-jsx .token.attr-value {
    color: #032f62;
  }

  .language-jsx span[class='comment'] {
    color: pink;
  }

  /* HTML */
  .language-html .token.tag .token.punctuation {
    color: #24292e;
  }

  .language-html .token.tag .token.attr-name {
    color: #6f42c1;
  }

  .language-html .token.tag .token.attr-value,
  .language-html
    .token.tag
    .token.attr-value
    .token.punctuation:not(:first-child) {
    color: #032f62;
  }

  /* CSS */
  .language-css .token.selector {
    color: #6f42c1;
  }

  .language-css .token.property {
    color: #005cc5;
  }
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
