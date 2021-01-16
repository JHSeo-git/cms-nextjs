import { majorSize } from './utils';
import { math } from 'polished';

export const BreakPoint = {
  wideScreen: 1365,
  desktop: 1023,
  tablet: 767,
  phone: 576,
};
const convertPxToRem = (value: number) => value / 16;

const addCalc = (a: number | string, b: number | string) => {
  const aValue = typeof a === 'number' ? `${convertPxToRem(a)}rem` : a;
  const bValue = typeof b === 'number' ? `${convertPxToRem(b)}rem` : b;
  return math(`${aValue} + ${bValue}`);
};

const customMediaQuery = (maxWidth: number, isSideOpen = false) => {
  return isSideOpen
    ? `@media (max-width: ${addCalc(maxWidth, majorSize.sideMenuWidth)})`
    : `@media (max-width: ${maxWidth}px)`;
};

const responsive = {
  custom: customMediaQuery,
  wideScreen: customMediaQuery(BreakPoint.wideScreen),
  desktop: customMediaQuery(BreakPoint.desktop),
  tablet: customMediaQuery(BreakPoint.tablet),
  phone: customMediaQuery(BreakPoint.phone),
};

type Direction = 'width' | 'height';

export const isBreakdown = (direction: Direction = 'width', size: number) => {
  if (direction === 'width') {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    if (vw <= size) {
      return true;
    } else {
      return false;
    }
  } else {
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    if (vh <= size) {
      return true;
    } else {
      return false;
    }
  }
};

export default responsive;
