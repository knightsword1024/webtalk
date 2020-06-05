import React, { Component } from 'react';
import { Card, DatePicker, Button, Form, Radio, Input, Row, Col } from 'antd';
import style from './index.less';
import { connect } from 'dva';
import moment from 'moment';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;

@connect(response => response)
@Form.create()
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

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { radioValue, inputValue } = this.state;
    const {
      response: { responseStartTime, responseTime, responseId },
    } = this.props;
    var responsEndTime = '';
    if (responseStartTime != '') {
      responsEndTime = moment(responseStartTime)
        .add('minutes', responseTime)
        .format('YYYY-MM-DD HH:mm:ss');
    }

    dispatch({
      type: 'response/sendReportValue',
      payload: {
        responseId: responseId,
        participateValue: radioValue,
        payPower: inputValue,
        responseStartTime: responseStartTime,
        responseEndTime: responsEndTime,
      },
    });
  };
  handleDelete = () => {
    this.setState({
      radioValue: 0,
      inputValue: '',
    });
  };
  render() {
    const { value, radioValue } = this.state;
    const {
      form,
      response: { responseStartTime, responseTime },
    } = this.props;
    var response = '';
    if (responseStartTime != '') {
      const responsEndTime = moment(responseStartTime)
        .add('minutes', responseTime)
        .format('HH:mm:ss');
      var response = responseStartTime + '-' + responsEndTime;
      localStorage.setItem('response', response);
    }

    return (
      <div className={style.apear}>
        <Card title="响应上报">
          <div className={style.form2}>
            <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14 }} name="basic">
              <Form.Item label="是否参与" name="是否参与">
                <Radio.Group onChange={this.onChangeRadio} value={radioValue}>
                  <Radio value={1}>是</Radio>
                  <Radio value={2}>否</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="认缴负荷" name="认缴负荷">
                {form.getFieldDecorator('payPower', {
                  rules: [
                    {
                      required: true,
                      message: '请输入认缴负荷',
                    },
                  ],
                })(
                  <div className={style.input2}>
                    <Input onChange={this.onChangeInput} addonAfter="kW" />
                  </div>
                )}
              </Form.Item>
              <Form.Item label="响应时间" name="响应时间">
                {/* {response} */ '2020-6-1 12:00-13:00'}
              </Form.Item>
              <div className={style.button}>
                <div className={style.button1}>
                  <Button type="primary" onClick={this.handleSubmit}>
                    上报
                  </Button>
                </div>
                <div className={style.button2}>
                  <Button onClick={this.handleDelete}>取消</Button>
                </div>
              </div>
            </Form>
          </div>
        </Card>
      </div>
    );
  }
}
