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
    const showValue = ['今年每月能耗', '去年每月能耗'];
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
          data: yValue,
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#4F12EE',
              lineStyle: {
                width: 2,
                type: 'solid', // 'dotted'虚线 'solid'实线
              },
            },
          },
        },
        {
          name: showValue[1],
          data: yValue,
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
