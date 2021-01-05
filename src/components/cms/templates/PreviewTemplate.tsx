import React from 'react';
import * as Core from 'netlify-cms-core';
import HighlightWrapper from '../../mdx/HighlightWrapper';

const PreviewTemplate = (props: Core.PreviewTemplateComponentProps) => {
  const { widgetFor } = props;
  const mdxBody = widgetFor('body');
  return <HighlightWrapper>{mdxBody}</HighlightWrapper>;
};

export default PreviewTemplate;
