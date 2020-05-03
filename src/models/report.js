import { getOrderValue, pushReportValue, getBaseValue } from '@/services/report';

export default {
  namespace: 'response',

  state: {
    responseType: '', //响应类型
    responseMode: '', //响应方式
    responseStartTime: '', //响应开始时间
    responsePower: 300, //响应功率
    responseTime: 60, //响应时长

    aveValue: 0,
    maxValue: 0,
    basePowerxValue: [],
    basePoweryValue: [],
  },

  effects: {
    *fetchOrderValue({ payload }, { call, put }) {
      const response = yield call(getOrderValue, payload);
      yield put({
        type: 'setOrderValue',
        payload: response,
      });
    },

    *pushReportValue({ payload }, { call, put }) {
      const response = yield call(pushReportValue, payload);
    },

    *fetchBaseValue({ payload }, { call, put }) {
      const response = yield call(getBaseValue, payload);
      yield put({
        type: 'setBaseValue',
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
    setBaseValue(state, action) {
      return {
        ...state,
        // tableValue: action.payload.data,
      };
    },
  },
};
