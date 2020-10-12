import React, { useState } from 'react';
import UsersBoard from './Components/UsersBoard/UsersBoard';
import CurrentAlbum from './Components/Album/CurrentAlbum';
import PreviewPopup from './Components/PreviewPopup';
import { useFetch } from './Components/Hooks/useFetch';

export const Context = React.createContext();

function App() {
  const [openAlbum, setOpenAlbum] = useState(false),
    [openPopup, setOpenPopup] = useState(false),
    [previewAlbum, setPreviewAlbum] = useState(null)
  const usersData = useFetch('https://jsonplaceholder.typicode.com/users').response,
    albumsData = useFetch('https://jsonplaceholder.typicode.com/albums').response,
    photosData = useFetch('https://jsonplaceholder.typicode.com/photos').response;

  return (
    <Context.Provider value={{
      openAlbum,
      setOpenAlbum,
      openPopup,
      setOpenPopup,
      previewAlbum,
      setPreviewAlbum,
      usersData,
      albumsData,
      photosData
    }}>
      {openAlbum ? <CurrentAlbum /> : <UsersBoard />}
      {openPopup && <PreviewPopup />}
    </Context.Provider>
  );
}

export default App;
