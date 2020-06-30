import React, { Component } from 'react';
import { Row, Col, Card, Select, Button, Statistic } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { connect } from 'dva';
import style from './index.less';

const { Option } = Select;

@connect(trace => trace)
export default class responseCurve extends Component {
  state = {
    systemId: '',
  };

  getLine = () => {
    const showValue = '11';
    const xValue = [1, 2, 3, 4, 5, 6];
    const yValue = [10, 20, 30, 40, 50, 60];
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
      legend: {
        data: ['Baseline Load', 'Actual Load', 'Response Load'],
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
        boundaryGap: true,
        // data: xValue,
        data: [
          '12:00',
          '12:10',
          '12:20',
          '12:30',
          '12:40',
          '12:50',
          '13:00',
          '13:10',
          '13:20',
          '13:30',
          '13:40',
          '13:50',
          '14:00',
        ],
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
        // {
        //   name: showValue,
        //   data: yValue,

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
          name: 'Baseline Load',
          type: 'line',
          areaStyle: {},
          data: [1250, 1196, 1284, 1263, 1225, 1185, 1194, 1236, 1201, 1183, 1214, 1252, 1200],
        },
        {
          name: 'Actual Load',
          type: 'line',
          areaStyle: {},
          data: [1040, 981, 1048, 1021, 977, 936, 957, 1016, 976, 962, 988, 1034, 984],
        },
        {
          name: 'Response Load',
          type: 'bar',
          // yAxisIndex: 1,
          data: [210, 215, 236, 242, 248, 246, 237, 220, 225, 221, 226, 218, 216],
        },
      ],
    };
    return option;
  };
  handleSubmit = () => {
    const {
      dispatch,
      trace: { responseId },
    } = this.props;
    const { systemId } = this.state;
    var date = localStorage.getItem('searchTime');
    dispatch({
      type: 'trace/fetchLineValue',
      payload: { responseDate: date, systemId: systemId, responseId: responseId },
    });
  };
  onChange = value => {
    this.setState({ systemId: value });
  };
  render() {
    const {
      trace: { PPI, SPI },
    } = this.props;
    return (
      <div className={style.buttom}>
        <Row gutter={16}>
          <Col span={15}>
            <Card
              title={
                <div>
                  <Row gutter={16}>
                    <Col span={4}>
                      <span>Response Curve</span>
                    </Col>
                    <Col span={5}>
                      <Select
                        className={style.select}
                        placeholder="Please select strategy"
                        onChange={() => this.onChange}
                      />
                    </Col>
                    <Col span={3}>
                      <Button type="primary" onClick={() => this.handleSubmit}>
                        Search
                      </Button>
                    </Col>
                  </Row>
                </div>
              }
            >
              <ReactEcharts
                option={this.getLine()}
                theme="light"
                style={{ height: '280px', width: '100%' }}
              />
            </Card>
          </Col>
          <Col span={3}>
            <Row>
              <Statistic title="SPI" value={'115%'} suffix="" />
            </Row>
            <div style={{ marginTop: 17 }}>
              <Row>
                <Statistic title="PPI" value={'93%'} suffix="" />
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
