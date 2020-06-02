import { getTableValue, getLineValue } from '@/services/trace';

export default {
  namespace: 'trace',

  state: {
    responseId: '',
    tableValue: [],
    responsePower: '',
    responseTime: '',
    payPower: '',
    cutPower: '',
    ExeStartTime: '',
    yieldProfit: '',
    PPI: '',
    SPI: '',

    powerxValue: [],
    baseLinePower: [],
    realPower: [],
    realCutPower: [],
  },

  effects: {
    *fetchTableValue({ payload }, { call, put }) {
      const response = yield call(getTableValue, payload);
      if (response.code == 200) {
        const sendValue = {
          responseId: response.result.responseId,
          responseDate: payload.responseDate,
        };
        const response1 = yield call(getLineValue, sendValue);
        yield put({
          type: 'setLineValue',
          payload: response1,
        });
      }
      yield put({
        type: 'setTableValue',
        payload: response,
      });
    },
    *fetchLineValue({ payload }, { call, put }) {
      const response = yield call(getLineValue, payload);
      yield put({
        type: 'setLineValue',
        payload: response,
      });
    },
  },

  reducers: {
    setTableValue(state, action) {
      return {
        ...state,
        responseId: action.payload.result.responseId,
        tableValue: action.payload.result.tableValue,
        responsePower: action.payload.result.responsePower,
        responseTime: action.payload.result.responseTime,
        payPower: action.payload.result.payPower,
        cutPower: action.payload.result.cutPower,
        ExeStartTime: action.payload.result.ExeStartTime,
        yieldProfit: action.payload.result.yieldProfit,
        PPI: action.payload.result.PPI,
        SPI: action.payload.result.SPI,
      };
    },
    setLineValue(state, action) {
      return {
        ...state,
        powerxValue: action.payload.result.powerxValue,
        baseLinePower: action.payload.result.baseLinePower,
        realPower: action.payload.result.realPower,
        cutPower: action.payload.result.cutPower,
        // powerxValue: action.payload[0].powerxValue,
        // baseLinePower: action.payload[0].baseLinePower,
        // realPower: action.payload[0].realPower,
        // realCutPower: action.payload[0].cutPower,
      };
    },
  },
};
