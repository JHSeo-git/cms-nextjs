import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

interface TOCItem {
  id: string;
  top: number;
}

const useTOCItemList = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [list, setList] = useState<TOCItem[] | null>(null);

  const handler = debounce(() => {
    const toc = document.querySelector('.toc');
    console.log('tttt', scrollTop);
    if (toc) {
      const anchorList = [
        ...toc.querySelectorAll<HTMLAnchorElement>('.toc-link'),
      ];
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
    if (!document.body) return;
    const temp = document.documentElement
      ? document.documentElement.scrollTop || document.body.scrollTop
      : document.body.scrollTop;
    setScrollTop(temp || 0);
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
