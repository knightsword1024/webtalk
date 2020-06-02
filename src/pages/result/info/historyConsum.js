import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Form, Select, Button, DatePicker } from 'antd';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import style from './index.less';
import moment from 'moment';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;

@connect(({ result }) => ({ result }))
export default class historyConsum extends Component {
  state = {
    date: [],
    time: '',
  };
  componentDidMount = () => {
    const { dispatch } = this.props;
    var date = moment().format('YYYY-MM-DD');
    dispatch({
      type: 'result/fetchLineValue',
      payload: { inquireDate: date },
    });
  };
  getLine = () => {
    const {
      result: { historyRespTime, payPower, cutPower, yieldProfit },
    } = this.props;
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999',
          },
        },
      },
      legend: {
        data: ['认缴负荷', '削减负荷', '获得收益'],
      },
      xAxis: [
        {
          type: 'category',
          data: historyRespTime,
          axisPointer: {
            type: 'shadow',
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '负荷',
          min: 0,
          max: 100,
          interval: 20,
          axisLabel: {
            formatter: '{value}kW',
          },
        },
        {
          type: 'value',
          name: '收益',
          min: 0,
          max: 100,
          interval: 20,
          axisLabel: {
            formatter: '{value}万元',
          },
        },
      ],
      series: [
        {
          name: '认缴负荷',
          type: 'bar',
          data: payPower,
        },
        {
          name: '削减负荷',
          type: 'bar',
          data: cutPower,
        },
        {
          name: '获得收益',
          type: 'line',
          yAxisIndex: 1,
          data: yieldProfit,
        },
      ],
    };
    return option;
  };

  render() {
    return (
      <div>
        <Card title="历史响应统计">
          {/* {this.renderSimpleForm()} */}
          <ReactEcharts
            option={this.getLine()}
            theme="light"
            style={{ height: '280px', width: '100%' }}
          />
        </Card>
      </div>
    );
  }
}
