import React from 'react';
import styled from 'styled-components';
import config from '../../lib/meta/config';
import { BorderLine } from '../../styles/lib/utils';

const FooterWrapper = styled.footer`
  padding: 1rem;
  border-top: ${BorderLine.normal};
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme.GrayColor.Color900};
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const Name = styled.span`
  color: ${(props) => props.theme.PrimaryColor.Color500};
`;

const Link = styled.a`
  color: ${(props) => props.theme.GrayColor.Color600};
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Text>
        COPYRIGHT &#169; 2020 ALL RIGHT <Name>JHSeo</Name>
      </Text>
      <Text>
        <Link href={`mailto: ${config.mail_address}`}>
          {config.mail_address}
        </Link>
        <Link href={config.blog_address} target="_blank">
          Blog
        </Link>
      </Text>
    </FooterWrapper>
  );
};

export default Footer;
