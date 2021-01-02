import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Icon } from './Icon';
import { PostContent } from '../../lib/meta/posts';
import { CategoryContent } from '../../lib/meta/categories';
import { TextEllipsis } from '../../styles/lib/utils';
import { useRouter } from 'next/dist/client/router';

interface StyleProps {
  $collapse: boolean;
}

const Wrapper = styled.div`
  flex: 1;
`;

const Header = styled.div`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme.GrayColor.Color100};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLink = styled.a`
  font-size: 0.85rem;
  font-weight: bold;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    color: ${(props) => props.theme.PrimaryColor.Color500};
  }
`;

const AccordionButton = styled.button<StyleProps>`
  transition: all 0.1s ease-in-out;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  ${(props) =>
    !props.$collapse &&
    css`
      transform: rotate(90deg);
    `}
`;

const Content = styled.div<StyleProps>`
  display: ${(props) => (props.$collapse ? 'none' : 'block')};
  background: ${(props) => props.theme.GrayColor.Color50};
`;

const ContentLink = styled.a<{ $current: boolean }>`
  display: block;
  font-size: 0.85rem;
  padding: 0.75rem;
  padding-left: 1.75rem;
  transition: all 0.2s linear;
  ${TextEllipsis()};
  &:hover {
    text-decoration: underline;
  }
  ${(props) =>
    props.$current &&
    css`
      color: ${(props) => props.theme.PrimaryColor.Color500};
    `}
`;

interface Props {
  category: CategoryContent;
  posts: PostContent[];
  currentCategory?: string;
}

const ArrcordionCard = ({ category, posts, currentCategory }: Props) => {
  const route = useRouter();
  const slug = route.query.slug ? route.query.slug[0] : '';
  const [collapse, setCollapse] = useState(
    currentCategory ? currentCategory !== category.slug : true
  );
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setCollapse(!collapse);
  };

  useEffect(() => {
    if (currentCategory) {
      setCollapse(currentCategory !== category.slug);
    }
  }, [currentCategory]);

  return (
    <Wrapper>
      <Header>
        <Link
          href={'/posts/categories/[...slug]'}
          as={`/posts/categories/${category.slug}`}
        >
          <HeaderLink>{category.name}</HeaderLink>
        </Link>
        <AccordionButton $collapse={collapse} onClick={onClick}>
          <Icon icon="arrowright" aria-label="arrowright" />
        </AccordionButton>
      </Header>

      <Content $collapse={collapse}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={'/post/[...slug]'}
            as={`/post/${post.slug}`}
          >
            <ContentLink $current={slug === post.slug}>
              {post.title}
            </ContentLink>
          </Link>
        ))}
      </Content>
    </Wrapper>
  );
};

export default ArrcordionCard;
