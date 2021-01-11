import { useEffect, useState } from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import styled from 'styled-components';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { MdxRemote } from 'next-mdx-remote/types';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import PreviewTemplate from './PreviewTemplate';
import HighlightWrapper from '../components/mdx/HighlightWrapper';
import GlobalStyle from '../styles/global-styles';

const Title = styled.h1`
  text-align: center;
  border-bottom: ${(props) => props.theme.GrayColor.Color100};
`;

const Content = styled.div`
  padding: 0.75rem;
`;

const RenderHydrate = ({ source }: { source: MdxRemote.Source }) => {
  const body = hydrate(source);

  return (
    <HighlightWrapper>
      <Content>{body}</Content>
    </HighlightWrapper>
  );
};

const PostPreview = (props: PreviewTemplateComponentProps) => {
  const { entry, widgetFor } = props;
  const title = entry.getIn(['data', 'title']);
  // const body = entry.getIn(['data', 'body']);
  const body = entry.getIn(['widgets', 'body']);
  const bodyWidget = widgetFor('body');

  const [renderBody, setRenderBody] = useState<MdxRemote.Source | null>(null);

  useEffect(() => {
    const styledBody = async (postContent: string) => {
      const { content } = matter(postContent, {
        engines: {
          yaml: (s) =>
            yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }) as Record<
              string,
              unknown
            >,
        },
      });

      const mdxSource: MdxRemote.Source = await renderToString(content, {
        mdxOptions: {
          rehypePlugins: [require('rehype-highlight')],
        },
      });

      return mdxSource;
    };

    if (!body) return;
    styledBody(body).then((source) => {
      setRenderBody(source);
    });
  }, [bodyWidget]);

  return (
    <PreviewTemplate>
      <>
        <GlobalStyle />
        <Title>TTitle: {title}</Title>
        {renderBody && <RenderHydrate source={renderBody} />}
      </>
    </PreviewTemplate>
  );
};

export default PostPreview;
