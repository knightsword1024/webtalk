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
    const {
      trace: { powerxValue, baseLinePower, realPower, realCutPower },
    } = this.props;
    const unitValue = 'kw';
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
        data: ['基线负荷', '实际负荷', '响应负荷'],
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
        data: powerxValue,
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
          name: '基线负荷',
          data: baseLinePower,
          type: 'line',
          smooth: true,
          stack: '总量',
          areaStyle: {},
          itemStyle: {
            normal: {
              // color: '#4FC8FF',
              lineStyle: {
                width: 2,
                type: 'solid', // 'dotted'虚线 'solid'实线
              },
            },
          },
        },
        {
          name: '实际负荷',
          data: realPower,
          type: 'line',
          smooth: true,
          stack: '总量',
          areaStyle: {},
          itemStyle: {
            normal: {
              // color: '#4FC8FF',
              lineStyle: {
                width: 2,
                type: 'solid', // 'dotted'虚线 'solid'实线
              },
            },
          },
        },
        {
          name: '响应负荷',
          data: realCutPower,
          type: 'line',
          smooth: true,
          stack: '总量',
          areaStyle: {},
          itemStyle: {
            normal: {
              // color: '#4FC8FF',
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
                      <span>响应曲线</span>
                    </Col>
                    <Col span={5}>
                      <Select placeholder="请选择策略" onChange={this.onChange}>
                        <Option key={'all'} value={''}>
                          全部
                        </Option>
                        <Option key={0} value={0}>
                          策略一
                        </Option>
                        <Option key={1} value={1}>
                          策略二
                        </Option>
                        <Option key={2} value={2}>
                          策略三
                        </Option>
                        <Option key={3} value={3}>
                          策略四
                        </Option>
                        <Option key={4} value={4}>
                          策略五
                        </Option>
                        <Option key={5} value={5}>
                          策略六
                        </Option>
                      </Select>
                    </Col>
                    <Col span={4}>
                      <Button type="primary" onClick={this.handleSubmit}>
                        查询
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
              <Statistic title="SPI" value={PPI} suffix="" />
            </Row>
            <div style={{ marginTop: 17 }}>
              <Row>
                <Statistic title="PPI" value={SPI} suffix="" />
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
