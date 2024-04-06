import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Cart } from '@/pages';
import { Empty } from '@/components';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  { path: '/cart', element: <Cart /> },
  { path: '/search', element: <Home /> },
  { path: '*', element: <Empty /> },
];

const Router = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default Router;
