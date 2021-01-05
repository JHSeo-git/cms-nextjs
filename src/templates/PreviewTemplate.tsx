import React from 'react';
import * as Core from 'netlify-cms-core';
import styled from 'styled-components';
import HighlightWrapper from '../components/mdx/HighlightWrapper';

const Title = styled.h1`
  text-align: center;
  border-bottom: ${(props) => props.theme.GrayColor.Color100};
`;

const PreviewTemplate = (props: Core.PreviewTemplateComponentProps) => {
  const { entry, widgetFor } = props;
  const data = entry.get('data');
  const body = widgetFor('body');
  return (
    <>
      <Title>TTitle: {data.get('title')}</Title>
      <HighlightWrapper>{body}</HighlightWrapper>
    </>
  );
};

export default PreviewTemplate;
