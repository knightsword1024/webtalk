import request from '@/utils/request';
import { stringify } from 'qs';

export async function getOrderValue(params) {
  return request('/talkClient/dryl', {
    method: 'POST',
    data: params,
  });
}

export async function pushReportValue(params) {
  return request('/talkClient/dryl', {
    method: 'POST',
    data: params,
  });
}

export async function getBaseValue(params) {
  return request('/talkClient/dryl', {
    method: 'POST',
    data: params,
  });
}
