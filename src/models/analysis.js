import { getEERrValue, getCOPValue, getWTFchwValue, getCardValue } from '@/services/dynamicMenu';

export default {
  namespace: 'analysis',

  state: {
    EERrB: 0,
    EERrS: 0,
    COPB: 0,
    COPS: 0,
    WTFchwB: 0,
    WTFchwS: 0,

    EERrxValue: [],
    EERryValue: [],

    COPxValue: [],
    COPyValue: [],

    WTFchwxValue: [],
    WTFchwyValue: [],
  },

  effects: {
    *fetchEERrValue({ payload }, { call, put }) {
      const response = yield call(getEERrValue, payload);
      yield put({
        type: 'setEERrValue',
        payload: response,
      });
    },
    *fetchCOPValue({ payload }, { call, put }) {
      const response = yield call(getCOPValue, payload);
      yield put({
        type: 'setCOPValue',
        payload: response,
      });
    },
    *fetchWTFchwValue({ payload }, { call, put }) {
      const response = yield call(getWTFchwValue, payload);
      yield put({
        type: 'setWTFchwValue',
        payload: response,
      });
    },
    *fetchCardValue({ payload }, { call, put }) {
      const response = yield call(getCardValue, payload);
      yield put({
        type: 'setCardValue',
        payload: response,
      });
    },
  },

  reducers: {
    setEERrValue(state, action) {
      return {
        ...state,
        // tableValue: action.payload.data,
      };
    },
    setCOPValue(state, action) {
      return {
        ...state,
        // tableValue: action.payload.data,
      };
    },
    setWTFchwValue(state, action) {
      return {
        ...state,
        // tableValue: action.payload.data,
      };
    },
    setCardValue(state, action) {
      return {
        ...state,
        // tableValue: action.payload.data,
      };
    },
  },
};
