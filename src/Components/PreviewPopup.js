import React, { useContext, useState } from 'react';
import { Context } from '../App';

const PreviewPopup = () => {
  const { setOpenPopup, setOpenAlbum, previewAlbum } = useContext(Context);
  const [counter, setCounter] = useState(0);
  const { title, albumPhotos } = previewAlbum;
  const photosCount = albumPhotos.length;

  return (
    <div className="overlay" onClick={event => event.target.className === 'overlay' ? setOpenPopup(false) : null}>
      <div className="popup">
        <h3 className="popup__title">{title}</h3>
        <div className="slider popup__slider">
          <div className="slider__wrapper">
            {albumPhotos.map((photo, i) => counter === i ?
              <img key={photo.id} className="slider__slide" src={photo.url} alt={photo.title} />
              : null)}
          </div>
          <div className="slider__controls">
            <button className="slider__arrow prev-arrow" onClick={() => setCounter(counter === 0 ? photosCount - 1 : counter - 1)}>&lt;</button>
            <button className="slider__arrow next-arrow" onClick={() => setCounter(counter === photosCount - 1  ? 0 : counter + 1)}>&gt;</button>
          </div>
        </div>
        <button className="popup__full-viewing primary-button"
          onClick={() => {
            setOpenAlbum(true);
            setOpenPopup(false);
          }}>View album</button>
        <button className="popup__close close-button" onClick={() => setOpenPopup(false)}></button>
      </div>
    </div>
  )
};

export default PreviewPopup;
