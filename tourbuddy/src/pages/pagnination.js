import React from 'react';
import "./pagnination.css"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const range = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const handleClick = (page) => {
    onPageChange(page);
  };

  const renderPagination = () => {
    const pages = range(1, totalPages);
    return (
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className={page === currentPage ? 'active' : ''}>
            <button onClick={() => handleClick(page)}>{page}</button>
          </li>
        ))}
      </ul>
    );
  };

  return <div>{renderPagination()}</div>;
};

export default Pagination;
