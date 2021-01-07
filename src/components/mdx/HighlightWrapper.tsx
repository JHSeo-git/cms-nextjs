import styled from 'styled-components';
import 'highlight.js/styles/github.css';

const Wrapper = styled.section`
  text-align: start;
  font-size: 1.125rem;
  word-break: break-word;
  word-wrap: break-word;
  font-family: 'Noto Sans KR', sans-serif;
  color: ${(props) => props.theme.GrayColor.Color800};
  a {
    color: ${(props) => props.theme.PrimaryColor.Color500};
    &:hover {
      text-decoration: underline;
      color: ${(props) => props.theme.PrimaryColor.Color500};
    }
  }
  p {
    line-height: 1.75;
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
      padding: 1em;
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

  @media (min-width: 769px) {
    .content h2,
    .content h3,
    .content h4,
    .content h5 {
      position: relative;
    }

    .content h2::before {
      display: block;
    }
  }
`;

// const Wrapper = styled.section`
//   &&& {
//     h1,
//     h2,
//     h3,
//     h4,
//     h5,
//     h6 {
//       margin-top: 24px;
//       margin-bottom: 16px;
//       font-weight: 600;
//       line-height: 1.25;
//     }

//     h1 {
//       padding-bottom: 0.3em;
//       font-size: 2em;
//       border-bottom: 1px solid #eee;
//     }

//     h2 {
//       padding-bottom: 0.3em;
//       font-size: 1.5em;
//       border-bottom: 1px solid #eee;
//     }

//     h3 {
//       font-size: 1.25em;
//     }

//     h4 {
//       font-size: 1em;
//     }

//     h5 {
//       font-size: 0.875em;
//     }

//     h6 {
//       font-size: 0.85em;
//       color: #777;
//     }

//     p {
//       margin-top: 0;
//       margin-bottom: 10px;
//       line-height: 1.5;
//     }

//     p,
//     blockquote,
//     ul,
//     ol,
//     dl,
//     table,
//     pre {
//       margin-top: 0;
//       margin-bottom: 16px;
//     }

//     blockquote {
//       margin: 0;
//     }

//     strong {
//       font-weight: inherit;
//     }
//     strong {
//       font-weight: bolder;
//     }

//     a {
//       background-color: transparent;
//       -webkit-text-decoration-skip: objects;
//     }
//     a:active,
//     a:hover {
//       outline-width: 0;
//     }
//     a {
//       color: #4078c0;
//       text-decoration: none;
//     }
//     a:hover,
//     a:active {
//       text-decoration: underline;
//     }
//     a:not([href]) {
//       color: inherit;
//       text-decoration: none;
//     }

//     img {
//       border-style: none;
//     }
//     img {
//       max-width: 100%;
//       box-sizing: content-box;
//       background-color: #fff;
//     }
//     svg:not(:root) {
//       overflow: hidden;
//     }

//     hr {
//       box-sizing: content-box;
//       height: 0;
//       overflow: visible;
//     }
//     hr {
//       height: 0;
//       margin: 15px 0;
//       overflow: hidden;
//       background: transparent;
//       border: 0;
//       border-bottom: 1px solid #eee;
//     }
//     hr::before {
//       display: table;
//       content: '';
//     }
//     hr::after {
//       display: table;
//       clear: both;
//       content: '';
//     }
//     hr {
//       height: 0.25em;
//       padding: 0;
//       margin: 24px 0;
//       background-color: #e7e7e7;
//       border: 0;
//     }

//     input {
//       font: inherit;
//       margin: 0;
//     }
//     input {
//       overflow: visible;
//     }
//     [type='checkbox'] {
//       box-sizing: border-box;
//       padding: 0;
//     }
//     input {
//       font-family: inherit;
//       font-size: inherit;
//       line-height: inherit;
//     }
//     input {
//       -webkit-font-feature-settings: 'liga' 0;
//       font-feature-settings: 'liga' 0;
//     }

//     table {
//       border-spacing: 0;
//       border-collapse: collapse;
//     }

//     td,
//     th {
//       padding: 0;
//     }

//     ul,
//     ol {
//       padding-left: 0;
//       margin-top: 0;
//       margin-bottom: 0;
//     }

//     ol ol,
//     ul ol {
//       list-style-type: lower-roman;
//     }

//     ul ul ol,
//     ul ol ol,
//     ol ul ol,
//     ol ol ol {
//       list-style-type: lower-alpha;
//     }

//     dd {
//       margin-left: 0;
//     }

//     ul,
//     ol {
//       padding-left: 2em;
//     }

//     ul ul,
//     ul ol,
//     ol ol,
//     ol ul {
//       margin-top: 0;
//       margin-bottom: 0;
//     }

//     li > p {
//       margin-top: 16px;
//     }

//     li + li {
//       margin-top: 0.25em;
//     }

//     dl {
//       padding: 0;
//     }

//     dl dt {
//       padding: 0;
//       margin-top: 16px;
//       font-size: 1em;
//       font-style: italic;
//       font-weight: bold;
//     }

//     dl dd {
//       padding: 0 16px;
//       margin-bottom: 16px;
//     }

//     table {
//       display: block;
//       width: 100%;
//       overflow: auto;
//     }

//     table th {
//       font-weight: bold;
//     }

//     table th,
//     table td {
//       padding: 6px 13px;
//       border: 1px solid #ddd;
//     }

//     table tr {
//       background-color: #fff;
//       border-top: 1px solid #ccc;
//     }

//     table tr:nth-child(2n) {
//       background-color: #f8f8f8;
//     }

//     &::before {
//       display: table;
//       content: '';
//     }

//     &::after {
//       display: table;
//       clear: both;
//       content: '';
//     }
//     & > *:first-child {
//       margin-top: 0 !important;
//     }

//     & > *:last-child {
//       margin-bottom: 0 !important;
//     }

//     kbd {
//       display: inline-block;
//       padding: 3px 5px;
//       font: 11px Consolas, 'Liberation Mono', Menlo, Courier, monospace;
//       font-size: 11px;
//       line-height: 10px;
//       color: #555;
//       vertical-align: middle;
//       background-color: #fcfcfc;
//       border: solid 1px #ccc;
//       border-bottom-color: #bbb;
//       border-radius: 3px;
//       box-shadow: inset 0 -1px 0 #bbb;
//     }

//     code,
//     kbd,
//     pre {
//       font-family: monospace, monospace;
//       font-size: 1em;
//     }
//     blockquote {
//       padding: 0 1em;
//       color: #777;
//       border-left: 0.25em solid #ddd;
//     }

//     blockquote > :first-child {
//       margin-top: 0;
//     }

//     blockquote > :last-child {
//       margin-bottom: 0;
//     }
//     code {
//       font-family: inherit;
//       font-size: 12px;
//     }

//     pre {
//       margin-top: 0;
//       margin-bottom: 0;
//       font: 12px Consolas, 'Liberation Mono', Menlo, Courier, monospace;
//     }

//     code {
//       padding: 0;
//       padding-top: 0.2em;
//       padding-bottom: 0.2em;
//       margin: 0;
//       font-size: 85%;
//       background-color: rgba(0, 0, 0, 0.04);
//       border-radius: 3px;
//     }

//     code::before,
//     code::after {
//       letter-spacing: -0.2em;
//       content: '';
//     }

//     pre {
//       word-wrap: normal;
//     }

//     pre > code {
//       padding: 0;
//       margin: 0;
//       font-size: 100%;
//       word-break: normal;
//       white-space: pre;
//       background: transparent;
//       border: 0;
//     }

//     pre {
//       padding: 16px;
//       overflow: auto;
//       font-size: 85%;
//       line-height: 1.45;
//       background-color: #f7f7f7;
//       border-radius: 3px;
//       margin: 15px 0;
//     }

//     pre code {
//       display: inline;
//       max-width: auto;
//       padding: 0;
//       margin: 0;
//       overflow: visible;
//       line-height: inherit;
//       word-wrap: normal;
//       background-color: transparent;
//       border: 0;
//     }

//     pre code::before,
//     pre code::after {
//       content: normal;
//     }
//     mark {
//       padding: 0.25rem 0.5rem;
//       background: ${(props) => props.theme.ThirdaryColor.Color500};
//       color: ${(props) => props.theme.GrayColor.Color50};
//       border-radius: 4px;
//     }
//   }
// `;

interface Props {
  children: React.ReactNode;
}

const HighlightWrapper = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default HighlightWrapper;
