import { useEffect, useState } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

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

  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
    </ThemeProvider>
  );
};

export default PreviewTemplate;
