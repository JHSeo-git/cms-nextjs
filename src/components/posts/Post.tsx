import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { PostContent } from '../../lib/meta/posts';
import { Icon } from '../common/Icon';
import HighlightWrapper from '../mdx/HighlightWrapper';

const Wrapper = styled.section`
  padding: 0.5rem 1rem;
  position: relative;
  display: flex;
`;

const Hovering = styled.div`
  position: fixed;
  top: 5rem;
  right: 3rem;
  background: white;
  border: 1px solid black;
  border-radius: 3px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  z-index: 10;
`;

const MoveButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  transition: all 0.2s ease-in-out;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const Content = styled.article`
  flex: 1;
`;

const PostTitle = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;

interface Props {
  mdxElement: React.ReactNode;
  frontMatter: PostContent;
  nextSlug: string;
  prevSlug: string;
}

const Post = ({ mdxElement, frontMatter, nextSlug, prevSlug }: Props) => {
  return (
    <Wrapper>
      <Content>
        <PostTitle>{frontMatter.title}</PostTitle>
        <HighlightWrapper>{mdxElement}</HighlightWrapper>
      </Content>
      <Hovering>
        {prevSlug !== '' && (
          <Link href="/post/[...slug]" as={`/post/${prevSlug}`}>
            <MoveButton>
              <Icon icon="arrowleft" aria-label="arrowleft" />
            </MoveButton>
          </Link>
        )}
        {nextSlug !== '' && (
          <Link href="/post/[...slug]" as={`/post/${nextSlug}`}>
            <MoveButton>
              <Icon icon="arrowright" aria-label="arrowright" />
            </MoveButton>
          </Link>
        )}
      </Hovering>
    </Wrapper>
  );
};

export default Post;
