import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Form, Select, Button, DatePicker } from 'antd';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import style from './index.less';
import moment from 'moment';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;

@connect(({ response }) => ({ response }))
export default class baseLine extends Component {
  state = {};
  // componentDidMount = () => {
  //   const {
  //     dispatch,
  //     response: { responseStartTime, responseTime },
  //   } = this.props
  //   var responsEndTime = ''
  //   if (responseStartTime != '') {
  //     responsEndTime = moment(responseStartTime)
  //       .add('minutes', responseTime)
  //       .format('YYYY-MM-DD HH:mm:ss')
  //   }
  //   dispatch({
  //     type: 'response/fetchBaseValue',
  //     payload: { startTime: responseStartTime, endTime: responsEndTime },
  //   })
  // }
  getLine = () => {
    const {
      response: { basePowerxValue, basePoweryValue },
    } = this.props;
    const showValue = 'baseLine';
    const unitValue = 'kW';
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
      },
      dataZoom: [
        {
          show: true,
          realtime: true,
          start: 0,
          end: 100,
          dataBackgroundColor: '#4FC8FF',
          //             // fillerColor: '',
          textStyle: {
            color: '#fff',
          },
        },
        {
          type: 'inside',
          realtime: true,
          start: 0,
          end: 100,
        },
      ],
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: basePowerxValue,
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          showMinLabel: true,
          showMaxLabel: true,
          formatter: `{value}${unitValue}`,
        },
      },
      series: [
        {
          name: showValue,
          data: basePoweryValue,
          type: 'line',
          smooth: true,
          areaStyle: {},
          itemStyle: {
            normal: {
              color: '#4FC8FF',
              lineStyle: {
                width: 2,
                type: 'solid', // 'dotted'虚线 'solid'实线
              },
            },
          },
        },
      ],
    };
    return option;
  };

  render() {
    const {
      response: { aveValue, maxValue },
    } = this.props;
    return (
      <div>
        <Card title="基线负荷">
          <div>
            <div className={style.label1}>
              基线最大负荷：
              {maxValue}
              kW
            </div>
            &nbsp;&nbsp;
            <div className={style.label2}>
              基线平均负荷：
              {aveValue}
              kW
            </div>
          </div>
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
