import React, { useEffect } from 'react';
import './App.css';

import { AppLayout } from 'components/AppLayout';

import { storageManager } from 'packages/storage-manager';
import { postitionManager } from 'packages/position-manager';

import { useAppDispatch } from 'storage/hooks';
import { setCities, setCoords, setCoordsError } from 'storage/slices';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getCoords = async () => {
      try {
        const position = await postitionManager.getPosition();
        position && dispatch(setCoords(position));
      } catch (e) {
        dispatch(setCoordsError('User denied Geolocation'));
      }
    };
    dispatch(setCities(storageManager.getAll() || []));
    getCoords();
  }, []);

  return <AppLayout />;
}

export default App;
