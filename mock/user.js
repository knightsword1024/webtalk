// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': {
    name: 'Keeper',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'antdesign@alipay.com',
    signature: '海纳百川，有容乃大',
    title: '交互专家',
    group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    tags: [
      {
        key: '0',
        label: '很有想法的',
      },
      {
        key: '1',
        label: '专注设计',
      },
      {
        key: '2',
        label: '辣~',
      },
      {
        key: '3',
        label: '大长腿',
      },
      {
        key: '4',
        label: '川妹子',
      },
      {
        key: '5',
        label: '海纳百川',
      },
    ],
    notifyCount: 12,
    country: 'China',
    geographic: {
      province: {
        label: '浙江省',
        key: '330000',
      },
      city: {
        label: '杭州市',
        key: '330100',
      },
    },
    address: '西湖区工专路 77 号',
    phone: '0752-268888888',
  },
  // GET POST 可省略
  'GET /api/users': [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ],
  'POST /api/login/account': (req, res) => {
    const { password, userName, type } = req.body;
    if (password === '888888' && userName === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }
    if (password === '123456' && userName === 'user') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'user',
      });
      return;
    }
    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
  },
  'POST /api/register': (req, res) => {
    res.send({ status: 'ok', currentAuthority: 'user' });
  },
  'GET /api/500': (req, res) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req, res) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req, res) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req, res) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'POST /api/query/prototype': (req, res) => {
    res.send({
      data: [
        {
          doorNum: 101,
          outfallTem: 27,
          infallTem: 24,
          insideTem: 22,
          outsideTem: 10,
          valveOpening: 79,
        },
        {
          doorNum: 102,
          outfallTem: 27,
          infallTem: 24,
          insideTem: 22,
          outsideTem: 10,
          valveOpening: 79,
        },
        {
          doorNum: 201,
          outfallTem: 27,
          infallTem: 24,
          insideTem: 22,
          outsideTem: 10,
          valveOpening: 79,
        },
        {
          doorNum: 202,
          outfallTem: 27,
          infallTem: 24,
          insideTem: 22,
          outsideTem: 10,
          valveOpening: 79,
        },
        {
          doorNum: 301,
          outfallTem: 27,
          infallTem: 24,
          insideTem: 22,
          outsideTem: 10,
          valveOpening: 79,
        },
        {
          doorNum: 302,
          outfallTem: 27,
          infallTem: 24,
          insideTem: 22,
          outsideTem: 10,
          valveOpening: 79,
        },
        {
          doorNum: 401,
          outfallTem: 27,
          infallTem: 24,
          insideTem: 22,
          outsideTem: 10,
          valveOpening: 79,
        },
        {
          doorNum: 402,
          outfallTem: 27,
          infallTem: 24,
          insideTem: 22,
          outsideTem: 10,
          valveOpening: 79,
        },
        {
          doorNum: 501,
          outfallTem: 27,
          infallTem: 24,
          insideTem: 22,
          outsideTem: 10,
          valveOpening: 79,
        },
        {
          doorNum: 502,
          outfallTem: 27,
          infallTem: 24,
          insideTem: 22,
          outsideTem: 10,
          valveOpening: 79,
        },
        {
          doorNum: 601,
          outfallTem: 27,
          infallTem: 24,
          insideTem: 22,
          outsideTem: 10,
          valveOpening: 79,
        },
        {
          doorNum: 602,
          outfallTem: 27,
          infallTem: 24,
          insideTem: 22,
          outsideTem: 10,
          valveOpening: 79,
        },
        {
          doorNum: 701,
          outfallTem: 27,
          infallTem: 24,
          insideTem: 22,
          outsideTem: 10,
          valveOpening: 79,
        },
        {
          doorNum: 702,
          outfallTem: 27,
          infallTem: 24,
          insideTem: 22,
          outsideTem: 10,
          valveOpening: 79,
        },
      ],
    });
  },
  'POST /api/query/collapse': (req, res) => {
    res.send({
      data: [
        {
          key: '1',
          name: '天晴庄园',
          value: [
            { key: '1', name: '一号楼' },
            { key: '2', name: '二号楼' },
            { key: '3', name: '三号楼' },
            { key: '4', name: '四号楼' },
            { key: '5', name: '五号楼' },
            { key: '6', name: '六号楼' },
            { key: '7', name: '七号楼' },
            { key: '8', name: '八号楼' },
          ],
        },
        {
          key: '2',
          name: '综合职工家属院',
          value: [
            { key: '1', name: '一号楼' },
            { key: '2', name: '二号楼' },
            { key: '3', name: '三号楼' },
            { key: '4', name: '四号楼' },
            { key: '5', name: '五号楼' },
            { key: '6', name: '六号楼' },
            { key: '7', name: '七号楼' },
            { key: '8', name: '八号楼' },
          ],
        },
        {
          key: '3',
          name: '其他楼属',
          value: [
            { key: '1', name: '一号楼' },
            { key: '2', name: '二号楼' },
            { key: '3', name: '三号楼' },
            { key: '4', name: '四号楼' },
            { key: '5', name: '五号楼' },
            { key: '6', name: '六号楼' },
            { key: '7', name: '七号楼' },
            { key: '8', name: '八号楼' },
          ],
        },
      ],
    });
  },
  'GET /api/query/allProject': (req, res) => {
    res.send({
      data: [
        { projectId: '1', name: '三元朱项目' },
        { projectId: '2', name: '水产养殖' },
        { projectId: '3', name: '果蔬加工' },
        { projectId: '4', name: '菜博会' },
      ],
    });
  },
};
