import request from '@/utils/request';
import { stringify } from 'qs';

export async function getEERrValue(params) {
  return request('/webtalk/energanalysis/eer', {
    method: 'POST',
    data: params,
  });
}

export async function getCOPValue(params) {
  return request('/webtalk/energanalysis/cop', {
    method: 'POST',
    data: params,
  });
}
export async function getWTFchwValue(params) {
  return request('/webtalk/energanalysis/wtfchw', {
    method: 'POST',
    data: params,
  });
}
export async function getCardValue(params) {
  return request('/webtalk/energanalysis/analysis', {
    method: 'POST',
    data: params,
  });
}
