import React from 'react';
import AlbumCard from './AlbumCard';

const User = ({ setOpenPopup, id, username, name, albumsData, photosData, setPreviewAlbum }) => (
  <div className="user">
    <h2 className="user__name">{username} ({name})</h2>
    <div className="user__albums">
      {albumsData.map(album => album.userId === id ?
        <AlbumCard
          key={album.id}
          setOpenPopup={setOpenPopup}
          setPreviewAlbum={setPreviewAlbum}
          {...album}
          photosData={photosData} /> : null)}
    </div>
  </div>
);

export default User;
