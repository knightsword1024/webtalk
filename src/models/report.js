import { getOrderValue } from '@/services/dynamicMenu';

export default {
  namespace: 'response',

  state: {
    responseType: '', //响应类型
    responseMode: '', //响应方式
    responseStartTime: '', //响应开始时间
    responsePower: 300, //响应功率
    responseTime: 60, //响应时长
  },

  effects: {
    *fetchOrderValue({ payload }, { call, put }) {
      const response = yield call(getOrderValue, payload);
    },
    *pushReportValue({ payload }, { call, put }) {
      const response = yield call(pushReportValue, payload);
      yield put({
        type: 'setOrderValue',
        payload: response,
      });
    },
  },

  reducers: {
    setOrderValue(state, action) {
      return {
        ...state,
        // tableValue: action.payload.data,
      };
    },
  },
};
