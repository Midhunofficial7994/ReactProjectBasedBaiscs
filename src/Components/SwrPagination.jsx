import React from "react";
import useSwrPagination from "../CustomHooks/useSwrPagination";

const SwrPagination = () => {
  const { data, error, isLoading, hasMore, loaderRef } = useSwrPagination();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      {isLoading && <div>Loading...</div>}

      {hasMore && <div ref={loaderRef}>Loading more...</div>}
    </div>
  );
};

export default SwrPagination;
