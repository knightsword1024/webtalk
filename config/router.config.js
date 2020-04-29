export default [
  //
  {
    path: '/',
    redirect: '/report',
  },
  {
    path: '/report',
    name: 'report',
    component: './report',
  },
  {
    path: '/result',
    name: 'result',
    component: './result',
  },
  {
    path: '/trace',
    name: 'trace',
    component: './trace',
  },
  {
    path: '/energyConsumption',
    name: 'energyConsumption',
    component: './energyConsumption',
  },
  {
    path: '/energyAnalysis',
    name: 'energyAnalysis',
    component: './energyAnalysis',
  },
  {
    component: '404',
  },
];
