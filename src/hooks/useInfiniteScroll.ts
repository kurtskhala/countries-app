import { useEffect, useRef, RefObject } from "react";

interface UseInfiniteScrollOptions {
  loading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
  rootMargin?: string;
  threshold?: number;
}

export const useInfiniteScroll = <T extends HTMLElement>({
  loading,
  hasMore,
  onLoadMore,
  rootMargin = "0px",
  threshold = 0.5,
}: UseInfiniteScrollOptions): RefObject<T> => {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          onLoadMore();
        }
      },
      {
        rootMargin,
        threshold,
      },
    );

    observer.observe(target);

    return () => {
      if (target) {
        observer.unobserve(target);
      }
      observer.disconnect();
    };
  }, [loading, hasMore, onLoadMore, rootMargin, threshold]);

  return targetRef;
};
