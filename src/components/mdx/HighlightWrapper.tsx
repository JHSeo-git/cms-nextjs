import styled, { css } from 'styled-components';
import { useSideMenu } from '../../lib/contexts/SideMenuContext';
import responsive from '../../styles/lib/responsive';
import { zIndexValue } from '../../styles/lib/utils';

const githubCSS = css`
  /*
    github.com style (c) Vasily Polovnyov <vast@whiteants.net>
  */

  .hljs,
  code[class^='hljs'] {
    display: block;
    overflow-x: auto;
    padding: 1em;
    color: #333;
    background: #f8f8f8;
  }

  .hljs-comment,
  .hljs-quote {
    color: #998;
    font-style: italic;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-subst {
    color: #333;
    font-weight: bold;
  }

  .hljs-number,
  .hljs-literal,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-tag .hljs-attr {
    color: #008080;
  }

  .hljs-string,
  .hljs-doctag {
    color: #d14;
  }

  .hljs-title,
  .hljs-section,
  .hljs-selector-id {
    color: #900;
    font-weight: bold;
  }

  .hljs-subst {
    font-weight: normal;
  }

  .hljs-type,
  .hljs-class .hljs-title {
    color: #458;
    font-weight: bold;
  }

  .hljs-tag,
  .hljs-name,
  .hljs-attribute {
    color: #000080;
    font-weight: normal;
  }

  .hljs-regexp,
  .hljs-link {
    color: #009926;
  }

  .hljs-symbol,
  .hljs-bullet {
    color: #990073;
  }

  .hljs-built_in,
  .hljs-builtin-name {
    color: #0086b3;
  }

  .hljs-meta {
    color: #999;
    font-weight: bold;
  }

  .hljs-deletion {
    background: #fdd;
  }

  .hljs-addition {
    background: #dfd;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }
`;

const Wrapper = styled.section<{ $isSideMenuOpen: boolean }>`
  text-align: start;
  font-size: 1.125rem;
  word-break: break-word;
  word-wrap: break-word;
  font-family: 'Noto Sans KR', sans-serif;
  color: ${(props) => props.theme.GrayColor.Color800};

  // nav로 return 되고 className은 toc로 명명되어 있다.
  nav.toc {
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: white;
    padding: 0.5rem;
    width: 250px;
    height: 50vh;
    overflow-y: auto;
    border-left: 5px solid ${(props) => props.theme.ThirdaryColor.Color500};
    transition: all 0.2s ease-in-out;
    z-index: ${zIndexValue.sideMenu};

    ol,
    li {
      list-style: none;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    ol.toc-level {
      padding-left: 1rem;
    }

    a {
      color: ${(props) => props.theme.GrayColor.Color900};
      opacity: 0.5;

      &:hover {
        opacity: 1;
        text-decoration: none;
      }
    }
    ${responsive.wideScreen} {
      opacity: 0;
    }
  }

  ${responsive.tablet} {
    font-size: 1rem;
  }

  ${githubCSS};

  a {
    color: ${(props) => props.theme.PrimaryColor.Color500};
    &:hover {
      text-decoration: underline;
      color: ${(props) => props.theme.PrimaryColor.Color500};
    }
  }
  p {
    line-height: 2;
    font-weight: 400;
    color: ${(props) => props.theme.GrayColor.Color700};
  }
  strong,
  b {
    font-weight: 600;
  }
  p + p {
    margin-top: 1.5em;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.GrayColor.Color900};
    font-weight: 700;
    margin-top: 2em;
    margin-bottom: 1em;
    padding: 0;
    & code {
      font-weight: 600;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    code {
      padding-left: 0.3em;
      padding-right: 0.3em;
      padding-top: 0.1em;
      padding-bottom: 0.1em;
      border-radius: 3px;
      background: ${(props) => props.theme.GrayColor.Color100};
      border: 1px solid ${(props) => props.theme.GrayColor.Color400};
      color: ${(props) => props.theme.GrayColor.Color600};
      margin-left: 0.3em;
      margin-right: 0.3em;
    }
  }
  p,
  blockquote,
  table,
  pre {
    margin: 15px 0;
  }
  blockquote {
    margin-top: 2em;
    margin-bottom: 2em;
  }
  pre {
    margin: 0.5em 0;
    overflow: auto;
    border: 1px solid ${(props) => props.theme.GrayColor.Color100};
    border-radius: 3px;
    code {
      font-family: 'Inconsolata', Consolas, 'Ubuntu Mono', monospace;
      font-size: 0.9em;
      line-height: 1.5;
    }
  }
  li {
    line-height: 1.75;
  }
  ul,
  ol {
    list-style: disc;
    font-weight: 400;
    color: ${(props) => props.theme.GrayColor.Color700};
  }
  ul {
    padding-left: 30px;
  }
  li + li {
    margin-top: 0.25em;
  }
  ol {
    padding-left: 30px;
  }
  ol li ul:first-of-type {
    margin-top: 0px;
  }
  hr {
    border-top: 1px solid ${(props) => props.theme.GrayColor.Color300};
    margin: 15px 0;
    padding: 0;
  }
  & > h2:first-child {
    margin-top: 0;
    padding-top: 0;
  }
  & > h1:first-child {
    margin-top: 0;
    padding-top: 0;
  }
  & > h1:first-child + h2 {
    margin-top: 0;
    padding-top: 0;
  }
  & > h3:first-child,
  & > h4:first-child,
  & > h5:first-child,
  & > h6:first-child {
    margin-top: 0;
    padding-top: 0;
  }
  a:first-child h1,
  a:first-child h2,
  a:first-child h3,
  a:first-child h4,
  a:first-child h5,
  a:first-child h6 {
    margin-top: 0;
    padding-top: 0;
  }
  h1 + p,
  h2 + p,
  h3 + p,
  h4 + p,
  h5 + p,
  h6 + p,
  ul li > :first-child,
  ol li > :first-child {
    margin-top: 0;
  }
  dl {
    padding: 0;
  }
  dl dt {
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    padding: 0;
    margin: 15px 0 5px;
  }
  dl dt:first-child {
    padding: 0;
  }
  dl dt > :first-child {
    margin-top: 0;
  }
  dl dt > :last-child {
    margin-bottom: 0;
  }
  dl dd {
    margin: 0 0 15px;
    padding: 0 15px;
  }
  dl dd > :first-child {
    margin-top: 0;
  }
  dl dd > :last-child {
    margin-bottom: 0;
  }
  blockquote {
    border-left: 4px solid ${(props) => props.theme.GrayColor.Color400};
    padding: 0 15px;
    color: #777;
  }
  blockquote > :first-child {
    margin-top: 0;
  }
  blockquote > :last-child {
    margin-bottom: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 100%;
    font: inherit;
  }
  table th {
    font-weight: bold;
    border: 1px solid #ccc;
    padding: 6px 13px;
  }
  table td {
    border: 1px solid #ccc;
    padding: 6px 13px;
  }
  table tr {
    border-top: 1px solid #ccc;
    background-color: #fff;
  }
  table tr:nth-child(2n) {
    background-color: #f8f8f8;
  }
  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
    margin-top: 3em;
    margin-bottom: 3em;
    pointer-events: none;
  }

  blockquote {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .youtube {
    background: ${(props) => props.theme.GrayColor.Color50};
    border-radius: 4px;
    display: block;
    margin: auto;
    width: 768px;
    max-width: 100%;
    height: 430px;
    @include media('<768px') {
      height: 300px;
    }
  }
  .twitter-wrapper {
    display: flex;
    justify-content: center;
    height: 580px;
    align-items: center;
    blockquote {
      background: ${(props) => props.theme.GrayColor.Color50};
      border-radius: 4px;
      width: 500px;
      height: 400px;

      border-left: none;
    }
  }
  mark {
    padding: 0.25rem 0.5rem;
    background: ${(props) => props.theme.ThirdaryColor.Color500};
    color: ${(props) => props.theme.GrayColor.Color50};
    border-radius: 4px;
  }
  kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 1em Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    font-size: 11px;
    line-height: 10px;
    color: #555;
    vertical-align: middle;
    background-color: #fcfcfc;
    border: solid 1px #ccc;
    border-bottom-color: #bbb;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #bbb;
  }
  abbr[title] {
    text-decoration: underline double;
  }

  @media screen and (min-width: 769px) {
    .content .youtube {
      height: 300px;
    }
  }
`;

interface Props {
  children: React.ReactNode;
}

const HighlightWrapper = ({ children }: Props) => {
  const sideMenuState = useSideMenu();
  return (
    <Wrapper $isSideMenuOpen={sideMenuState ? sideMenuState.sideMenu : false}>
      {children}
    </Wrapper>
  );
};

export default HighlightWrapper;
