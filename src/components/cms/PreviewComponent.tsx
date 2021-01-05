import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';
import CMS from 'netlify-cms-app';
import HighlightWrapper from '../mdx/HighlightWrapper';

interface Props {
  children: React.ReactNode;
}

const PreviewComponent = ({ children }: Props) => {
  const [iframeRef, setIframeRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0];
    if (!iframe.contentDocument) return;
    const iframeHeadElem = iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, []);

  return iframeRef ? (
    <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
  ) : (
    <StyleSheetManager>{children}</StyleSheetManager>
  );
};
CMS.registerPreviewTemplate('posts', (props) => (
  <PreviewComponent>
    <HighlightWrapper>{props}</HighlightWrapper>
  </PreviewComponent>
));
