import React from 'react';
import styled, { css } from 'styled-components';
import { AlignType, Appearance } from '../../interfaces';
import { ApperanceColor } from '../../styles/lib/utils';

interface TextProps {
  $align?: AlignType;
  $appearance?: Appearance;
}

const Text = styled.h1<TextProps>`
  text-align: center;
  ${(props) =>
    props.$align === 'left' &&
    css`
      text-align: left;
    `}
  ${(props) =>
    props.$align === 'center' &&
    css`
      text-align: center;
    `}
  ${(props) =>
    props.$align === 'right' &&
    css`
      text-align: right;
    `}
    ${(props) => props.$appearance && ApperanceColor(props.$appearance)}
`;

interface Props {
  align?: AlignType;
  appearance?: Appearance;
  children: React.ReactNode;
}

const Title = ({ align, appearance, children }: Props) => {
  return (
    <Text $align={align} $appearance={appearance}>
      {children}
    </Text>
  );
};

export default Title;
