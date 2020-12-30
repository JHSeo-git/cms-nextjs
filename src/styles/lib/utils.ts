import { css } from 'styled-components';
import { Appearance } from '../../interfaces';

export const ApperanceColor = (appearance: Appearance) => {
  return css`
    color: ${(props) =>
      (appearance === 'primary' && props.theme.PrimaryColor.Color500) ||
      (appearance === 'secondary' && props.theme.SecondaryColor.Color500) ||
      (appearance === 'thirdary' && props.theme.ThirdaryColor.Color500)};
  `;
};

export const FlexBox = (isCol = false, isSBP = false) => {
  const flexBoxCSS = css`
    display: flex;
    align-items: center;
    ${isSBP &&
    css`
      justify-content: space-between;
    `}
    ${isCol &&
    css`
      flex-direction: column;
    `}
  `;

  return flexBoxCSS;
};

export const BoxShadow = (level: number) => {
  if (level === 1) {
    return css`
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    `;
  } else if (level === 2) {
    return css`
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    `;
  } else if (level === 3) {
    return css`
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    `;
  } else if (level === 4) {
    return css`
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    `;
  } else if (level === 5) {
    return css`
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);
    `;
  }
};

export const BorderLine = {
  normal: `1px solid rgba(0,0,0,0.07)`,
};
