import useSWR from "swr";
import { useParams, useNavigate } from "react-router-dom";

const fetcher = (url) => fetch(url).then((res) => res.json());

const usePaginatedData = (limit = 8) => {
  const { page = 1 } = useParams(); 
  const navigate = useNavigate();  

  const currentPage = parseInt(page, 10) || 1; 
  
  const { data, error } = useSWR(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}`,fetcher);

  const totalItems = 100; 
  const totalPages = Math.ceil(totalItems / limit);

  const isLoading = !data && !error;
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      navigate(`/paginationStep/${page}`);
    }
  };
                       
  return {
    data: data || [],error,isLoading,totalItems,totalPages,handlePageChange,currentPage,};  };

export default usePaginatedData;
