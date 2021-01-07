import { useEffect, useState } from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import styled from 'styled-components';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import HighlightWrapper from '../components/mdx/HighlightWrapper';
import PreviewTemplate from './PreviewTemplate';

const Title = styled.h1`
  text-align: center;
  border-bottom: ${(props) => props.theme.GrayColor.Color100};
`;

const PostPreview = (props: PreviewTemplateComponentProps) => {
  const { entry } = props;
  const title = entry.getIn(['data', 'title']);
  const body = entry.getIn(['data', 'body']);

  const [renderBody, setRenderBody] = useState<React.ReactNode | null>(null);

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

    const mdxSource = await renderToString(content, {
      mdxOptions: {
        rehypePlugins: [require('rehype-highlight')],
      },
    });

    setRenderBody(hydrate(mdxSource));
  };

  useEffect(() => {
    styledBody(body);
  }, []);

  return (
    <PreviewTemplate>
      <Title>TTitle: {title}</Title>
      <HighlightWrapper>{renderBody}</HighlightWrapper>
    </PreviewTemplate>
  );
};

export default PostPreview;
