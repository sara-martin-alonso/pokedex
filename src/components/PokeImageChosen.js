import React from "react";
import Pagination from "./Pagination";
import pokeball from "../img/pokeball.png";

export default function PokeImageChosen(props) {
  const {
    name,
    images,
    imageNumber,
    handlePrevImageClick,
    handleNextImageClick,
  } = props;


  return (
    <>
      <div className='image'>
        <img src={images.length ? images[imageNumber] : pokeball} alt={name} />
        {images.length > 0 && (
          <span>
            {imageNumber + 1}/{images.length}
          </span>
        )}
      </div>
      <Pagination
        handleNextClick={() => handleNextImageClick(images.length)}
        handlePrevClick={() => handlePrevImageClick(images.length)}
      />
    </>
  );
}
