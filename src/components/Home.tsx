import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { CategoryContent } from '../lib/meta/categories';
import config from '../lib/meta/config';
import { BoxShadow, DescriptionBox } from '../styles/lib/utils';
import { Icon } from './common/Icon';
import Title from './common/Title';

const Logo = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg,
  path {
    fill: ${(props) => props.theme.GrayColor.Color700};
  }
`;

const Description = styled.p`
  margin-top: 1rem;
  ${DescriptionBox()}
`;

const CategoryItems = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CategoryItem = styled.li`
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  ${BoxShadow(1)};
  &:hover {
    transform: scale(1.01);
  }
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  user-select: none;
  width: 20rem;
`;
const CategoryIcon = styled.span`
  svg,
  path {
    color: ${(props) => props.theme.GrayColor.Color700};
  }
`;
const Category = styled.h4`
  font-weight: bold;
  color: ${(props) => props.theme.GrayColor.Color700};
`;

interface Props {
  categories: CategoryContent[];
}

const Home = ({ categories }: Props) => {
  return (
    <>
      <Logo>
        <Icon
          icon="repository"
          aria-label="repository"
          width="60px"
          height="60px"
        />
        <Title align="center">{config.site_title}</Title>
      </Logo>
      <CategoryItems>
        {categories.map((category) => (
          <Link
            key={category.slug}
            href="/posts/categories/[...slug]"
            as={`/posts/categories/${category.slug}`}
          >
            <CategoryItem>
              <CategoryIcon>
                <Icon icon="box" aria-label="box" />
              </CategoryIcon>
              <Category>{category.name}</Category>
            </CategoryItem>
          </Link>
        ))}
      </CategoryItems>
      <Description>this page use NEXTJS, Netlify-CMS, React</Description>
    </>
  );
};

export default Home;
