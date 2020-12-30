import React from 'react';
import styled from 'styled-components';
import { BorderLine } from '../../styles/lib/utils';

const FooterWrapper = styled.footer`
  padding: 1rem;
  border-top: ${BorderLine.normal};
`;

const Footer = () => {
  return <FooterWrapper>I'm here to stay (Footer)</FooterWrapper>;
};

export default Footer;
