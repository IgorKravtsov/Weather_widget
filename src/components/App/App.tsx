import React, { useEffect } from 'react';
import './App.css';

import { AppLayout } from 'components/AppLayout';

import { storageManager } from 'packages/storage-manager';
import { positionManager } from 'packages/position-manager';

import { useAppDispatch } from 'storage/hooks';
import { setCities, setCoords, setCoordsError, warning } from 'storage/slices';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getCoords = async () => {
      try {
        const position = await positionManager.getPosition();
        position && dispatch(setCoords(position));
      } catch (e) {
        dispatch(setCoordsError('User denied Geolocation'));
        storageManager.getShowFlag() &&
          dispatch(
            warning({
              message: 'You denied geoposition, please enable it in browser settings',
              additionalBtnLabel: "Don't show",
            })
          );
      }
    };
    dispatch(setCities(storageManager.getAll() || []));
    getCoords();
  }, []);

  return <AppLayout />;
}

export default App;
