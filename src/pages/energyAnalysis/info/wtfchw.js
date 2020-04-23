import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Form, Select, Button, DatePicker } from 'antd';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import style from './index.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;

@connect(({}) => ({}))
export default class Wtfchw extends Component {
  state = {
    date: [],
    time: '',
  };
  componentDidMount = () => {
    const { dispatch } = this.props;
    // dispatch({})
  };
  getLine = () => {
    const showValue = '11';
    const xValue = [1, 2, 3, 4, 5, 6];
    const yValue = [10, 20, 30, 40, 50, 60];
    const unitValue = 's';
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
        data: xValue,
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
          data: yValue,
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
  renderSimpleForm() {
    const {} = this.props;
    return (
      <Fragment>
        <Row gutter={20}>
          <Col span={9}>
            <div className={style.select}>
              <RangePicker onChange={this.onChangeDate} />
            </div>
          </Col>
          <Col span={6}>
            <div className={style.select}>
              <Select placeholder="时间间隔" onChange={() => this.onChange} />
            </div>
          </Col>
          <Col span={4}>
            <Button type="primary" onClick={this.handleSubmit}>
              查询
            </Button>
          </Col>
        </Row>
      </Fragment>
    );
  }
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
        <Card title="冷冻水输送系数(WTFchw)">
          {this.renderSimpleForm()}
          <ReactEcharts
            option={this.getLine()}
            theme="light"
            style={{ height: '200px', width: '100%' }}
          />
        </Card>
      </div>
    );
  }
}