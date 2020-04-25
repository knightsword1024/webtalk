import React, { Component } from 'react';
import { Row, Col, Card, DatePicker, Button, Table, Form } from 'antd';
import style from './index.less';

const FormItem = Form.Item;

export default class order extends Component {
  state = {
    value: 1,
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <Card title="电网指令">
          <div className={style.form}>
            <Form labelCol={{ span: 12 }} wrapperCol={{ span: 12 }} name="basic">
              <Form.Item label="响应类型" name="响应类型">
                {value}
              </Form.Item>
              <Form.Item label="响应方式" name="响应方式">
                {value}
              </Form.Item>
              <Form.Item label="响应开始时间" name="响应开始时间">
                {value}
              </Form.Item>
              <Form.Item label="响应功率" name="响应功率">
                {value}
                kW
              </Form.Item>
              <Form.Item label="响应时间" name="响应时间">
                {value}
                分钟
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    );
  }
}
