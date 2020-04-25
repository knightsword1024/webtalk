import React, { Component } from 'react';
import { Card, DatePicker, Button, Form, Radio, Input, Row, Col } from 'antd';
import style from './index.less';

const FormItem = Form.Item;

export default class apear extends Component {
  state = {
    value: 1,
    radioValue: 1,
    inputValue: '',
  };
  onChangeRadio = e => {
    this.setState({
      radioValue: e.target.value,
    });
  };
  onChangeInput = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  render() {
    const { value, radioValue } = this.state;
    return (
      <div className={style.apear}>
        <Card title="响应上报">
          <div className={style.form2}>
            <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14 }} name="basic">
              <Form.Item label="是否参与" name="是否参与">
                <Radio.Group onChange={this.onChangeRadio} value={radioValue}>
                  <Radio value={1}>是</Radio>
                  <Radio value={0}>否</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="认缴负荷" name="认缴负荷">
                <div className={style.input2}>
                  <Input onChange={this.onChangeInput} addonAfter="kW" />
                </div>
              </Form.Item>
              <Form.Item label="响应开始时间" name="响应开始时间">
                <Row gutter={10}>
                  <Col span={8}>
                    <DatePicker />
                  </Col>
                  <Col span={8}>
                    <Input placeholder="请输入时间" />
                  </Col>
                  <Col span={8}>
                    <span>例如:12:00-13:00</span>
                  </Col>
                </Row>
              </Form.Item>
            </Form>

            <div className={style.button}>
              <div className={style.button1}>
                <Button type="primary">上报</Button>
              </div>
              <div className={style.button2}>
                <Button>取消</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
