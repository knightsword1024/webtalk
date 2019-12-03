import { queryPrototype, queryCollapse } from '@/services/prototype';
const PrototypeModel = {
  namespace: 'prototype',
  state: {
    prototypeValue: [],

    collapseValue: [],
  },
  effects: {
    *fetchPrototype({ payload }, { call, put }) {
      const response = yield call(queryPrototype, payload);
      yield put({
        type: 'savePrototype',
        payload: response,
      });
    },
    *fetchCollapse({ payload }, { call, put }) {
      const response = yield call(queryCollapse, payload);
      yield put({
        type: 'saveCollapse',
        payload: response,
      });
    },
  },
  reducers: {
    savePrototype(state, action) {
      return { ...state, prototypeValue: action.payload.data };
    },
    saveCollapse(state, action) {
      return { ...state, collapseValue: action.payload.data };
    },
  },
};

export default PrototypeModel;
