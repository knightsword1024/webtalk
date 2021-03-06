export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: ['src/pages/Authorized'],
        // authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            redirect: '/energyConsumption',
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
            path: '/diagram',
            name: 'diagram',
            component: './diagram',
          },
          {
            component: '404',
          },
        ],
      },
    ],
  },
];
