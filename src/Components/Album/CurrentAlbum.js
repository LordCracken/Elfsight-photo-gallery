import React, { useContext, useState } from 'react';
import { Context } from '../../App';
import PhotoContainer from './PhotoContainer';

const CurrentAlbum = () => {
  const { setOpenAlbum, previewAlbum } = useContext(Context);
  const [openPhoto, setOpenPhoto] = useState(null)
  const { title, albumPhotos } = previewAlbum;

  return (
    <section className="album">
      <h1 className="album__title">{title}</h1>
      <div className="album__photos">
        {albumPhotos.map(photo => <PhotoContainer key={photo.id} {...photo} setOpenPhoto={setOpenPhoto} />)}
      </div>
      <button className="back-button primary-button album__button" onClick={() => setOpenAlbum(false)}>Back</button>
      {openPhoto &&
        <div className="overlay" onClick={event => event.target.className === 'overlay' ? setOpenPhoto(null) : null}>
          <div className="album__full-photo-container">
            <img
              className="full-photo"
              src={openPhoto.url}
              alt={openPhoto.title} />
              <button className="album__close close-button" onClick={() => setOpenPhoto(null)}></button>
          </div>
        </div>}
    </section>
  )
};

export default CurrentAlbum;
