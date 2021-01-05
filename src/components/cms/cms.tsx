import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';
import CMS from 'netlify-cms-app';
import PreviewTemplate from './templates/PreviewTemplate';

interface Props {
  children: React.ReactNode;
}

const PreviewComponent = ({ children }: Props) => {
  const [iframeRef, setIframeRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const iframe = document.getElementById('preview-pane');
    if (!iframe) return;
    setIframeRef(iframe);
  }, []);

  return iframeRef ? (
    <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
  ) : (
    <StyleSheetManager>{children}</StyleSheetManager>
  );
};

// register preview
CMS.registerPreviewTemplate('posts', (props) => (
  <PreviewComponent>
    <PreviewTemplate {...props} />
  </PreviewComponent>
));
