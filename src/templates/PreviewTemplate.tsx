import React from 'react';
import * as Core from 'netlify-cms-core';
import HighlightWrapper from '../components/mdx/HighlightWrapper';

const PreviewTemplate = (props: Core.PreviewTemplateComponentProps) => {
  const { entry } = props;
  const body = entry.getIn(['data', 'body']);
  console.log('entry', entry);
  return <HighlightWrapper>{body}</HighlightWrapper>;
};

export default PreviewTemplate;
