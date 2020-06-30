import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Form, Select, Button, DatePicker } from 'antd';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import style from './index.less';
import moment from 'moment';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;

@connect(result => result)
export default class LoadContrast extends Component {
  state = {
    date: [],
    time: '',
  };
  componentDidMount = () => {
    const { dispatch } = this.props;
    var date = moment().format('YYYY-MM-DD') + ' 00:00:00';
    dispatch({
      type: 'result/fetchPieValue',
      payload: { responseDate: date },
    });
  };
  getLine = () => {
    const {
      result: { proportionDate },
    } = this.props;
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1],
        },
      },
      series: [
        {
          name: 'Source',
          type: 'pie',
          radius: '90%',
          center: ['50%', '50%'],
          data: [
            { value: 335, name: 'Strategy One' },
            { value: 310, name: 'Strategy Two' },
            { value: 274, name: 'Strategy Three' },
            { value: 235, name: 'Strategy Four' },
            { value: 400, name: 'Strategy Five' },
          ].sort(function(a, b) {
            return a.value - b.value;
          }),
          roseType: 'radius',
          label: {
            color: 'rgba(0, 0, 0, 1)',
          },
          labelLine: {
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.3)',
            },
            smooth: 0.2,
            length: 10,
            length2: 20,
          },
          // itemStyle: {
          //   color: '#41a2f4',
          //   shadowBlur: 200,
          //   shadowColor: 'rgba(0, 0, 0, 0.5)',
          // },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function(idx) {
            return Math.random() * 200;
          },
        },
      ],
    };
    return option;
  };

  render() {
    return (
      <div>
        <Card title="Response Load Ratio">
          <ReactEcharts
            option={this.getLine()}
            theme="light"
            style={{ height: '238px', width: '100%' }}
          />
        </Card>
      </div>
    );
  }
}
