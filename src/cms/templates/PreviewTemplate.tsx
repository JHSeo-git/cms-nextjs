import React from 'react';
import * as Core from 'netlify-cms-core';
import HighlightWrapper from '../../components/mdx/HighlightWrapper';

const PreviewTemplate = (props: Core.PreviewTemplateComponentProps) => {
  const { entry } = props;
  console.log('entry', entry);
  const mdxBody = entry.getIn(['data', 'body']);
  return <HighlightWrapper>{mdxBody}</HighlightWrapper>;
};

export default PreviewTemplate;
