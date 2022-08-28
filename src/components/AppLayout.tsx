import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { RouteName } from 'routes';

import { LoadingIndicator } from 'components/LoadingIndicatior/LoadingIndicator';
import { Layout } from 'components/Layout/Layout';

const EnterCity = React.lazy(() => import('pages/EnterCity/EnterCity'));
const CreateCity = React.lazy(() => import('pages/AddCity/AddCity'));
const UpdateCity = React.lazy(() => import('pages/UpdateCity/UpdateCity'));
const Weather = React.lazy(() => import('pages/Weather/Weather'));

export const AppLayout: React.FC = () => {
  return (
    <Layout>
      <Suspense fallback={<LoadingIndicator />}>
        <Routes>
          <Route path={RouteName.EnterCity} element={<EnterCity />} />
          <Route path={RouteName.CityInfo} element={<CreateCity />} />
          <Route path={RouteName.CityInfo + '/:cityId'} element={<UpdateCity />} />
          <Route path={RouteName.Weather + '/:cityId'} element={<Weather />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
