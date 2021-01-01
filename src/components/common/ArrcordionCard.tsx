import React, { useState } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Icon } from './Icon';

interface StyleProps {
  $collapse: boolean;
}

const Wrapper = styled.div`
  flex: 1;
`;

const Header = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme.GrayColor.Color100};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s linear;
`;

const HeaderText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
`;

const AccordionButton = styled.span<StyleProps>`
  transition: all 0.2s linear;
  opacity: 0.5;
  ${Header}:hover & {
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
  padding: 0.75rem 0 0.75rem 1rem;
  background: ${(props) => props.theme.GrayColor.Color50};
`;

const ContentBody = styled.div``;

interface Props {
  category: string;
}

const ArrcordionCard = ({ category }: Props) => {
  const [toggle, setToggle] = useState(true);
  const onClick = () => {
    setToggle(!toggle);
  };
  return (
    <Wrapper>
      <Header onClick={onClick}>
        <HeaderText>{category}</HeaderText>
        <AccordionButton $collapse={toggle}>
          <Icon icon="arrowdown" aria-label="arrowdown" />
        </AccordionButton>
      </Header>
      <Link
        href={'posts/categories/[...slug]'}
        as={`posts/categories/${category}`}
      >
        <Content $collapse={toggle}>
          <ContentBody>content</ContentBody>
        </Content>
      </Link>
    </Wrapper>
  );
};

export default ArrcordionCard;
