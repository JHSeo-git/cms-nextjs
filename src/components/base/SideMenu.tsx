// import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';
import ArrcordionCard from '../common/ArrcordionCard';

const Header = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.h2`
  color: ${(props) => props.theme.GrayColor.Color900};
`;

const Content = styled.main``;

const SideMenu = () => {
  // const router = useRouter();
  // console.log(router);
  return (
    <>
      <Header>
        <HeaderText>Follow Me</HeaderText>
      </Header>
      <Content>
        <ArrcordionCard />
        <ArrcordionCard />
      </Content>
    </>
  );
};

export default SideMenu;
