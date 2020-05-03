import { getTableValue, getDayValue, getMonthValue } from '@/services/consumption';

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
      yield put({
        type: 'setTableValue',
        payload: response,
      });
    },
    *fetchDayValue({ payload }, { call, put }) {
      const response = yield call(getDayValue, payload);
      yield put({
        type: 'setDayValue',
        payload: response,
      });
    },
    *fetchMonthValue({ payload }, { call, put }) {
      const response = yield call(getMonthValue, payload);
      yield put({
        type: 'setMonthValue',
        payload: response,
      });
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
