import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';
import CMS from 'netlify-cms-app';
import PreviewTemplate from '../templates/PreviewTemplate';

// eslint-disable-next-line react/prop-types
const PreviewComponent = ({ children }) => {
  const [iframeRef, setIframeRef] = useState(null);

  useEffect(() => {
    // const iframe = document.getElementById('preview-pane');
    // if (!iframe) return;
    // const iframeConenteHead = iframe.contentDocument.head;
    // if (!iframeConenteHead) return;
    const previewPaneIframe = document.querySelector(
      'iframe[class*="PreviewPaneFrame"]'
    );
    const previewPaneHeadEl = previewPaneIframe.contentWindow.document.querySelector(
      'head'
    );
    setIframeRef(previewPaneHeadEl);
  }, []);

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
    )
  );
};

// register preview
CMS.registerPreviewTemplate('posts', (props) => (
  <PreviewComponent>
    <PreviewTemplate {...props} />
  </PreviewComponent>
));

if (window) {
  window.alert(CMS);
}
