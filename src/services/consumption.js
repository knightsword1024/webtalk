import request from '@/utils/request';
import { stringify } from 'qs';

export async function getTableValue(params) {
  return request('/talkClient/dryl', {
    method: 'POST',
    data: params,
  });
}

export async function getDayValue(params) {
  return request('/talkClient/dryl', {
    method: 'POST',
    data: params,
  });
}

export async function getMonthValue(params) {
  return request('/talkClient/dryl', {
    method: 'POST',
    data: params,
  });
}
