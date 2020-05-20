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
      },
      {
        title: '当日用电',
        render: row => (
          <div>
            {row.dayElectricity}
            kWh
          </div>
        ),
      },
      {
        title: '当月用电',
        render: row => (
          <div>
            {row.monthElectricity}
            kWh
          </div>
        ),
      },
      {
        title: '占比',
        dataIndex: 'proportion',
        // render: row => <div>{row.proportion}%</div>,
      },
    ];
  }

  render() {
    const {
      consumption: { tableValue },
    } = this.props;
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
