import request from '@/utils/request';

export async function getTableValue(params) {
  return request('/talkClient', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}
