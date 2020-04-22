export default [
  //
  {
    path: '/',
    redirect: '/homepage',
  },
  {
    path: '/homepage',
    name: 'homepage',
    icon: 'home',
    component: './home',
  },
  {
    component: '404',
  },
];
