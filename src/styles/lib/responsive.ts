const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

const responsive = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1023),
  tablet: customMediaQuery(767),
  phone: customMediaQuery(576),
};

export default responsive;
