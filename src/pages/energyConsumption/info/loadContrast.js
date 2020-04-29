import React, { Component } from 'react';
import { Card, Table } from 'antd';
import { connect } from 'dva';
import style from './index.less';
@connect(consumption => consumption)
export default class LoadContrast extends Component {
  componentWillMount = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'consumption/fetchTableValue',
      payload: { startTime: '2019-01-01', endTime: '2019-01-02' },
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
        render: row => <div>{row.proportion}%</div>,
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
