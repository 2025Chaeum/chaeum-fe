'use client';

import ArrowIcon from 'public/icons/arrow.svg';
import DoubleArrowIcon from 'public/icons/double-arrow.svg';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxVisiblePages = 10;

  const startPage = Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + 1;
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  return (
    <div className="flex justify-center mt-6 space-x-2">
      <button
        className={`px-2 py-1 ${
          currentPage === 1 ? 'text-gray-500 cursor-not-allowed' : 'text-gray-600'
        }`}
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        <DoubleArrowIcon />
      </button>

      <button
        className={`px-2 py-1 ${
          currentPage === 1 ? 'text-gray-500 cursor-not-allowed' : 'text-gray-600'
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowIcon />
      </button>

      {Array.from({ length: endPage - startPage + 1 }).map((_, index) => {
        const pageNumber = startPage + index;
        return (
          <button
            key={pageNumber}
            className={`px-3 py-1 border ${
              currentPage === pageNumber ? 'bg-black text-white' : 'text-gray-600'
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        className={`px-2 py-1 ${
          currentPage === totalPages ? 'text-gray-500 cursor-not-allowed' : 'text-gray-600'
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ArrowIcon transform="rotate(180)" />
      </button>

      <button
        className={`px-2 py-1 ${
          currentPage === totalPages ? 'text-gray-500 cursor-not-allowed' : 'text-gray-600'
        }`}
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        <DoubleArrowIcon transform="rotate(180)" />
      </button>
    </div>
  );
}
