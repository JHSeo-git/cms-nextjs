import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

const ScrollTop = ({ children }: Props) => {
  const { asPath } = useRouter();
  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [asPath]);
  return <>{children}</>;
};

export default ScrollTop;
