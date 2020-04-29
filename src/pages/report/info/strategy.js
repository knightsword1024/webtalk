import React, { Component } from 'react';
import { Row, Col, Card, DatePicker, Button, Table, Form, Input, Modal, Select, Radio } from 'antd';
import style from './index.less';
import { connect } from 'dva';

const FormItem = Form.Item;
const Option = Select.Option;
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
//   },
//   getCheckboxProps: record => ({
//     disabled: record.name === 'Disabled User', // Column configuration not to be checked
//     name: record.name,
//   }),
// }
const data = [
  {
    key: '0',
    strategyId: '策略一',
    strategyName: '关停主机和对应的冷却系统',
  },
  {
    key: '1',
    strategyId: '策略二',
    strategyName: '提高冷水机组的出水温度',
  },
  {
    key: '2',
    strategyId: '策略三',
    strategyName: '预制冷',
  },
  {
    key: '3',
    strategyId: '策略四',
    strategyName: '关闭新风系统',
  },
  {
    key: '4',
    strategyId: '策略五',
    strategyName: '提高空调末端设定温度',
  },
  {
    key: '5',
    strategyId: '策略六',
    strategyName: '关闭公共照明',
  },
];

//编辑响应策略
@connect(({ strategy }) => ({ strategy }))
@Form.create()
class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
    const { form, rowValue, modalVisible, handleModalVisible, onChangeModalValue } = this.props;
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
            <FormItem label="办公" labelCol={{ span: 9 }} wrapperCol={{ span: 12 }}>
              {form.getFieldDecorator('engineB')(
                <div className={style.select}>
                  <Select
                    placeholder="请选择数量"
                    onChange={event => {
                      onChangeModalValue('engineB', event);
                    }}
                  >
                    <Option key={1} value={1}>
                      1
                    </Option>
                    <Option key={2} value={2}>
                      2
                    </Option>
                    <Option key={3} value={3}>
                      3
                    </Option>
                  </Select>
                  <span>台</span>
                </div>
              )}
            </FormItem>
            <FormItem label="商用" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('engineS')(
                <div className={style.select}>
                  <Select
                    placeholder="请选择数量"
                    // onChange={this.onChangeModalValue.bind(this, 'engineS')}
                  />
                  <span>台</span>
                </div>
              )}
            </FormItem>
          </div>
        ) : (
          <div />
        )}
        {rowValue.key == 1 ? (
          <div>
            <FormItem label="办公" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('outTemB')(
                <div className={style.select}>
                  <Select
                    placeholder="请选择温度"
                    // onChange={this.onChangeModalValue.bind(this, 'outTemB')}
                  />
                  <span>℃</span>
                </div>
              )}
            </FormItem>
            <FormItem label="商用" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('outTemS')(
                <div className={style.select}>
                  <Select
                    placeholder="请选择温度"
                    // onChange={this.onChangeModalValue.bind(this, 'outTemS')}
                  />
                  <span>℃</span>
                </div>
              )}
            </FormItem>
          </div>
        ) : (
          <div />
        )}
        {rowValue.key == 2 ? (
          <div>
            <FormItem label="预制冷时间" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('presetTime')(
                <div className={style.input}>
                  <Input
                    placeholder="请输入时间"
                    // onChange={this.onChangeModalValue.bind(this, 'presetTime')}
                  />
                  <span>分钟</span>
                </div>
              )}
            </FormItem>
            <div style={{ marginLeft: 95 }}>提高出水温度</div>
            <FormItem label="办公" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('presetOutTemB')(
                <div className={style.select}>
                  <Select
                    placeholder="请选择温度"
                    // onChange={this.onChangeModalValue.bind(this, 'presetOutTemB')}
                  />
                  <span>℃</span>
                </div>
              )}
            </FormItem>
            <FormItem label="商用" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('presetOutTemS')(
                <div className={style.select}>
                  <Select
                    placeholder="请选择温度"
                    // onChange={this.onChangeModalValue.bind(this, 'presetOutTemS')}
                  />
                  <span>℃</span>
                </div>
              )}
            </FormItem>
            <div style={{ marginLeft: 95 }}>末端设定温度</div>
            <FormItem label="办公" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('presetEndTemB')(
                <div className={style.select}>
                  <Select
                    placeholder="请选择温度"
                    // onChange={this.onChangeModalValue.bind(this, 'presetEndTemB')}
                  />
                  <span>℃</span>
                </div>
              )}
            </FormItem>
            <FormItem label="商用" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('presetEndTemS')(
                <div className={style.select}>
                  <Select
                    placeholder="请选择温度"
                    // onChange={this.onChangeModalValue.bind(this, 'presetEndTemS')}
                  />
                  <span>℃</span>
                </div>
              )}
            </FormItem>
          </div>
        ) : (
          <div />
        )}
        {rowValue.key == 3 ? (
          <Radio.Group
            value={1}
            // onChange={this.onChangeModalValue.bind(this, 'newTrand')}
          >
            <Radio value={1}>办公</Radio>
            <Radio value={2}>商用</Radio>
          </Radio.Group>
        ) : (
          <div />
        )}
        {rowValue.key == 4 ? (
          <div>
            <FormItem label="办公" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('endTemB')(
                <div className={style.select}>
                  <Select
                    placeholder="请选择温度"
                    // onChange={this.onChangeModalValue.bind(this, 'endTemB')}
                  />
                  <span>℃</span>
                </div>
              )}
            </FormItem>
            <FormItem label="商用" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('endTemS')(
                <div className={style.select}>
                  <Select
                    placeholder="请选择温度"
                    // onChange={this.onChangeModalValue.bind(this, 'endTemS')}
                  />
                  <span>℃</span>
                </div>
              )}
            </FormItem>
          </div>
        ) : (
          <div />
        )}
        {rowValue.key == 5 ? (
          <div>
            <Radio.Group
              value={1}
              // onChange={this.onChangeModalValue.bind(this, 'lighting')}
            >
              <Radio value={1}>办公</Radio>
              <Radio value={2}>商用</Radio>
            </Radio.Group>
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

    presetTime: 0,
    presetOutTemB: 0,
    presetOutTemS: 0,
    presetEndTemB: 0,
    presetEndTemS: 0,

    newTrand: 0,

    endTemB: 0,
    endTemS: 0,

    lighting: 0,
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

  onChangeModalValue = (key, value) => {
    switch (key) {
      case 'engineB': {
        this.setState({
          engineB: value,
        });
        break;
      }

      case 'engineS': {
        this.setState({
          engineS: value,
        });
        break;
      }
      case 'outTemB': {
        this.setState({
          outTemB: value,
        });
        break;
      }
      case 'outTemS': {
        this.setState({
          outTemS: value,
        });
        break;
      }
      case 'presetTime': {
        this.setState({
          presetTime: value,
        });
        break;
      }
      case 'presetOutTemB': {
        this.setState({
          presetOutTemB: value,
        });
        break;
      }
      case 'presetOutTemS': {
        this.setState({
          presetOutTemS: value,
        });
        break;
      }
      case 'presetEndTemB': {
        this.setState({
          presetEndTemB: value,
        });
        break;
      }
      case 'presetEndTemS': {
        this.setState({
          presetEndTemS: value,
        });
        break;
      }
      case 'newTrand': {
        this.setState({
          newTrand: value,
        });
        break;
      }
      case 'endTemB': {
        this.setState({
          endTemB: value,
        });
        break;
      }
      case 'endTemS': {
        this.setState({
          endTemS: value,
        });
        break;
      }
      case 'lighting': {
        this.setState({
          lighting: value,
        });
        break;
      }
    }
  };

  handleModalVisible = (state, rowValue) => {
    this.setState({
      modalVisible: !!state,
      rowValue,
    });
  };

  handleCalculate = () => {
    const {
      selectedRowKeys,
      engineB,
      engineS,
      outTemB,
      outTemS,
      presetTime,
      presetOutTemB,
      presetOutTemS,
      presetEndTemB,
      presetEndTemS,
      newTrand,
      endTemB,
      endTemS,
      lighting,
    } = this.state;
    const { dispatch } = this.props;
    var sendValue = {};
    for (let i of selectedRowKeys) {
      if (i == 0) {
        sendValue = { engineB: engineB, engineS: engineS };
        console.log(sendValue);
      }
      if (i == 1) {
        sendValue = { ...outTemB, ...outTemS };
      }
      if (i == 2) {
        sendValue = {
          ...presetTime,
          ...presetOutTemB,
          ...presetOutTemS,
          ...presetEndTemB,
          ...presetEndTemS,
        };
      }
      if (i == 3) {
        sendValue = { ...newTrand };
      }
      if (i == 4) {
        sendValue = { ...endTemB, ...endTemS };
      }
      if (i == 5) {
        sendValue = { ...lighting };
      }
      console.log(sendValue);
      sendValue = {};
    }
  };

  render() {
    const { value, respondValue, selectedRowKeys, selectRow, modalVisible, rowValue } = this.state;
    const parentMethods = {
      handleModalVisible: this.handleModalVisible,
      onChangeModalValue: this.onChangeModalValue,
    };
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
                  <Button type="primary" onClick={this.handleCalculate.bind(this)}>
                    计算
                  </Button>
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
