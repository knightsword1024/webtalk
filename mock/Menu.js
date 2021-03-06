// 这里模仿后台返回的菜单数据
export default {
  'POST /DynamicMenu/getDynamicMenu': (req, res) => {
    if (req.body.value == 0) {
      res.send({
        data: [
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
      });
      return;
    }
    if (req.body.value == 1) {
      res.send({
        data: [
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
      });
    }
  },
};
