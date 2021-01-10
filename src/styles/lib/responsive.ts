export const BreakPoint = {
  desktop: 1023,
  tablet: 767,
  phone: 576,
};

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

const responsive = {
  custom: customMediaQuery,
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
