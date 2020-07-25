import React from 'react';

const MainPage = React.lazy(() => import('./views/pages/MainPage'));
const Film = React.lazy(() => import('./views/pages/Film'));


const routes = [
  { path: '/', exact: true, name: 'MainPage', component: MainPage },
  { path: '/:type/details/:id', exact: true, name: 'FilmPage', component: Film }

];

export default routes;
