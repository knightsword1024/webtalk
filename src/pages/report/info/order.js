import React, { Component } from 'react';
import { Row, Col, Card, DatePicker, Button, Table, Form } from 'antd';
import style from './index.less';
import { connect } from 'dva';
import moment from 'moment';

const FormItem = Form.Item;
const resType = {
  1: '削峰',
};

const resMode = {
  1: '实时需求响应',
  2: '约定需求响应',
};

@connect(response => response)
export default class order extends Component {
  state = {
    timer: '',
  };
  componentWillMount = () => {
    const { dispatch } = this.props;
    var date1 = moment().format('YYYY-MM-DD HH:mm:ss');
    var date2 = moment()
      .subtract('days', 1)
      .format('YYYY-MM-DD HH:mm:ss');
    dispatch({
      type: 'response/fetchOrderValue',
      payload: { startTime: date2, endTime: date1 },
    });
    this.cycleTime(true);
  };
  cycleTime = state => {
    var date1 = moment().format('YYYY-MM-DD HH:mm:ss');
    var date2 = moment()
      .subtract('days', 1)
      .format('YYYY-MM-DD HH:mm:ss');
    if (state) {
      this.state.timer = setInterval(() => {
        const { dispatch } = this.props;
        dispatch({
          type: 'response/fetchOrderValue2',
          payload: { startTime: date2, endTime: date1 },
        });
      }, 500000);
    }
  };
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  render() {
    const {
      response: { responseType, responseMode, responseStartTime, responsePower, responseTime },
    } = this.props;
    return (
      <div>
        <Card title="Grid Instruction">
          <div className={style.form}>
            <Form labelCol={{ span: 12 }} wrapperCol={{ span: 12 }} name="basic">
              <Form.Item label="Response Type" name="Response Type">
                {/* {resType[responseType]} */ 'Peak Clipping'}
              </Form.Item>
              <Form.Item label="Response Mode" name="Response Mode">
                {/* {resMode[responseMode]} */ 'Contract Demand Response'}
              </Form.Item>
              <Form.Item label="Response Starttime" name="Response Starttime">
                {/* {responseStartTime} */ '2020-06-01 12:00'}
              </Form.Item>
              <Form.Item label="Response Power" name="Response Power">
                {/* {responsePower} */ '200'}
                kW
              </Form.Item>
              <Form.Item label="Response Time" name="Response Time">
                {/* {responseTime} */ '60'}
                mins
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    );
  }
}
