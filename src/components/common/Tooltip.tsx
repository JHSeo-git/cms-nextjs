import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

type direction =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'right-top'
  | 'right-center'
  | 'right-bottom'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'left-top'
  | 'left-center'
  | 'left-bottom';

interface Props {
  children: React.ReactNode;
  message: string;
  direction: direction;
}

const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

interface StyledProps {
  $direction: direction;
}

const Content = styled.div<StyledProps>`
  display: none;
  position: absolute;
  z-index: 9999;
  padding: 0.5rem;
  border-radius: 3px;

  ${Container}:hover &,
  ${Container}:active & {
    display: block;
    animation: ${fadeIn} 0.2s ease-in-out;
    background: ${(props) => props.theme.GrayColor.Color500};
    color: white;
  }

  ${(props) =>
    props.$direction === 'top-left' &&
    css`
      top: -0.25rem;
      left: 0;
      transform: translateY(-100%);
    `}
  ${(props) =>
    props.$direction === 'top-center' &&
    css`
      top: -0.25rem;
      left: 50%;
      transform: translateY(-100%) translateX(-50%);
    `}
    ${(props) =>
    props.$direction === 'top-right' &&
    css`
      top: -0.25rem;
      right: 0;
      transform: translateY(-100%);
    `}
    ${(props) =>
    props.$direction === 'bottom-left' &&
    css`
      bottom: -0.25rem;
      left: 0;
      transform: translateY(100%);
    `}
  ${(props) =>
    props.$direction === 'bottom-center' &&
    css`
      bottom: -0.25rem;
      left: 50%;
      transform: translateY(100%) translateX(-50%);
    `}
    ${(props) =>
    props.$direction === 'bottom-right' &&
    css`
      bottom: -0.25rem;
      right: 0;
      transform: translateY(100%);
    `}
    ${(props) =>
    props.$direction === 'right-top' &&
    css`
      right: -0.25rem;
      top: 0;
      transform: translateX(100%);
    `}
    ${(props) =>
    props.$direction === 'right-center' &&
    css`
      right: -0.25rem;
      top: 50%;
      transform: translateX(100%) translateY(-50%);
    `}
    ${(props) =>
    props.$direction === 'right-bottom' &&
    css`
      right: -0.25rem;
      bottom: 0;
      transform: translateX(100%);
    `}
    ${(props) =>
    props.$direction === 'left-top' &&
    css`
      left: -0.25rem;
      top: 0;
      transform: translateX(-100%);
    `}
    ${(props) =>
    props.$direction === 'left-center' &&
    css`
      left: -0.25rem;
      top: 50%;
      transform: translateX(-100%) translateY(-50%);
    `}
    ${(props) =>
    props.$direction === 'left-bottom' &&
    css`
      left: -0.25rem;
      bottom: 0;
      transform: translateX(-100%);
    `}
`;

const Tooltip = ({ children, message, direction }: Props) => {
  return (
    <Container>
      {children}
      <Content $direction={direction}>{message}</Content>
    </Container>
  );
};

export default Tooltip;
