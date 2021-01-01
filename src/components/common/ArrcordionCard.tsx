import React, { useState } from 'react';
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
  padding: 0.75rem 0 0.75rem 1rem;
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
  padding: 0 1rem;
  transition: all 0.2s linear;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  ${(props) =>
    !props.$collapse &&
    css`
      transform: rotateX(180deg) rotateY(180deg);
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
  let slug = '';
  if (route.query.slug) {
    slug = route.query.slug[0];
  }

  const [toggle, setToggle] = useState(
    currentCategory ? currentCategory !== category.slug : true
  );
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setToggle(!toggle);
  };
  return (
    <Wrapper>
      <Header>
        <Link
          href={'/posts/categories/[...slug]'}
          as={`/posts/categories/${category.slug}`}
        >
          <HeaderLink>{category.name}</HeaderLink>
        </Link>
        <AccordionButton $collapse={toggle} onClick={onClick}>
          <Icon icon="arrowdown" aria-label="arrowdown" />
        </AccordionButton>
      </Header>

      <Content $collapse={toggle}>
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
