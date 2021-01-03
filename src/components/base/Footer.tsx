import React from 'react';
import styled from 'styled-components';
import config from '../../lib/meta/config';
import { BorderLine } from '../../styles/lib/utils';
import { Icon } from '../common/Icon';
import Tooltip from '../common/Tooltip';

const FooterWrapper = styled.footer`
  padding: 1rem 2rem;
  border-top: ${BorderLine.normal};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  font-size: 0.75rem;
  color: ${(props) => props.theme.GrayColor.Color900};
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  display: flex;
  align-items: center;
`;

const Name = styled.span`
  margin: 0 0.25rem;
  color: ${(props) => props.theme.GrayColor.Color500};
`;

const Link = styled.a`
  color: ${(props) => props.theme.GrayColor.Color600};
  opacity: 0.5;
  &:not(:last-child) {
    margin-right: 1rem;
  }
  &:hover {
    opacity: 1;
  }
`;
const LinkText = styled.a`
  margin-left: 0.25rem;
  color: ${(props) => props.theme.PrimaryColor.Color500};
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Text>
        &#169; 2020<Name>JHSeo.</Name>Built with
        <LinkText href="https://nextjs.org/" target="_blank">
          Next.js
        </LinkText>
      </Text>
      <Text>
        <Link
          href={`mailto: ${config.mail_address}`}
          data-tooltip-text="E-Mail"
        >
          <Tooltip message="email" direction="top-left">
            <Icon icon="email" aria-label="email" />
          </Tooltip>
        </Link>
        <Link
          href={config.blog_address}
          target="_blank"
          data-tooltip-text="Blog"
        >
          <Tooltip message="blog" direction="top-left">
            <Icon icon="box" aria-label="box" />
          </Tooltip>
        </Link>
      </Text>
    </FooterWrapper>
  );
};

export default Footer;
