import { keyframes } from 'styled-components';

export const downSideAni = keyframes`
  0%{
    transform: translateY(-100%);
  }
  100%{
    transform: translateY(0);
  }
`;

export const upSideAni = keyframes`
  0%{
    top: 0;
  }
  100%{
    top: -100%;
  }
  `;

export const fadeIn = keyframes`
0%{
    opacity: 0;
}
100%{
    opacity: 1;
}
`;
