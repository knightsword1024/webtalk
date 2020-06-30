import React, { Component } from 'react';
import { Card, Table } from 'antd';
import { connect } from 'dva';
import style from './index.less';
import moment from 'moment';

// let statusPassTime = moment(parseInt(entity.statusPassTime)).format('YYYY-MM-DD') //let 格式化后的日期 = moment(parseInt(“日期的字符串”)).format('YYYY-MM-DD');

@connect(consumption => consumption)
export default class LoadContrast extends Component {
  componentWillMount = () => {
    const { dispatch } = this.props;
    var today = new Date();

    var date1 = moment().format('YYYY-MM-DD') + ' 00:00:00';
    var date2 =
      moment()
        .add('days', 1)
        .format('YYYY-MM-DD') + ' 00:00:00';
    dispatch({
      type: 'consumption/fetchTableValue',
      payload: { startTime: date1, endTime: date2 },
    });
  };
  createColumn() {
    return [
      {
        title: 'Device Name',
        dataIndex: 'deviceName',
        key: 'deviceName',
      },
      {
        title: 'Daily Electricity',
        dataIndex: 'dayElec',
        key: 'dayElec',
        align: 'center',
        width: 130,
      },
      {
        title: 'Monthly Electricity',
        dataIndex: 'monthElec',
        key: 'monthElec',
        align: 'center',
        width: 130,
      },
      {
        title: 'Proportion',
        dataIndex: 'proportion',
        key: 'proportion',
        align: 'center',
        // render: row => (<div>{row.proportion}%</div>),
      },
    ];
  }

  render() {
    // const {
    //   consumption: { tableValue },
    // } = this.props;
    const tableValue = [
      {
        key: '1',
        deviceName: 'Chilled water pump',
        dayElec: '432kWh',
        monthElec: '1763kWh',
        proportion: '26%',
      },
      {
        key: '2',
        deviceName: 'Cooling water pump',
        dayElec: '367kWh',
        monthElec: '1329kWh',
        proportion: '20%',
      },
      {
        key: '3',
        deviceName: 'Cooling tower fan',
        dayElec: '165kWh',
        monthElec: '752kWh',
        proportion: '11%',
      },
      {
        key: '4',
        deviceName: 'Water cooling unit ',
        dayElec: '786kWh',
        monthElec: '2916kWh',
        proportion: '43%',
      },
    ];
    return (
      <div className={style.card}>
        <Card title="Classification Load Comparison" bodyStyle={{ height: 280 }}>
          <Table
            rowKey={record => record.id}
            columns={this.createColumn()}
            dataSource={tableValue}
            pagination={false}
          />
        </Card>
      </div>
    );
  }
}
