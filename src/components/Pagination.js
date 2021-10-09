import React from "react";

export default function Pagination(props) {
  const { handleNextClick, handlePrevClick } = props;

  return (
    <div className="pagination">
      <div className="arrow arrow-next">
        <i className="fas fa-angle-left" onClick={handlePrevClick}></i>
      </div>
      <div className="arrow arrow-prev">
        <i className="fas fa-angle-right" onClick={handleNextClick}></i>
      </div>
    </div>
  );
}
