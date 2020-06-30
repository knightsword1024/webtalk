import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Form, Select, Button, DatePicker } from 'antd';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import style from './index.less';
import moment from 'moment';

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
    var date1 = moment().format('YYYY-MM') + '-01 00:00:00';
    var date2 =
      moment()
        .add('months', 1)
        .format('YYYY-MM') + '-01 00:00:00';

    dispatch({
      type: 'consumption/fetchMonthValue',
      payload: { startTime: date1, endTime: date2 },
    });
  };
  getLine = () => {
    const {
      consumption: { monthValue1, monthValue2 },
    } = this.props;
    const showValue = ['This Year', 'Last Year'];
    const xValue = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
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
        name: 'Electricity/kWh',
        axisLabel: {
          show: true,
          showMinLabel: true,
          showMaxLabel: true,
          // formatter: `{value}${unitValue}`,
        },
      },
      series: [
        {
          name: showValue[0],
          // data: monthValue1,
          data: [9864, 4265, 8972, 8843, 10214, 5517],
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
          // data: monthValue2,
          data: [10240, 4853, 8250, 9156, 10305, 11579],
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
        <Card title="Analysis Of Monthly Electricity Consumption">
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
