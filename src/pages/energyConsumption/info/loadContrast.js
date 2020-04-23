import React, { Component } from 'react';
import { Card, Table } from 'antd';

export default class LoadContrast extends Component {
  createColumn() {
    return [
      {
        title: '设备名称',
        dataIndex: 'locationid',
      },
      {
        title: '当日用电',
        dataIndex: 'location1',
      },
      {
        title: '当月用电',
        dataIndex: 'location2',
      },
      {
        title: '占比',
        dataIndex: 'location3',
      },
    ];
  }

  render() {
    return (
      <div>
        <Card title="分类负荷对比" bodyStyle={{ height: 280 }}>
          <Table
            rowKey={record => record.id}
            columns={this.createColumn()}
            //   dataSource={locationList}
          />
        </Card>
      </div>
    );
  }
}
