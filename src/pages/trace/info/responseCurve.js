import React, { Component } from 'react';
import { Row, Col, Card, Select, Button, Statistic } from 'antd';
import ReactEcharts from 'echarts-for-react';
import style from './index.less';

const { Option } = Select;
export default class responseCurve extends Component {
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
  handleSubmit = () => {
    const { dispatch } = this.props;
  };
  onChange = (key, value) => {
    const { dispatch } = this.props;
    this.setState({});
    // dispatch({})
  };
  render() {
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
                      <Select placeholder="请选择策略" onChange={() => this.onChange} />
                    </Col>
                    <Col span={4}>
                      <Button type="primary" onClick={() => this.handleSubmit}>
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
              <Statistic title="SPI" value={93} suffix="" />
            </Row>
            <div style={{ marginTop: 17 }}>
              <Row>
                <Statistic title="PPI" value={93} suffix="" />
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
