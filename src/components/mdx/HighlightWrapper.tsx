import styled, { css } from 'styled-components';
import { useSideMenu } from '../../lib/contexts/SideMenuContext';
import { useTOC } from '../../lib/contexts/TOCContext';
import { githubCSS } from '../../styles/lib/markdown';
import responsive, { BreakPoint } from '../../styles/lib/responsive';
import { majorSize, zIndexValue } from '../../styles/lib/utils';

interface StyledProps {
  $isSideMenuOpen: boolean;
  $currentTOCId: string;
}

const Wrapper = styled.section<StyledProps>`
  text-align: start;
  font-size: 1.125rem;
  word-break: break-word;
  word-wrap: break-word;
  font-family: 'Noto Sans KR', sans-serif;
  color: ${(props) => props.theme.GrayColor.Color800};
  position: relative;

  // nav로 return 되고 className은 toc로 명명되어 있다.
  nav.toc {
    position: sticky;
    top: ${majorSize.headerHeight};
    left: 100%;
    background: white;
    width: 270px;
    height: 0;
    overflow-y: visible;

    transition: all 0.2s ease-in-out;
    transform: translateX(calc(100% + 2rem));
    z-index: ${zIndexValue.sideMenu};

    ol,
    li {
      list-style: none;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    ol {
      &.toc-level {
        padding-left: 1rem;

        &.toc-level-1 {
          max-height: 50vh;
          padding-right: 1rem;
          padding-left: 1rem;
          max-height: 70vh;
          overflow-y: auto;
          border-left: 3px solid
            ${(props) => props.theme.ThirdaryColor.Color500};
        }
      }
    }

    a {
      display: inline-block;
      color: ${(props) => props.theme.GrayColor.Color900};
      opacity: 0.5;
      transition: all 0.1s ease-in-out;

      &:hover {
        opacity: 1;
        text-decoration: none;
      }

      &[href='${(props) => props.$currentTOCId}'] {
        transform: scale(1.1);
        opacity: 1;
      }
    }

    ${(props) =>
      props.$isSideMenuOpen
        ? css`
            ${responsive.custom(BreakPoint.wideScreen, props.$isSideMenuOpen)} {
              opacity: 0;
              height: 0;
              padding: 0;
            }
          `
        : css`
            ${responsive.wideScreen} {
              opacity: 0;
              height: 0;
              padding: 0;
            }
          `}
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
  const currentTOC = useTOC();
  return (
    <Wrapper
      $isSideMenuOpen={sideMenuState ? sideMenuState.sideMenu : false}
      $currentTOCId={currentTOC?.tocId ? currentTOC.tocId : ''}
    >
      {children}
    </Wrapper>
  );
};

export default HighlightWrapper;
