import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { CategoryContent } from '../lib/meta/categories';
import config from '../lib/meta/config';
import { BoxShadow } from '../styles/lib/utils';
import { Icon } from './common/Icon';
import Title from './common/Title';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    background-color: ${(props) => props.theme.GrayColor.Color200};
    transform: skew(-20deg);
    transform-origin: left top;
    z-index: -1;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -20%;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.GrayColor.Color100};
    transform: skew(-20deg);
    transform-origin: right top;
    z-index: -1;
  }
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
  background: white;
  ${BoxShadow(1)};
  &:hover {
    transform: scale(1.05);
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
  margin-right: 0.5rem;
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
    <Wrapper>
      <Title align="center">{config.site_title}</Title>
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
    </Wrapper>
  );
};

export default Home;
