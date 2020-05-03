import { getTableValue } from '@/services/trace';

export default {
  namespace: 'trace',

  state: {
    tableValue,
  },

  effects: {
    *fetchTableValue({ payload }, { call, put }) {
      const response = yield call(getTableValue, payload);
      yield put({
        type: 'setTableValue',
        payload: response,
      });
    },
  },

  reducers: {
    setTableValue(state, action) {
      console.log(action);
      return {
        ...state,
        // tableValue: action.payload.data,
      };
    },
  },
};
