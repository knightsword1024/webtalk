import request from '@/utils/request';
import { stringify } from 'qs';

//响应追踪界面实施细节查询
export async function getTableValue(params) {
  return request('/webtalk/talkClient/xyzz', {
    method: 'POST',
    data: params,
  });
}

//响应追踪界面响应曲线查询
export async function getLineValue(params) {
  return request('/webtalk/talkClient/talkClientInto', {
    method: 'POST',
    data: params,
  });
}
