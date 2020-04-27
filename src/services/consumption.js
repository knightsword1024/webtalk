import request from '@/utils/request';

export async function getTableValue() {
  return request('/api/consumption/tablevalue');
}
