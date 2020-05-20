import { getTableValue, getDayValue, getMonthValue } from '@/services/consumption';
import { message } from 'antd';

export default {
  namespace: 'consumption',

  state: {
    tableValue: [],

    dayValue1: [],
    dayValue2: [],

    monthValue1: [],
    monthValue2: [],
  },

  effects: {
    *fetchTableValue({ payload }, { call, put }) {
      const response = yield call(getTableValue, payload);
      if (response.code == 200) {
        yield put({
          type: 'setTableValue',
          payload: response,
        });
      } else {
        message.error('返回错误');
      }
    },
    *fetchDayValue({ payload }, { call, put }) {
      const response = yield call(getDayValue, payload);
      if (response.code == 200) {
        yield put({
          type: 'setDayValue',
          payload: response,
        });
      } else {
        message.error('返回错误');
      }
    },
    *fetchMonthValue({ payload }, { call, put }) {
      const response = yield call(getMonthValue, payload);
      if (response.code == 200) {
        yield put({
          type: 'setMonthValue',
          payload: response,
        });
      } else {
        message.error('返回错误');
      }
    },
  },

  reducers: {
    setTableValue(state, action) {
      return {
        ...state,
        tableValue: action.payload.result,
      };
    },
    setDayValue(state, action) {
      return {
        ...state,
        dayValue1: action.payload.result.dayValue1,
        dayValue2: action.payload.result.dayValue2,
      };
    },
    setMonthValue(state, action) {
      return {
        ...state,
        monthValue1: action.payload.result.monthValue1,
        monthValue2: action.payload.result.monthValue2,
      };
    },
  },
};
