import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Form, Select, Button, DatePicker } from 'antd';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import style from './index.less';
import moment from 'moment';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;

@connect(consumption => consumption)
export default class DayComPare extends Component {
  state = {};
  componentWillMount = () => {
    const { dispatch } = this.props;
    var date1 = moment().format('YYYY-MM-DD') + ' 00:00:00';
    var date2 =
      moment()
        .add('days', 1)
        .format('YYYY-MM-DD') + ' 00:00:00';
    dispatch({
      type: 'consumption/fetchDayValue',
      payload: { startTime: date1, endTime: date2 },
    });
  };
  getLine = () => {
    const {
      consumption: { dayValue1, dayValue2 },
    } = this.props;
    const showValue = ['This Month', 'Last Month'];
    const xValue = [
      '1st',
      '2nd',
      '3rd',
      '4th',
      '5th',
      '6th',
      '7th',
      '8th',
      '9th',
      '10th',
      '11th',
      '12th',
      '13th',
      '14th',
      '15th',
      '16th',
      '17th',
      '18th',
      '19th',
      '20th',
      '21th',
      '22th',
      '23th',
      '24th',
      '25th',
      '26th',
      '27th',
      '28th',
      '29th',
      '30th',
      '31th',
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
        boundaryGap: true,
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
          // data: dayValue1,
          data: [1965, 2216, 2158, 2094],
          type: 'bar',
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
          name: showValue[1],
          // data: dayValue2,
          data: [
            1659,
            1752,
            1845,
            1509,
            1689,
            1485,
            1756,
            1623,
            1659,
            1789,
            1829,
            1965,
            1859,
            2016,
            2169,
            2049,
            1986,
            2012,
            2059,
            1946,
            2016,
            1984,
            2169,
            2112,
            2096,
            2156,
            1987,
            1879,
            1956,
            2105,
            2086,
          ],
          type: 'bar',
          smooth: true,
          areaStyle: {},
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
  // renderSimpleForm() {
  //   const {} = this.props;
  //   return (
  //     <div style={{ marginLeft: 120 }}>
  //       <Fragment>
  //         <Row gutter={20}>
  //           <Col span={4}>
  //             <div className={style.select}>
  //               <RangePicker onChange={this.onChangeDate} />
  //             </div>
  //           </Col>
  //           <Col span={3}>
  //             <div className={style.select}>
  //               <Select placeholder="时间间隔" onChange={() => this.onChange} />
  //             </div>
  //           </Col>
  //           <Col span={2}>
  //             <Button type="primary" onClick={this.handleSubmit}>
  //               查询
  //             </Button>
  //           </Col>
  //         </Row>
  //       </Fragment>
  //     </div>
  //   );
  // }
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
        <Card title="Analysis Of Daily Electricity Consumption">
          {/* {this.renderSimpleForm()} */}
          <ReactEcharts
            option={this.getLine()}
            theme="light"
            style={{ height: '240px', width: '100%' }}
          />
        </Card>
      </div>
    );
  }
}
