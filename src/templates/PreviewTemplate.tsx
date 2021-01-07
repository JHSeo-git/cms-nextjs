import { useEffect, useState } from 'react';
import { StyleSheetManager } from 'styled-components';

interface PreviewTemplateProps {
  children: React.ReactNode;
}

const PreviewTemplate = ({ children }: PreviewTemplateProps) => {
  const [iframeRef, setIframeRef] = useState<HTMLElement | undefined>(
    undefined
  );
  useEffect(() => {
    const previewPaneIframe: HTMLIFrameElement | null = document.querySelector(
      'iframe[class*="PreviewPaneFrame"]'
    );
    if (!previewPaneIframe?.contentWindow) return;

    const previewPaneHeadEl = previewPaneIframe.contentWindow.document.querySelector(
      'head'
    );
    if (!previewPaneHeadEl) return;

    setIframeRef(previewPaneHeadEl);
  }, []);

  return <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>;
};

export default PreviewTemplate;
