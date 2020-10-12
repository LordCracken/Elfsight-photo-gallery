import React from 'react';

const PhotoContainer = ({ title, url, setOpenPhoto }) => {
  return (
    <div className="album__photo-container" onClick={() => setOpenPhoto({title, url})}>
      <img
        className="album__photo"
        src={url}
        alt={title} />
      <span className="album__photo-title">{title}</span>
    </div>
  )
};

export default PhotoContainer;
