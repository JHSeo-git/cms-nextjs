import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const SideMenuWrapper = styled.div``;

const List = styled.ul``;

const ListItem = styled.li``;

const ItemAnchor = styled.a``;

const SideMenu = () => {
  return (
    <SideMenuWrapper>
      <List>
        <ListItem>
          <Link href="/">
            <ItemAnchor>자바스크립트 1</ItemAnchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/">
            <ItemAnchor>자바스크립트 2</ItemAnchor>
          </Link>
        </ListItem>
      </List>
    </SideMenuWrapper>
  );
};

export default SideMenu;
