import { getTableValue, getDayValue, getMonthValue } from '@/services/consumption';

export default {
  namespace: 'consumption',

  state: {
    tableValue: [
      { deviceName: '冷水机组', dayElectricity: 60, monthElectricity: 60, proportion: 25 },
      { deviceName: '冷冻水泵', dayElectricity: 60, monthElectricity: 60, proportion: 25 },
      { deviceName: '冷冻水泵', dayElectricity: 60, monthElectricity: 60, proportion: 25 },
      { deviceName: '冷却塔风机', dayElectricity: 60, monthElectricity: 60, proportion: 25 },
    ],

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
        // tableValue: action.payload.data,
      };
    },
    setDayValue(state, action) {
      return {
        ...state,
        // tableValue: action.payload.data,
      };
    },
    setMonthValue(state, action) {
      return {
        ...state,
        // tableValue: action.payload.data,
      };
    },
  },
};
