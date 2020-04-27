import React, { Component } from 'react';
import { Card, Table } from 'antd';
import { connect } from 'dva';
@connect(consumption => consumption)
export default class LoadContrast extends Component {
  componentWillMount = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'consumption/fetchTableValue',
      payload: {},
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
        dataIndex: 'dayElectricity',
      },
      {
        title: '当月用电',
        dataIndex: 'monthElectricity',
      },
      {
        title: '占比',
        dataIndex: 'proportion',
      },
    ];
  }

  render() {
    const {
      consumption: { tableValue },
    } = this.props;
    return (
      <div>
        <Card title="分类负荷对比" bodyStyle={{ height: 280 }}>
          <Table
            rowKey={record => record.id}
            columns={this.createColumn()}
            dataSource={tableValue}
          />
        </Card>
      </div>
    );
  }
}
