import React, { Component } from 'react';
import { Card, DatePicker, Button, Form, Radio, Input, Row, Col } from 'antd';
import style from './index.less';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;

export default class apear extends Component {
  state = {
    value: 1,
    radioValue: 1,
    inputValue: '',
    startTime: '',
    endTime: '',
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

  onChangeStartTime = (value, dateString) => {
    console.log(dateString);
    this.setState({
      startTime: dateString[0],
      endTime: dateString[1],
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
                  <Col span={16}>
                    <RangePicker
                      showTime={{ format: 'HH:mm:ss' }}
                      format="YYYY-MM-DD HH:mm:ss"
                      onChange={this.onChangeStartTime}
                    />
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
