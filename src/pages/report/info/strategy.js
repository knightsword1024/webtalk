import React, { Component } from 'react';
import { Row, Col, Card, DatePicker, Button, Table, Form, Input } from 'antd';
import style from './index.less';

const FormItem = Form.Item;
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
const data = [
  {
    key: '1',
    strategyId: '策略一',
    strategyName: '关停主机和对应的冷却系统',
  },
  {
    key: '2',
    strategyId: '策略二',
    strategyName: '提高冷水机组的出水温度',
  },
  {
    key: '3',
    strategyId: '策略三',
    strategyName: '预制冷',
  },
  {
    key: '4',
    strategyId: '策略四',
    strategyName: '关闭新风系统',
  },
  {
    key: '5',
    strategyId: '策略五',
    strategyName: '提高空调末端设定温度',
  },
  {
    key: '6',
    strategyId: '策略六',
    strategyName: '关闭公共照明',
  },
];

export default class Detail extends Component {
  state = {
    value: 1,
    respondValue: 0,
    selectedRowKeys: [],
  };
  createColumn() {
    return [
      {
        title: '策略编号',
        dataIndex: 'strategyId',
        width: 100,
      },
      {
        title: '策略名称',
        dataIndex: 'strategyName',
      },
      {
        title: '执行参数',
        render: row => <a onClick={() => this.handleModalVisible(true, row, 'edit')}>编辑</a>,
        width: 100,
      },
    ];
  }

  render() {
    const { value, respondValue, selectedRowKeys } = this.state;
    return (
      <div className={style.strategy}>
        <Card
          title={
            <div>
              <Row gutter={16}>
                <Col span={11}>
                  <span>实施细节</span>
                </Col>
                <Col span={7}>
                  {value ? (
                    <div>
                      响应能力:
                      {respondValue}
                      kW
                    </div>
                  ) : (
                    <div />
                  )}
                </Col>
              </Row>
            </div>
          }
        >
          <Form labelCol={{ span: 3 }} wrapperCol={{ span: 21 }} name="basic">
            <Form.Item label="响应预估：" name="响应预估">
              <Row gutter={5}>
                <Col span={6}>
                  <DatePicker />
                </Col>
                <Col span={6}>
                  <Input placeholder="请输入时间" />
                </Col>
                <Col span={6}>
                  <span>例如:12:00-13:00</span>
                </Col>
                <Col span={5}>
                  <Button type="primary">计算</Button>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item label="执行策略：" name="执行策略">
              <Row gutter={5}>
                <Col span={6}>
                  <DatePicker />
                </Col>
                <Col span={6}>
                  <Input placeholder="请输入时间" />
                </Col>
                <Col span={6}>
                  <span>例如:12:00-13:00</span>
                </Col>
                <Col span={5}>
                  <Button type="primary">执行</Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
          <Table
            rowSelection={{
              selectedRowKeys,
              onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                  selectRow: selectedRows,
                  selectedRowKeys: selectedRowKeys,
                });
              },
            }}
            rowKey={record => record.id}
            columns={this.createColumn()}
            dataSource={data}
            scroll={{ y: 105 }}
          />
        </Card>
      </div>
    );
  }
}
