import React from 'react';
import styled from 'styled-components';
import { PostContent } from '../../lib/meta/posts';
import PostItem from './PostItem';

const List = styled.ul`
  padding: 2rem;
`;

const Item = styled.li``;

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
