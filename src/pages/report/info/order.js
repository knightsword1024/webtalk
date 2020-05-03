import React, { Component } from 'react';
import { Row, Col, Card, DatePicker, Button, Table, Form } from 'antd';
import style from './index.less';
import { connect } from 'dva';

const FormItem = Form.Item;

@connect(response => response)
export default class order extends Component {
  state = {};
  componentWillMount = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'response/fetchOrderValue',
      payload: {},
    });
  };
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
                {responseType}
              </Form.Item>
              <Form.Item label="响应方式" name="响应方式">
                {responseMode}
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
