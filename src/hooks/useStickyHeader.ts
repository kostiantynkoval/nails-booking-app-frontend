import {useLayoutEffect, useState} from "react";

export const useStickyHeader = (stickyHeaderHeight = 80) => {
  const [isSticky, setIsSticky] = useState(false);

  useLayoutEffect(() => {
    const handleStickyHeader = () => {
      setIsSticky(document.documentElement.scrollTop > stickyHeaderHeight)
    }
    window.addEventListener('scroll', () => {
      handleStickyHeader();
    })
    handleStickyHeader();
    return () => window.removeEventListener('scroll', () => {
      handleStickyHeader();
    })
  }, [stickyHeaderHeight]);

  return isSticky;
}