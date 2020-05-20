import { getEERrValue, getCOPValue, getWTFchwValue, getCardValue } from '@/services/analysis';

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
    EERryValueBusi: [],
    EERryValueOffice: [],

    COPxValue: [],
    COPyValue: [],

    WTFchwxValue: [],
    WTFchwyValueOffice: [],
    WTFchwyValueBusi: [],
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
        EERrxValue: action.payload.result.EERrxValue,
        EERryValueBusi: action.payload.result.EERryValueBusi,
        EERryValueOffice: action.payload.result.EERryValueOffice,
      };
    },
    setCOPValue(state, action) {
      console.log(action.payload.result);
      return {
        ...state,
        COPxValue: action.payload.result.COPxValue,
        COPyValue: action.payload.result.COPyValue,
      };
    },
    setWTFchwValue(state, action) {
      return {
        ...state,
        WTFchwxValue: action.payload.result.WTFchwxValue,
        WTFchwyValueBusi: action.payload.result.WTFchwyValueBusi,
        WTFchwyValueOffice: action.payload.result.WTFchwyValueOffice,
      };
    },
    setCardValue(state, action) {
      return {
        ...state,
        EERrB: action.payload.result.EERrB,
        EERrS: action.payload.result.EERrS,
        COPB: action.payload.result.COPB,
        COPS: action.payload.result.COPS,
        WTFchwB: action.payload.result.WTFchwB,
        WTFchwS: action.payload.result.WTFchwS,
      };
    },
  },
};
