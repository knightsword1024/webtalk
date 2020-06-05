import { getPieValue, getTableValue, getLineValue, getCardValue } from '@/services/result';

export default {
  namespace: 'result',

  state: {
    proportionDate: [],

    tableValue: [],

    historyRespTime: [], //横坐标，响应时间集合
    payPower: [], //认缴负荷集合
    cutPower: [], //削减负荷集合
    yieldProfit: [], //获得收益集合

    responseFreq: 0, //累计相应次数
    responsePower: 0, //累计响应负荷
    responseProfit: 0, //累计收益
    powerComplete: 0, //响应负荷完成率
    responseTimeRate: 0, //响应时间有效率
    yearCompleteRate: 0, //年度完成有效率
  },

  effects: {
    *fetchPieValue({ payload }, { call, put }) {
      const response = yield call(getPieValue, payload);
      yield put({
        type: 'setPieValue',
        payload: response,
      });
    },
    *fetchTableValue({ payload }, { call, put }) {
      const response = yield call(getTableValue, payload);
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
    *fetchCardValue({ payload }, { call, put }) {
      const response = yield call(getCardValue, payload);
      yield put({
        type: 'setCardValue',
        payload: response,
      });
    },
  },

  reducers: {
    setPieValue(state, action) {
      var calue = [];
      for (let i of action.payload.result.proportionDate) {
        calue.push({
          name: i.strategyId,
          value: i.value,
        });
      }
      return {
        ...state,
        proportionDate: calue,
      };
    },
    setTableValue(state, action) {
      return {
        ...state,
        tableValue: action.payload.result,
      };
    },
    setLineValue(state, action) {
      return {
        ...state,
        historyRespTime: action.payload.result.historyRespTime,
        payPower: action.payload.result.payPower,
        cutPower: action.payload.result.cutPower,
        yieldProfit: action.payload.result.profit,
      };
    },
    setCardValue(state, action) {
      return {
        ...state,
        responseFreq: action.payload.result.responseFreq,
        responsePower: action.payload.result.responsePower,
        responseProfit: action.payload.result.responseProfit,
        powerComplete: action.payload.result.powerComplete,
        responseTimeRate: action.payload.result.responseTimeRate,
        yearCompleteRate: action.payload.result.yearCompleteRate,
      };
    },
  },
};
