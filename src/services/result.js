import request from '@/utils/request';
import { stringify } from 'qs';

//效果统计界面负荷占比
export async function getPieValue(params) {
  return request('/webtalk/effectstatistics/str', {
    method: 'POST',
    data: params,
  });
}

//效果统计界面历史响应查看
export async function getTableValue(params) {
  return request('/webtalk/effectstatistics/his', {
    method: 'POST',
    data: params,
  });
}

//效果统计界面历史响应统计
export async function getLineValue(params) {
  return request('/webtalk/effectstatistics/time', {
    method: 'POST',
    data: params,
  });
}

//效果统计界面卡片数据
export async function getCardValue(params) {
  return request('/webtalk/effectstatistics/count', {
    method: 'POST',
    data: params,
  });
}
