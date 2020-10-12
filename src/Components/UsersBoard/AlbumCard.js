import React from 'react';

const AlbumCard = ({ photosData, setOpenPopup, setPreviewAlbum, title, id }) => {
  const albumPhotos = photosData.filter(photo => photo.albumId === id),
    photosCount = albumPhotos.length,
    albumCover = albumPhotos[0] ? albumPhotos[0].url : null;
  return (
    <div className="album-card user__album-card"
      onClick={() => {
        setOpenPopup(true);
        setPreviewAlbum({title, albumPhotos});
      }}
      style={{ backgroundImage: `url(${albumCover})` }}>
      <h3 className="album-card__title">{title}</h3>
      <span className="album-card__counter">{photosCount} photos</span>
    </div>
  )
};

export default AlbumCard;
