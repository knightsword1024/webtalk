import React, { Component } from 'react';
import { Row, Col, Card, DatePicker, Button, Table, Form, Input, Modal, Select } from 'antd';
import style from './index.less';
import { connect } from 'dva';

const FormItem = Form.Item;
const Option = Select.Option;
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

//编辑响应策略
@connect(({ strategy }) => ({ strategy }))
@Form.create()
class CreateForm extends Component {
  okHandle = e => {
    const {
      form,
      handleModalVisible,
      rowValue,
      // dispatch
    } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const values = {
        ...fieldsValue,
      };
      // dispatch({})
      handleModalVisible(false, '');
    });
  };

  render() {
    const { form, rowValue, modalVisible, handleModalVisible } = this.props;
    return (
      <Modal
        title={'请选择要设置的参数'}
        visible={modalVisible}
        onCancel={() => {
          handleModalVisible(false, '');
        }}
        onOk={() => this.okHandle()}
        destroyOnClose
      >
        {rowValue.key == 0 ? (
          <div>
            <FormItem label="办公" labelCol={{ span: 7 }} wrapperCol={{ span: 15 }}>
              {form.getFieldDecorator('engineB')(<Select placeholder="请选择数量" />)}
            </FormItem>
            <FormItem label="商用" labelCol={{ span: 7 }} wrapperCol={{ span: 15 }}>
              {form.getFieldDecorator('engineS')(<Select placeholder="请选择数量" />)}
            </FormItem>
          </div>
        ) : (
          <div />
        )}
        {rowValue.key == 1 ? (
          <div>
            <FormItem label="办公" labelCol={{ span: 7 }} wrapperCol={{ span: 15 }}>
              {form.getFieldDecorator('outTemB')(<Select placeholder="请选择温度" />)}
            </FormItem>
            <FormItem label="商用" labelCol={{ span: 7 }} wrapperCol={{ span: 15 }}>
              {form.getFieldDecorator('outTemS')(<Select placeholder="请选择温度" />)}
            </FormItem>
          </div>
        ) : (
          <div />
        )}
      </Modal>
    );
  }
}

export default class Detail extends Component {
  state = {
    value: 1,
    respondValue: 0,
    selectedRowKeys: [],
    selectRow: [],
    rowValue: [],
    modalVisible: false,

    engineB: 0,
    engineS: 0,

    outTemB: 0,
    outTemS: 0,
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
        render: row => <a onClick={() => this.handleModalVisible(true, row)}>编辑</a>,
        width: 100,
      },
    ];
  }

  handleModalVisible = (state, rowValue) => {
    this.setState({
      modalVisible: !!state,
      rowValue,
    });
  };

  render() {
    const { value, respondValue, selectedRowKeys, selectRow, modalVisible, rowValue } = this.state;
    const parentMethods = {
      handleModalVisible: this.handleModalVisible,
      // handleSearch: this.handleSearch,
    };
    return (
      <div className={style.strategy}>
        {console.log(selectedRowKeys)}
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
            pagination={false}
            rowKey={record => record.id}
            columns={this.createColumn()}
            dataSource={data}
            scroll={{ y: 167 }}
          />
        </Card>
        {modalVisible && (
          <CreateForm modalVisible={modalVisible} rowValue={rowValue} {...parentMethods} />
        )}
      </div>
    );
  }
}
