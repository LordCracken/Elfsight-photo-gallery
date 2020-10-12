import React, { useContext } from 'react';
import { Context } from '../../App';
import User from './User';

const UsersBoard = () => {
  const { setOpenPopup, usersData, albumsData, photosData, setPreviewAlbum } = useContext(Context);
  return (
    <section className="users-board">
      {usersData.map(user => <User
        key={user.id}
        setOpenPopup={setOpenPopup}
        setPreviewAlbum={setPreviewAlbum}
        {...user}
        albumsData={albumsData}
        photosData={photosData} />)}
    </section>
  )
};

export default UsersBoard;
