import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Form, Select, Button, DatePicker } from 'antd';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import style from './index.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;

@connect(({ consumption }) => ({ consumption }))
export default class MonthComPare extends Component {
  state = {
    date: [],
    time: '',
  };
  componentWillMount = () => {
    const { dispatch } = this.props;
    // dispatch({})
  };
  getLine = () => {
    const {
      consumption: { monthValue1, monthValue2 },
    } = this.props;
    const showValue = ['今年每月能耗', '去年每月能耗'];
    const xValue = [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
    ];
    const unitValue = 'kWh';
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
        data: showValue,
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
        axisTick: { show: false },
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
          name: showValue[0],
          data: monthValue1,
          type: 'bar',
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
          name: showValue[1],
          data: monthValue2,
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#ff6a4f',
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
  // renderSimpleForm () {
  //   const {} = this.props
  //   return (
  //     <div style={{ marginLeft: 40 }}>
  //       <Fragment>
  //         <Row gutter={20}>
  //           <Col span={9}>
  //             <div className={style.select}>
  //               <RangePicker onChange={this.onChangeDate} />
  //             </div>
  //           </Col>
  //           {/* <Col span={6}>
  //             <div className={style.select}>
  //               <Input placeholder='时间间隔' onChange={this.onChangeTime} />
  //             </div>
  //           </Col> */}
  //           <Col span={4}>
  //             <Button type='primary' onClick={this.handleSubmit}>
  //               查询
  //             </Button>
  //           </Col>
  //         </Row>
  //       </Fragment>
  //     </div>
  //   )
  // }
  handleSubmit = () => {
    const { dispatch } = this.props;
  };

  onChangeDate = (date, dateString) => {
    this.setState({ date: dateString });
  };
  // onChangeTime = (value) => {
  //   const { dispatch } = this.props
  //   console.log(value)
  //   this.setState({})
  //   // dispatch({})
  // }
  render() {
    return (
      <div>
        <Card title="月用电量同比分析">
          {/* {this.renderSimpleForm()} */}
          <ReactEcharts
            option={this.getLine()}
            theme="light"
            style={{ height: '232px', width: '100%' }}
          />
        </Card>
      </div>
    );
  }
}
