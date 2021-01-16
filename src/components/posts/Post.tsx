import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';
import { PostContent } from '../../lib/meta/posts';
import responsive, { BreakPoint } from '../../styles/lib/responsive';
import { BoxShadow } from '../../styles/lib/utils';
import { Icon } from '../common/Icon';
import HighlightWrapper from '../mdx/HighlightWrapper';

const Wrapper = styled.section`
  width: ${`${BreakPoint.tablet}px`};
  margin: 0 auto;
  position: relative;
  ${responsive.tablet} {
    width: 100%;
    padding: 0.5rem 1.5rem;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const MoveButton = styled.button`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border: 1px solid ${(props) => props.theme.GrayColor.Color100};
  padding: 1rem;
  ${BoxShadow(1)};
  &:hover {
    border: 1px solid ${(props) => props.theme.PrimaryColor.Color500};
  }

  & + & {
    margin-left: 1rem;
  }
`;

const MoveButtonContent = styled.div<{ $isFlexEnd?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${(props) =>
    props.$isFlexEnd &&
    css`
      align-items: flex-end;
    `};
`;

const MoveButtonLabel = styled.span`
  font-size: 0.5rem;
  color: ${(props) => props.theme.GrayColor.Color500};
`;

const MoveButtonName = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.GrayColor.Color900};
`;

const Content = styled.article`
  flex: 1;
`;

const PostTitle = styled.header`
  text-align: center;
  padding: 2rem 0;
  margin: 2.5rem 0 5rem;
  font-size: 3rem;
  font-weight: bold;
`;

interface Props {
  mdxElement: React.ReactNode;
  frontMatter: PostContent;
  nextPost: PostContent | null;
  prevPost: PostContent | null;
}

const Post = ({ mdxElement, frontMatter, nextPost, prevPost }: Props) => {
  return (
    <Wrapper>
      <Content>
        <PostTitle>{frontMatter.title}</PostTitle>
        <HighlightWrapper>{mdxElement}</HighlightWrapper>
      </Content>
      <ButtonWrapper>
        {prevPost && (
          <Link href="/post/[...slug]" as={`/post/${prevPost.slug}`}>
            <MoveButton>
              <Icon icon="arrowleft" aria-label="arrowleft" />
              <MoveButtonContent $isFlexEnd={true}>
                <MoveButtonLabel>Prev</MoveButtonLabel>
                <MoveButtonName>{prevPost.title}</MoveButtonName>
              </MoveButtonContent>
            </MoveButton>
          </Link>
        )}
        {nextPost && (
          <Link href="/post/[...slug]" as={`/post/${nextPost.slug}`}>
            <MoveButton>
              <MoveButtonContent>
                <MoveButtonLabel>Next</MoveButtonLabel>
                <MoveButtonName>{nextPost.title}</MoveButtonName>
              </MoveButtonContent>
              <Icon icon="arrowright" aria-label="arrowright" />
            </MoveButton>
          </Link>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Post;
