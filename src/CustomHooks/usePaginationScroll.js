import { useState, useEffect, useRef } from "react";

const usePaginationScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  const fetchItems = async () => {
    if (isLoading || page === null) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=4`
      );
      const result = await response.json();

      if (result.length === 0) {
        setHasMore(false);
      } else {
        setData((prev) => [...prev, ...result]);
      }
    } catch (err) {
      setError('Failed to load posts. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
  
    if (!hasMore || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMore && !isLoading) {
          setPage((prevPage) => prevPage + 1); 
        }
      },
      { threshold: 0.1 }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    // Cleanup the observer when the component unmounts or dependencies change
    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [hasMore, isLoading]);

  // Fetch new items whenever the page changes
  useEffect(() => {
    fetchItems();
  }, [page]);

  return { data, error, isLoading, hasMore, loaderRef };
};

export default usePaginationScroll;
