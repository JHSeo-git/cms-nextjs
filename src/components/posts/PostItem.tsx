import React from 'react';
import styled from 'styled-components';
import { PostContent } from '../../lib/meta/posts';

const Container = styled.div`
  padding: 0.75rem;
`;

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => props.theme.GrayColor.Color900};
  margin-bottom: 0.25rem;
`;

const Date = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme.GrayColor.Color600};
`;

interface Props {
  post: PostContent;
}

const PostItem = ({ post }: Props) => {
  return (
    <Container>
      <Title>{post.title}</Title>
      <Date>{post.date}</Date>
    </Container>
  );
};

export default PostItem;
