import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Form, Select, Button, DatePicker } from 'antd';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import style from './index.less';
import moment from 'moment';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;

@connect(({ analysis }) => ({ analysis }))
export default class Wtfchw extends Component {
  state = {
    date1: '',
    date2: '',
  };
  componentWillMount = () => {
    const { dispatch } = this.props;
    var date1 = moment().format('YYYY-MM-DD') + ' 00:00:00';
    var date2 =
      moment()
        .subtract('days', 30)
        .format('YYYY-MM-DD') + ' 00:00:00';
    dispatch({
      type: 'analysis/fetchWTFchwValue',
      payload: { startTime: date2, endTime: date1 },
    });
  };
  getLine = () => {
    const {
      analysis: { WTFchwxValue, WTFchwyValueOffice, WTFchwyValueBusi },
    } = this.props;
    const unitValue = '';
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
      legend: {
        data: ['商业WTFchw', '办公WTFchw'],
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
        data: WTFchwxValue,
        axisLabel: {
          show: true,
          showMinLabel: true,
          showMaxLabel: true,
          // formatter: `{value}${'号'}`,
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
      series: [
        {
          name: '办公WTFchw',
          data: WTFchwyValueOffice,
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
        {
          name: '商业WTFchw',
          data: WTFchwyValueBusi,
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
    const { date1, date2 } = this.state;
    dispatch({
      type: 'analysis/fetchWTFchwValue',
      payload: { startTime: date1, endTime: date2 },
    });
  };

  onChangeDate = (data, datastring) => {
    this.setState({
      date1: datastring[0] + ' 00:00:00',
      date2: datastring[1] + ' 00:00:00',
    });
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
