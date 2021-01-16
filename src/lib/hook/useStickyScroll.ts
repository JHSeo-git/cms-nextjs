import { useState } from 'react';

const useStickyScroll = (ref: React.MutableRefObject<any>) => {
  const [isSticky, setSticky] = useState(false);
  const [prevTop, setPrevTop] = useState(0);
  const handleScroll = () => {
    if (!ref.current) return;
    if (prevTop < ref.current.scrollTop) {
      setSticky(false);
    } else {
      setSticky(true);
    }
    setPrevTop(ref.current.scrollTop);
  };

  return [isSticky, handleScroll] as const;
};

export default useStickyScroll;
