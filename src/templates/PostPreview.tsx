import dynamic from 'next/dynamic';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import styled from 'styled-components';
import PreviewTemplate from './PreviewTemplate';
import GlobalStyle from '../styles/global-styles';
import hljs from 'highlight.js';
import marked from 'marked';
// import matter from 'gray-matter';
// import yaml from 'js-yaml';
// import HighlightWrapper from '../components/mdx/HighlightWrapper';

const HljsWrapper = dynamic(import('../components/mdx/HighlightWrapper'));

const Title = styled.h1`
  text-align: center;
  border-bottom: ${(props) => props.theme.GrayColor.Color100};
`;

const Content = styled.div`
  padding: 0.75rem;
`;

const PostPreview = (props: PreviewTemplateComponentProps) => {
  const { entry, widgetFor } = props;
  const title = entry.getIn(['data', 'title']);

  // const body = entry.getIn(['data', 'body']);
  //const body = entry.getIn(['data', 'body']);
  const body = widgetFor('body')?.props.value;

  const renderer = new marked.Renderer();
  marked.setOptions({
    highlight: function (code, lang) {
      return hljs.highlightAuto(code, [lang]).value;
    },
    langPrefix: 'hljs',
    renderer,
  });

  return (
    <PreviewTemplate>
      <>
        <GlobalStyle />
        <Title>TTitle: {title}</Title>
        <Content>
          <HljsWrapper>
            <div dangerouslySetInnerHTML={{ __html: marked(body) }}></div>
          </HljsWrapper>
        </Content>
      </>
    </PreviewTemplate>
  );
};

export default PostPreview;
