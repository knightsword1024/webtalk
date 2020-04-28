import { getTableValue } from '@/services/consumption';

export default {
  namespace: 'consumption',

  state: {
    tableValue: [],
  },

  effects: {
    *fetchTableValue({ payload }, { call, put }) {
      const response = yield call(getTableValue, payload);
      console.log(response);
      yield put({
        type: 'setTableValue',
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
  },
};
