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
        title: '设备名称',
        dataIndex: 'deviceName',
        key: 'deviceName',
      },
      {
        title: '当日用电',
        dataIndex: 'dayElec',
        key: 'dayElec',
        // render: row => (
        //   <div>
        //     {row.dayElectricity}
        //     kWh
        //   </div>
        // ),
      },
      {
        title: '当月用电',
        dataIndex: 'monthElec',
        key: 'monthElec',
        // render: row => (
        //   <div>
        //     {row.monthElectricity}
        //     kWh
        //   </div>
        // ),
      },
      {
        title: '占比',
        dataIndex: 'proportion',
        key: 'proportion',
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
        deviceName: '冷冻水泵',
        dayElec: '432kWh',
        monthElec: '1763kWh',
        proportion: '26%',
      },
      {
        key: '2',
        deviceName: '冷却水泵',
        dayElec: '367kWh',
        monthElec: '1329kWh',
        proportion: '20%',
      },
      {
        key: '3',
        deviceName: '冷却塔风机',
        dayElec: '165kWh',
        monthElec: '752kWh',
        proportion: '11%',
      },
      {
        key: '4',
        deviceName: '冷水机组',
        dayElec: '786kWh',
        monthElec: '2916kWh',
        proportion: '43%',
      },
    ];
    return (
      <div className={style.card}>
        <Card title="分类负荷对比" bodyStyle={{ height: 280 }}>
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
