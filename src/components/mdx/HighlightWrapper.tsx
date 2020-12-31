import React from 'react';
import styled from 'styled-components';
import 'highlight.js/styles/github.css';

const Wrapper = styled.section`
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h1 {
    font-size: 32px;
    font-weight: 600;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
  }

  h4 {
    font-size: 16px;
    font-weight: 600;
  }

  h5 {
    font-size: 14px;
    font-weight: 600;
  }

  h6 {
    font-size: 12px;
    font-weight: 600;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  h1 .octicon-link,
  h2 .octicon-link,
  h3 .octicon-link,
  h4 .octicon-link,
  h5 .octicon-link,
  h6 .octicon-link {
    color: #000;
    vertical-align: middle;
    visibility: hidden;
  }

  h1:hover .anchor,
  h2:hover .anchor,
  h3:hover .anchor,
  h4:hover .anchor,
  h5:hover .anchor,
  h6:hover .anchor {
    text-decoration: none;
  }

  h1:hover .anchor .octicon-link,
  h2:hover .anchor .octicon-link,
  h3:hover .anchor .octicon-link,
  h4:hover .anchor .octicon-link,
  h5:hover .anchor .octicon-link,
  h6:hover .anchor .octicon-link {
    visibility: visible;
  }

  h1 {
    padding-bottom: 0.3em;
    font-size: 2em;
    border-bottom: 1px solid #eee;
  }

  h2 {
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid #eee;
  }

  h3 {
    font-size: 1.25em;
  }

  h4 {
    font-size: 1em;
  }

  h5 {
    font-size: 0.875em;
  }

  h6 {
    font-size: 0.85em;
    color: #777;
  }

  p {
    margin-top: 0;
    margin-bottom: 10px;
    line-height: 1.5;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre {
    margin-top: 0;
    margin-bottom: 16px;
  }

  blockquote {
    margin: 0;
  }

  strong {
    font-weight: inherit;
  }
  strong {
    font-weight: bolder;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  a:active,
  a:hover {
    outline-width: 0;
  }
  a {
    color: #4078c0;
    text-decoration: none;
  }
  a:hover,
  a:active {
    text-decoration: underline;
  }
  a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  img {
    border-style: none;
  }
  img {
    max-width: 100%;
    box-sizing: content-box;
    background-color: #fff;
  }
  svg:not(:root) {
    overflow: hidden;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  hr {
    height: 0;
    margin: 15px 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #ddd;
  }
  hr::before {
    display: table;
    content: '';
  }
  hr::after {
    display: table;
    clear: both;
    content: '';
  }

  hr {
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: #e7e7e7;
    border: 0;
  }

  input {
    font: inherit;
    margin: 0;
  }
  input {
    overflow: visible;
  }
  [type='checkbox'] {
    box-sizing: border-box;
    padding: 0;
  }
  input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  td,
  th {
    padding: 0;
  }

  ul,
  ol {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  ol ol,
  ul ol {
    list-style-type: lower-roman;
  }

  ul ul ol,
  ul ol ol,
  ol ul ol,
  ol ol ol {
    list-style-type: lower-alpha;
  }

  dd {
    margin-left: 0;
  }

  ul,
  ol {
    padding-left: 2em;
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  li > p {
    margin-top: 16px;
  }

  li + li {
    margin-top: 0.25em;
  }

  dl {
    padding: 0;
  }

  dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: bold;
  }

  dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  table {
    display: block;
    width: 100%;
    overflow: auto;
  }

  table th {
    font-weight: bold;
  }

  table th,
  table td {
    padding: 6px 13px;
    border: 1px solid #ddd;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #ccc;
  }

  table tr:nth-child(2n) {
    background-color: #f8f8f8;
  }

  input {
    -webkit-font-feature-settings: 'liga' 0;
    font-feature-settings: 'liga' 0;
  }

  ::before {
    display: table;
    content: '';
  }

  ::after {
    display: table;
    clear: both;
    content: '';
  }
  > *:first-child {
    margin-top: 0 !important;
  }

  > *:last-child {
    margin-bottom: 0 !important;
  }

  kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px Consolas, 'Liberation Mono', Menlo, Courier, monospace;
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

  hr {
    border-bottom-color: #eee;
  }
  code,
  kbd,
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  blockquote {
    padding: 0 1em;
    color: #777;
    border-left: 0.25em solid #ddd;
  }

  blockquote > :first-child {
    margin-top: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }
  code {
    font-family: inherit;
    font-size: 12px;
  }

  pre {
    margin-top: 0;
    margin-bottom: 0;
    font: 12px Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  }

  code {
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 3px;
  }

  code::before,
  code::after {
    letter-spacing: -0.2em;
    content: '';
  }

  pre {
    word-wrap: normal;
  }

  pre > code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f7f7f7;
    border-radius: 3px;
  }

  pre code {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }

  pre code::before,
  pre code::after {
    content: normal;
  }
  mark {
    padding: 0.25rem 0.5rem;
    background: ${(props) => props.theme.ThirdaryColor.Color500};
    color: ${(props) => props.theme.GrayColor.Color50};
    border-radius: 4px;
  }
`;

//content: '\00a0';

//   .octicon {
//     vertical-align: text-bottom;
//   }

//   .anchor {
//     float: left;
//     padding-right: 4px;
//     margin-left: -20px;
//     line-height: 1;
//   }

//   .anchor:focus {
//     outline: none;
//   }

//   .highlight {
//     margin-bottom: 16px;
//   }

//   .highlight pre {
//     margin-bottom: 0;
//     word-break: normal;
//   }

//   .highlight pre,

interface Props {
  children: React.ReactNode;
}

const HighlightWrapper = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default HighlightWrapper;
