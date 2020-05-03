import request from '@/utils/request';
import { stringify } from 'qs';

export async function getTableValue(params) {
  return request('/webtalk/energyConsumption/loadcomparison', {
    method: 'POST',
    data: params,
  });
}

export async function getDayValue(params) {
  return request('/webtalk/energyConsumption/chain', {
    method: 'POST',
    data: params,
  });
}

export async function getMonthValue(params) {
  return request('/webtalk/energyConsumption/sameperiod', {
    method: 'POST',
    data: params,
  });
}
