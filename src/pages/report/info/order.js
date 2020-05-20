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
        <Card title="电网指令">
          <div className={style.form}>
            <Form labelCol={{ span: 12 }} wrapperCol={{ span: 12 }} name="basic">
              <Form.Item label="响应类型" name="响应类型">
                {resType[responseType]}
              </Form.Item>
              <Form.Item label="响应方式" name="响应方式">
                {resMode[responseMode]}
              </Form.Item>
              <Form.Item label="响应开始时间" name="响应开始时间">
                {responseStartTime}
              </Form.Item>
              <Form.Item label="响应功率" name="响应功率">
                {responsePower}
                kW
              </Form.Item>
              <Form.Item label="响应时间" name="响应时间">
                {responseTime}
                分钟
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    );
  }
}
