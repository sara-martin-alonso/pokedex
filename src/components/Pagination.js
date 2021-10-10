import React from "react";

export default function Pagination(props) {
  const { handleNextClick, handlePrevClick } = props;

  return (
    <div className='pagination'>
      <div className='arrow arrow-next' onClick={handlePrevClick}>
        <i className='fas fa-angle-left'></i>
      </div>
      <div className='arrow arrow-prev' onClick={handleNextClick}>
        <i className='fas fa-angle-right'></i>
      </div>
    </div>
  );
}
