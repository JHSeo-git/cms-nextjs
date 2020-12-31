import React from 'react';
import styled from 'styled-components';
import { PostContent } from '../../lib/meta/posts';
import HighlightWrapper from '../mdx/HighlightWrapper';

const Wrapper = styled.article`
  padding: 0.5rem 1rem;
`;

const PostTitle = styled.h1`
  padding: 2rem 0;
  text-align: center;
  margin-bottom: 1rem;
`;

interface Props {
  mdxElement: React.ReactNode;
  frontMatter: PostContent;
}

const Post = ({ mdxElement, frontMatter }: Props) => {
  return (
    <Wrapper>
      <PostTitle>{frontMatter.title}</PostTitle>
      <HighlightWrapper>{mdxElement}</HighlightWrapper>
    </Wrapper>
  );
};

export default Post;
