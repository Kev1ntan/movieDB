import React from 'react';

const MainPage = React.lazy(() => import('./views/pages/MainPage'));
const Film = React.lazy(() => import('./views/pages/Film'));
const LoginPage = React.lazy(() => import('./views/pages/LoginPage'));
const RegisterPage = React.lazy(() => import('./views/pages/RegisterPage'));
const ResetPassPage = React.lazy(() => import('./views/pages/ResetPassPage'));
const ResendEmailPage = React.lazy(() => import('./views/pages/ResendEmailPage'));
const MoviePage = React.lazy(() => import('./views/pages/MoviePage'));
const MovieNowPlayingPage = React.lazy(() => import('./views/pages/MovieNowPlayingPage'));
const MovieUpcomingPage = React.lazy(() => import('./views/pages/MovieUpcomingPage'));
const MovieTopRatedPage = React.lazy(() => import('./views/pages/MovieTopRatedPage'));
const TvPage = React.lazy(() => import('./views/pages/TvPage'));
const TvTopRatedPage = React.lazy(() => import('./views/pages/TvTopRatedPage'));
const TvAiringPage = React.lazy(() => import('./views/pages/TvAiringPage'));
const OnTvPage = React.lazy(() => import('./views/pages/OnTvPage'));
const Person = React.lazy(() => import('./views/pages/Person'));
const PersonDetailPage = React.lazy(() => import('./views/pages/PersonDetailPage'));
const SearchPage = React.lazy(() => import('./views/pages/SearchPage'));

const routes = [
  { path: '/', exact: true, name: 'MainPage', component: MainPage },
  { path: '/person/details/:id', exact: true, name: 'PersonPage', component: PersonDetailPage },
  { path: '/:type/details/:id', exact: true, name: 'FilmPage', component: Film },
  { path: '/login', exact: true, name: 'Login', component: LoginPage },
  { path: '/register', exact: true, name: 'Register', component: RegisterPage },
  { path: '/resetpass', exact: true, name: 'ResetPass', component: ResetPassPage },
  { path: '/resendemail', exact: true, name: 'ResendEmail', component: ResendEmailPage },
  { path: '/movie', exact: true, name: 'Movie', component: MoviePage },
  { path: '/movie/now-playing', exact: true, name: 'MovieNowPlaying', component: MovieNowPlayingPage },
  { path: '/movie/upcoming', exact: true, name: 'MovieUpcoming', component: MovieUpcomingPage },
  { path: '/movie/toprated', exact: true, name: 'MovieTopRated', component: MovieTopRatedPage },
  { path: '/tv', exact: true, name: 'Tv', component: TvPage },
  { path: '/tv/airingtoday', exact: true, name: 'TvAiring', component: TvAiringPage },
  { path: '/tv/toprated', exact: true, name: 'TvTopRated', component: TvTopRatedPage },
  { path: '/tv/ontv', exact: true, name: 'OnTv', component: OnTvPage },
  { path: '/person', exact: true, name: 'Person', component: Person },
  { path: '/search/:qry', exact: true, name: 'SearchPage', component: SearchPage },
];

export default routes;
