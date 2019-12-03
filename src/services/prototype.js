import request from '@/utils/request';

// 获取页面数据
export async function queryPrototype(params) {
  return request('/api/query/prototype', {
    method: 'POST',
    body: params,
  });
}

// 获取左侧菜单选择项数据
export async function queryCollapse(params) {
  return request('/api/query/collapse', {
    method: 'POST',
    body: params,
  });
}
