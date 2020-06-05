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
    const showValue = '11';
    // const xValue = [1, 2, 3, 4, 5, 6];
    // const yValue = [10, 20, 30, 40, 50, 60];
    const unitValue = 's';
    let option = {
      legend: {
        data: ['认缴负荷', '响应负荷', '获得收益'],
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999',
          },
        },
      },
      // legend: {
      //   data: ['认缴负荷', '削减负荷', '获得收益'],
      // },
      // xAxis: [
      //   {
      //     type: 'category',
      //     data: historyRespTime,
      //     axisPointer: {
      //       type: 'shadow',
      //     },
      //   },
      // ],
      // yAxis: [
      //   {
      //     type: 'value',
      //     name: '负荷',
      //     min: 0,
      //     max: 100,
      //     interval: 20,
      //     axisLabel: {
      //       formatter: '{value}kW',
      //     },
      //   },
      // ],
      xAxis: {
        type: 'category',
        boundaryGap: true,
        axisTick: {
          alignWithLabel: true,
        },
        // data: xValue,
        data: [
          '2019/7/23',
          '2019/7/28',
          '2019/8/3',
          '2019/8/9',
          '2019/8/23',
          '2020/5/10',
          '2020/5/20',
          '2020/6/1',
        ],
      },
      yAxis: [
        // type: 'value',
        // axisLabel: {
        //   show: true,
        //   showMinLabel: true,
        //   showMaxLabel: true,
        //   formatter: `{value}${unitValue}`,
        // },
        {
          type: 'value',
          name: '负荷/kW',
          min: 0,
          max: 350,
          interval: 50,
          axisLabel: {
            formatter: '{value}',
          },
        },
        {
          type: 'value',
          name: '收益/元',
          min: 0,
          max: 14000,
          interval: 2000,
          axisLabel: {
            formatter: '{value}',
          },
        },
      ],
      series: [
        // {
        //   name: showValue,
        //   // data: yValue,

        //   type: 'line',
        //   smooth: true,
        //   areaStyle: {},
        //   itemStyle: {
        //     normal: {
        //       color: '#4FC8FF',
        //       lineStyle: {
        //         width: 2,
        //         type: 'solid', // 'dotted'虚线 'solid'实线
        //       },
        //     },
        //   },
        // },
        {
          name: '认缴负荷',
          type: 'bar',
          barWidth: '30%',
          data: [200, 300, 300, 300, 200, 200, 200, 200],
        },
        {
          name: '响应负荷',
          type: 'bar',
          barWidth: '30%',
          data: [223, 315, 304, 310, 210, 206, 218, 230],
        },
        {
          name: '获得收益',
          type: 'line',
          yAxisIndex: 1,
          data: [6000, 9000, 9000, 9000, 6000, 6000, 6000, 6000],
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
