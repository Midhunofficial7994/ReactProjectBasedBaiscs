import useSWRInfinite from 'swr/infinite'
import { useRef } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

const useSwrPagination = () => {
  const loaderRef = useRef(null);

  const {
    data,
    error,
    size,
    setSize,
    isValidating,
  } = useSWRInfinite(
    (index) => `https://jsonplaceholder.typicode.com/posts?_page=${index + 1}&_limit=4`, 
    fetcher,
    {
      revalidateOnFocus: false, 
      revalidateOnReconnect: false,
      keepPreviousData: true, 
    }
  );

  const allData = data ? [].concat(...data) : [];

  const loadMoreItems = () => {
    if (!isValidating) {
      setSize(size + 1);
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !isValidating) {    
        loadMoreItems();
      }
    },
    { threshold: 0.1 }
  );

  const currentLoader = loaderRef.current;

  if (currentLoader) {
    observer.observe(currentLoader);
  }

  return {
    data: allData,
    error,
    isLoading: isValidating,
    hasMore: data && data[data.length - 1]?.length > 0, 
    loaderRef,
  };
};

export default useSwrPagination;
