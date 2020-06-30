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
        <Card title="Response Report">
          <div className={style.form2}>
            <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14 }} name="basic">
              <Form.Item label="Participation" name="Participation">
                <Radio.Group onChange={this.onChangeRadio} value={radioValue}>
                  <Radio value={1}>Yes</Radio>
                  <Radio value={2}>No</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Subscribed Load" name="Subscribed Load">
                {form.getFieldDecorator('payPower', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input the number of subscribed load',
                    },
                  ],
                })(
                  <div className={style.input2}>
                    <Input onChange={this.onChangeInput} addonAfter="kW" />
                  </div>
                )}
              </Form.Item>
              <Form.Item label="Response Time" name="Response Time">
                {/* {response} */ '2020-06-01 12:00-13:00'}
              </Form.Item>
              <div className={style.button}>
                <div className={style.button1}>
                  <Button type="primary" onClick={this.handleSubmit}>
                    report
                  </Button>
                </div>
                <div className={style.button2}>
                  <Button onClick={this.handleDelete}>cancel</Button>
                </div>
              </div>
            </Form>
          </div>
        </Card>
      </div>
    );
  }
}
