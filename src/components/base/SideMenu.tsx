// import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';
import { CategoryContent } from '../../lib/meta/categories';
import { PostContent } from '../../lib/meta/posts';
import ArrcordionCard from '../common/ArrcordionCard';

const Header = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.h2`
  color: ${(props) => props.theme.GrayColor.Color900};
`;

const Content = styled.main``;

interface Props {
  categories: CategoryContent[];
  posts: PostContent[];
  currentCategory?: string;
}

const SideMenu = ({ categories, posts, currentCategory }: Props) => {
  return (
    <>
      <Header>
        <HeaderText>Follow Me</HeaderText>
      </Header>
      <Content>
        {categories?.map((category) => (
          <ArrcordionCard
            key={category.slug}
            category={category}
            currentCategory={currentCategory}
            posts={posts.filter((post) => post.category === category.slug)}
          />
        ))}
      </Content>
    </>
  );
};

export default SideMenu;
