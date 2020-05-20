import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Form, Select, Button, DatePicker } from 'antd';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import style from './index.less';
import moment from 'moment';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const deviceName = {
  C_6001_AV_0000: '办公1#机组',
  C_6001_AV_0001: '办公2#机组',
  C_6001_AV_0002: '办公3#机组',
  C_6001_AV_0003: '商业1#机组',
  C_6001_AV_0004: '商业2#机组',
  C_6001_AV_0005: '商业3#机组',
  C_6001_AV_0006: '商业4#机组',
};

@connect(({ analysis }) => ({ analysis }))
export default class Cop extends Component {
  state = {
    classify: 1,
    startTime: '',
    endTime: '',
  };
  componentWillMount = () => {
    const { dispatch } = this.props;
    var date1 = moment().format('YYYY-MM-DD') + ' 00:00:00';
    var date2 =
      moment()
        .subtract('days', 30)
        .format('YYYY-MM-DD') + ' 00:00:00';
    dispatch({
      type: 'analysis/fetchCOPValue',
      payload: { startTime: date2, endTime: date1, classify: 1 },
    });
  };
  getLine = () => {
    const {
      analysis: { COPxValue, COPyValue },
    } = this.props;
    const showValue = 'COP';
    const unitValue = '';
    var seriesValue = [];
    for (let i in COPyValue) {
      seriesValue.push({
        name: deviceName[COPyValue[i].key],
        data: COPyValue[i].value,
        type: 'line',
        smooth: true,
        areaStyle: {},
        itemStyle: {
          normal: {
            lineStyle: {
              width: 2,
              type: 'solid', // 'dotted'虚线 'solid'实线
            },
          },
        },
      });
    }
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
        data: COPxValue,
        axisLabel: {
          show: true,
          showMinLabel: true,
          showMaxLabel: true,
          formatter: `{value}${'号'}`,
        },
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
      series: seriesValue,
    };
    return option;
  };

  onChange = value => {
    this.setState({
      classify: value,
    });
  };

  renderSimpleForm() {
    const { classify } = this.state;
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
              <Select placeholder="办公/商用" onChange={this.onChange} defaultValue={classify}>
                <Option key={1} value={1}>
                  办公
                </Option>
                <Option key={2} value={2}>
                  商用
                </Option>
              </Select>
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
    const { startTime, endTime, classify } = this.state;
    dispatch({
      type: 'analysis/fetchCOPValue',
      payload: { startTime: startTime, endTime: endTime, classify: classify },
    });
  };

  onChangeDate = (date, dataString) => {
    this.setState({
      startTime: dataString[0] + '00:00:00',
      endTime: dataString[1] + '00:00:00',
    });
  };

  render() {
    return (
      <div>
        <Card title="冷水机组运行效率(COP)">
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
