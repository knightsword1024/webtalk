import {
  getOrderValue,
  pushReportValue,
  getBaseValue,
  getCalculateValue,
  getPolicyFirst,
  getPolicySecond,
  getPolicyForth,
  getPolicySixth,
  pushExeValue,
} from '@/services/report';
import { message } from 'antd';

export default {
  namespace: 'response',

  state: {
    responseId: 0, //响应ID
    responseType: '', //响应类型
    responseMode: '', //响应方式
    responseStartTime: '', //响应开始时间
    responseEndTime: '', //响应结束时间
    responsePower: 0, //响应功率
    responseTime: 0, //响应时长

    policyBaselineMap: {},

    aveValue: 0,
    maxValue: 0,
    basePowerxValue: [],
    basePoweryValue: [],

    numofficeBaseValue: '',
    numofficeMaxValue: '',
    numbusiBaseValue: '',
    numbusiMaxValue: '',

    temofficeBaseValue: '',
    temofficeMaxValue: '',
    tembusiBaseValue: '',
    tembusiMaxValue: '',

    airBaseValue: '',
    airMaxValue: '',

    lightBaseValue: '',
    lightMaxValue: '',

    calculateValue: 0,
    singlePowerMap: {},
  },

  effects: {
    *fetchOrderValue({ payload }, { call, put }) {
      const response = yield call(getOrderValue, payload);
      if ((response.code = 200)) {
        const senvalue = {
          startTime: response.result.responseStartTime,
          endTime: response.result.responseEndTime,
        };
        const responsed = yield call(getBaseValue, senvalue);
        yield put({
          type: 'setBaseValue',
          payload: responsed,
        });
        const response1 = yield call(getPolicyFirst, senvalue);
        yield put({
          type: 'setPolicyFirst',
          payload: response1,
        });
        const response2 = yield call(getPolicySecond, senvalue);
        yield put({
          type: 'setPolicySecond',
          payload: response2,
        });
        const response4 = yield call(getPolicyForth, senvalue);
        yield put({
          type: 'setPolicyForth',
          payload: response4,
        });
        const response6 = yield call(getPolicySixth, senvalue);
        yield put({
          type: 'setPolicySixth',
          payload: response6,
        });
      }
      yield put({
        type: 'setOrderValue',
        payload: response,
      });
    },
    *fetchOrderValue2({ payload }, { call, put }) {
      const response = yield call(getOrderValue, payload);
      yield put({
        type: 'setOrderValue',
        payload: response,
      });
    },
    *sendReportValue({ payload }, { call, put }) {
      const response = yield call(pushReportValue, payload);
      if (response.code == 200) {
        message.success('上报成功');
      }
    },
    *sendExeValue({ payload }, { call, put }) {
      const response = yield call(pushExeValue, payload);
      if (response.code == 200) {
        message.success('执行成功');
      }
    },

    *fetchBaseValue({ payload }, { call, put }) {
      const response = yield call(getBaseValue, payload);
      yield put({
        type: 'setBaseValue',
        payload: response,
      });
    },
    *fetchCalculateValue({ payload }, { call, put }) {
      const response = yield call(getCalculateValue, payload);
      if (response.code == 200) {
        message.success('计算成功');

        yield put({
          type: 'setCalculateValue',
          payload: response,
        });
      }
    },
    *fetchPolicyFirst({ payload }, { call, put }) {
      const response = yield call(getPolicyFirst, payload);
      yield put({
        type: 'setPolicyFirst',
        payload: response,
      });
    },
    *fetchPolicySecond({ payload }, { call, put }) {
      const response = yield call(getPolicySecond, payload);
      yield put({
        type: 'setPolicySecond',
        payload: response,
      });
    },
    *fetchPolicyForth({ payload }, { call, put }) {
      const response = yield call(getPolicyForth, payload);
      yield put({
        type: 'setPolicyForth',
        payload: response,
      });
    },
    *fetchPolicySixth({ payload }, { call, put }) {
      const response = yield call(getPolicySixth, payload);
      yield put({
        type: 'setPolicySixth',
        payload: response,
      });
    },
  },

  reducers: {
    setOrderValue(state, action) {
      return {
        ...state,
        responseId: action.payload.result.id, //响应ID
        responseType: action.payload.result.responseType, //响应类型
        responseMode: action.payload.result.responseMode, //响应方式
        responseStartTime: action.payload.result.responseStartTime, //响应开始时间
        responseEndTime: action.payload.result.responseEndTime,
        responsePower: action.payload.result.responsePower, //响应功率
        responseTime: action.payload.result.responseTime, //响应时长
      };
    },
    setBaseValue(state, action) {
      return {
        ...state,
        aveValue: action.payload.result.baseAvePower,
        maxValue: action.payload.result.baseMaxPower,
        basePowerxValue: action.payload.result.basePowerxValue,
        basePoweryValue: action.payload.result.basePoweryValue,
        policyBaselineMap: action.payload.result.policyBaselineMap,
      };
    },
    setCalculateValue(state, action) {
      return {
        ...state,
        calculateValue: action.payload.result.calculateValue,
        singlePowerMap: action.payload.result.singlePowerMap,
      };
    },
    setPolicyFirst(state, action) {
      return {
        ...state,
        numofficeBaseValue: action.payload.result.officeBaseValue,
        numofficeMaxValue: action.payload.result.officeMaxValue,
        numbusiBaseValue: action.payload.result.busiBaseValue,
        numbusiMaxValue: action.payload.result.busiMaxValue,
      };
    },
    setPolicySecond(state, action) {
      return {
        ...state,
        temofficeBaseValue: action.payload.result.officeBaseValue,
        temofficeMaxValue: action.payload.result.officeMaxValue,
        tembusiBaseValue: action.payload.result.busiBaseValue,
        tembusiMaxValue: action.payload.result.busiMaxValue,
      };
    },
    setPolicyForth(state, action) {
      return {
        ...state,
        airBaseValue: action.payload.result.baseValue,
        airMaxValue: action.payload.result.maxValue,
      };
    },
    setPolicySixth(state, action) {
      return {
        ...state,
        lightBaseValue: action.payload.result.baseValue,
        lightMaxValue: action.payload.result.maxValue,
      };
    },
  },
};
