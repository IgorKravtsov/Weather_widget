import React, { useEffect } from 'react';
import './App.css';

import { AppLayout } from 'components/AppLayout';

import { storageManager } from 'packages/storage-manager';
import { positionManager } from 'packages/position-manager';

import { useAppDispatch, useAppSelector } from 'storage/hooks';
import { selectCoords, setCities, setCoords, setCoordsError, warning } from 'storage/slices';

import { useSetCity } from './useSetCity';

function App() {
  const dispatch = useAppDispatch();
  const { coords } = useAppSelector(selectCoords);

  const { setCurrentCityByCoords } = useSetCity();

  useEffect(() => {
    const getCoords = async () => {
      try {
        const position = await positionManager.getPosition();
        if (position) {
          dispatch(setCoords(position));
          // setCurrentCityByCoords(position);
        }
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

  useEffect(() => {
    coords && setCurrentCityByCoords(coords);
  }, [coords]);

  return <AppLayout />;
}

export default App;
