import React from 'react';
import styled from 'styled-components';
import { PostContent } from '../../lib/meta/posts';
import PostItem from './PostItem';

const List = styled.ul``;

const Item = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.GrayColor.Color100};
  }
`;

interface Props {
  posts: PostContent[];
}

const PostList = ({ posts }: Props) => {
  return (
    <List>
      {posts.map((post) => (
        <Item key={post.slug}>
          <PostItem post={post} />
        </Item>
      ))}
    </List>
  );
};

export default PostList;
