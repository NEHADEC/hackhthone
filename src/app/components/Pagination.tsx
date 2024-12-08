import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <nav className="flex justify-center">
      <button
        className="p-2 mx-1 text-gray-500 hover:text-blue-500"
        onClick={() => handlePageChange(1)}
      >
        First
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`p-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-100'}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="p-2 mx-1 text-gray-500 hover:text-blue-500"
        onClick={() => handlePageChange(totalPages)}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
