import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

interface TOCItem {
  id: string;
  top: number;
}

const useTOCItemList = (ref: React.MutableRefObject<HTMLElement | null>) => {
  const [list, setList] = useState<TOCItem[] | null>(null);

  const handler = debounce(() => {
    if (!ref?.current) return;
    const toc = document.querySelector('.toc');
    if (toc) {
      const anchorList = [
        ...toc.querySelectorAll<HTMLAnchorElement>('.toc-link'),
      ];
      const scrollTop = ref.current.scrollTop;
      setList(
        anchorList.map((anchor) => {
          const id = anchor.hash;
          const dom = document.querySelector(id);
          if (!dom) {
            return {
              id: '',
              top: 0,
            };
          }
          const top = dom.getBoundingClientRect().top + scrollTop;
          return {
            id,
            top,
          };
        })
      );
    }
  }, 20);

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', handler, false);
    window.addEventListener('load', handler, false);
    window.addEventListener('scroll', handler, false);
    window.addEventListener('resize', handler, false);
    return () => {
      window.removeEventListener('DOMContentLoaded', handler, false);
      window.removeEventListener('load', handler, false);
      window.removeEventListener('scroll', handler, false);
      window.removeEventListener('resize', handler, false);
    };
  }, []);

  return [list] as const;
};

export default useTOCItemList;
