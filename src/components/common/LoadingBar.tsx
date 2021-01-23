import React from 'react';
import styled from 'styled-components';
import { ScaleLoader } from 'react-spinners';
import { zIndexValue } from '../../styles/lib/utils';

const FullScreen = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${zIndexValue.modal};
  background: ${(props) => props.theme.GrayColor.Color100};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingBar = () => {
  return (
    <FullScreen>
      <ScaleLoader />
    </FullScreen>
  );
};

export default LoadingBar;
