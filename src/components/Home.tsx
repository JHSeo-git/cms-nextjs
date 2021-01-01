import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { CategoryContent } from '../lib/meta/categories';
import config from '../lib/meta/config';
import { BoxShadow, DescriptionBox } from '../styles/lib/utils';
import { Icon } from './common/Icon';
import Title from './common/Title';

const LogoWrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.span`
  transition: transform 0.1s linear;
  svg,
  path {
    fill: ${(props) => props.theme.PrimaryColor.Color500};
  }
  &:hover {
    transform: translateY(-10%);
  }
`;

const Description = styled.p`
  margin-top: 1rem;
  ${DescriptionBox()}
`;

const CategoryItems = styled.ul`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
`;
const CategoryItem = styled.li`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${BoxShadow(1)};
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    ${BoxShadow(2)};
  }
  user-select: none;
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
      <LogoWrapper>
        <Logo>
          <Icon
            icon="repository"
            aria-label="repository"
            width="60px"
            height="60px"
          />
        </Logo>
      </LogoWrapper>
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
      <Description>this page use NEXTJS, Netlify-CMS, React</Description>
    </>
  );
};

export default Home;
