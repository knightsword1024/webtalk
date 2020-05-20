import request from '@/utils/request';
import { stringify } from 'qs';

//查询电网指令
export async function getOrderValue(params) {
  return request('/webtalk/report/instruction', {
    method: 'POST',
    data: params,
  });
}

//上报响应状态
export async function pushReportValue(params) {
  return request('/webtalk/report/report', {
    method: 'POST',
    data: params,
  });
}

//执行策略
export async function pushExeValue(params) {
  return request('/webtalk/report/execute', {
    method: 'POST',
    data: params,
  });
}

export async function getBaseValue(params) {
  return request('/webtalk/report/baseline', {
    method: 'POST',
    data: params,
  });
}

export async function getCalculateValue(params) {
  return request('/webtalk/report/calculation', {
    method: 'POST',
    data: params,
  });
}
export async function getPolicyFirst(params) {
  return request('/webtalk/report/policyfirst/baseline', {
    method: 'POST',
    data: params,
  });
}

export async function getPolicySecond(params) {
  return request('/webtalk/report/policysecond/baseline', {
    method: 'POST',
    data: params,
  });
}

export async function getPolicyForth(params) {
  return request('/webtalk/report/policyfourth/baseline', {
    method: 'POST',
    data: params,
  });
}

export async function getPolicySixth(params) {
  return request('/webtalk/report/policysixth/baseline', {
    method: 'POST',
    data: params,
  });
}
