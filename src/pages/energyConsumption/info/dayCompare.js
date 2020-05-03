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
    const showValue = ['本月每日能耗', '上月每日能耗'];
    const xValue = [
      '1号',
      '2号',
      '3号',
      '4号',
      '5号',
      '6号',
      '7号',
      '8号',
      '9号',
      '10号',
      '11号',
      '12号',
      '13号',
      '14号',
      '15号',
      '16号',
      '17号',
      '18号',
      '19号',
      '20号',
      '21号',
      '22号',
      '23号',
      '24号',
      '25号',
      '26号',
      '27号',
      '28号',
      '29号',
      '30号',
      '31号',
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
          name: showValue[0],
          data: dayValue1,
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
          name: showValue[1],
          data: dayValue2,
          type: 'line',
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
        <Card title="日用电量环比分析">
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
