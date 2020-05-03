import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Form, Select, Button, DatePicker } from 'antd';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import style from './index.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;

@connect(({}) => ({}))
export default class LoadContrast extends Component {
  state = {
    date: [],
    time: '',
  };
  componentDidMount = () => {
    const { dispatch } = this.props;
    // dispatch({})
  };
  getLine = () => {
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
          name: '访问来源',
          type: 'pie',
          radius: '90%',
          center: ['50%', '50%'],
          data: [
            { value: 335, name: '策略一' },
            { value: 310, name: '策略二' },
            { value: 274, name: '策略三' },
            { value: 235, name: '策略四' },
            { value: 400, name: '策略五' },
            { value: 500, name: '策略六' },
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
          itemStyle: {
            color: '#41a2f4',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },

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

  handleSubmit = () => {
    const { dispatch } = this.props;
  };

  onChangeDate = () => {
    const { dispatch } = this.props;
  };
  onChange = (key, value) => {
    const { dispatch } = this.props;
    this.setState({});
    // dispatch({})
  };
  render() {
    return (
      <div>
        <Card title="各策略响应负荷占比">
          <ReactEcharts
            option={this.getLine()}
            theme="light"
            style={{ height: '251px', width: '100%' }}
          />
        </Card>
      </div>
    );
  }
}
