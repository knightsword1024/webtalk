import React, { Component } from 'react';
import { Row, Col, Card, DatePicker, Button, Table, Form, Input, Modal, Select, Radio } from 'antd';
import style from './index.less';
import { connect } from 'dva';

const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;

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
@connect(({ response }) => ({ response }))
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
    const {
      form,
      rowValue,
      modalVisible,
      handleModalVisible,
      onChangeModalValue,
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
    } = this.props;
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
                    defaultValue={engineB}
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
                    defaultValue={engineS}
                    onChange={event => {
                      onChangeModalValue('engineS', event);
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
                    <Option key={4} value={4}>
                      4
                    </Option>
                  </Select>
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
                    defaultValue={outTemB}
                    onChange={event => {
                      onChangeModalValue('outTemB', event);
                    }}
                  >
                    <Option key={1} value={7}>
                      7
                    </Option>
                    <Option key={2} value={8}>
                      8
                    </Option>
                    <Option key={3} value={9}>
                      9
                    </Option>
                    <Option key={4} value={10}>
                      10
                    </Option>
                    <Option key={5} value={11}>
                      11
                    </Option>
                    <Option key={6} value={12}>
                      12
                    </Option>
                  </Select>
                  <span>℃</span>
                </div>
              )}
            </FormItem>
            <FormItem label="商用" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('outTemS')(
                <div className={style.select}>
                  <Select
                    placeholder="请选择温度"
                    defaultValue={outTemS}
                    onChange={event => {
                      onChangeModalValue('outTemS', event);
                    }}
                  >
                    <Option key={1} value={7}>
                      7
                    </Option>
                    <Option key={2} value={8}>
                      8
                    </Option>
                    <Option key={3} value={9}>
                      9
                    </Option>
                    <Option key={4} value={10}>
                      10
                    </Option>
                    <Option key={5} value={11}>
                      11
                    </Option>
                    <Option key={6} value={12}>
                      12
                    </Option>
                  </Select>
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
                <div className={style.select}>
                  <Select
                    placeholder="请选择时间"
                    defaultValue={presetTime}
                    onChange={event => {
                      onChangeModalValue('presetTime', event);
                    }}
                  >
                    <Option key={1} value={10}>
                      10
                    </Option>
                    <Option key={2} value={30}>
                      30
                    </Option>
                    <Option key={3} value={60}>
                      60
                    </Option>
                  </Select>
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
                    defaultValue={presetOutTemB}
                    onChange={event => {
                      onChangeModalValue('presetOutTemB', event);
                    }}
                  >
                    <Option key={4} value={7}>
                      7
                    </Option>
                    <Option key={5} value={8}>
                      8
                    </Option>
                    <Option key={6} value={9}>
                      9
                    </Option>
                    <Option key={7} value={10}>
                      10
                    </Option>
                    <Option key={8} value={11}>
                      11
                    </Option>
                    <Option key={9} value={12}>
                      12
                    </Option>
                  </Select>
                  <span>℃</span>
                </div>
              )}
            </FormItem>
            <FormItem label="商用" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('presetOutTemS')(
                <div className={style.select}>
                  <Select
                    placeholder="请选择温度"
                    defaultValue={presetOutTemS}
                    onChange={event => {
                      onChangeModalValue('presetOutTemS', event);
                    }}
                  >
                    <Option key={1} value={7}>
                      7
                    </Option>
                    <Option key={2} value={8}>
                      8
                    </Option>
                    <Option key={3} value={9}>
                      9
                    </Option>
                    <Option key={4} value={10}>
                      10
                    </Option>
                    <Option key={5} value={11}>
                      11
                    </Option>
                    <Option key={6} value={12}>
                      12
                    </Option>
                  </Select>
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
                    defaultValue={presetEndTemB}
                    onChange={event => {
                      onChangeModalValue('presetEndTemB', event);
                    }}
                  >
                    <Option key={1} value={22}>
                      22
                    </Option>
                    <Option key={2} value={23}>
                      23
                    </Option>
                    <Option key={3} value={24}>
                      24
                    </Option>
                    <Option key={4} value={25}>
                      25
                    </Option>
                    <Option key={5} value={26}>
                      26
                    </Option>
                    <Option key={6} value={27}>
                      27
                    </Option>
                    <Option key={6} value={28}>
                      28
                    </Option>
                  </Select>
                  <span>℃</span>
                </div>
              )}
            </FormItem>
            <FormItem label="商用" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('presetEndTemS')(
                <div className={style.select}>
                  <Select
                    placeholder="请选择温度"
                    defaultValue={presetEndTemS}
                    onChange={event => {
                      onChangeModalValue('presetEndTemS', event);
                    }}
                  >
                    <Option key={1} value={22}>
                      22
                    </Option>
                    <Option key={2} value={23}>
                      23
                    </Option>
                    <Option key={3} value={24}>
                      24
                    </Option>
                    <Option key={4} value={25}>
                      25
                    </Option>
                    <Option key={5} value={26}>
                      26
                    </Option>
                    <Option key={6} value={27}>
                      27
                    </Option>
                    <Option key={6} value={28}>
                      28
                    </Option>
                  </Select>
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
            value={newTrand}
            onChange={event => {
              onChangeModalValue('newTrand', event);
            }}
          >
            <Radio value={0}>办公</Radio>
            <Radio value={1}>商用</Radio>
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
                    defaultValue={endTemB}
                    onChange={event => {
                      onChangeModalValue('endTemB', event);
                    }}
                  />
                  <Option key={1} value={22}>
                    22
                  </Option>
                  <Option key={2} value={23}>
                    23
                  </Option>
                  <Option key={3} value={24}>
                    24
                  </Option>
                  <Option key={4} value={25}>
                    25
                  </Option>
                  <Option key={5} value={26}>
                    26
                  </Option>
                  <Option key={6} value={27}>
                    27
                  </Option>
                  <Option key={6} value={28}>
                    28
                  </Option>
                  <span>℃</span>
                </div>
              )}
            </FormItem>
            <FormItem label="商用" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('endTemS')(
                <div className={style.select}>
                  <Select
                    placeholder="请选择温度"
                    defaultValue={endTemS}
                    onChange={event => {
                      onChangeModalValue('endTemS', event);
                    }}
                  />
                  <Option key={1} value={22}>
                    22
                  </Option>
                  <Option key={2} value={23}>
                    23
                  </Option>
                  <Option key={3} value={24}>
                    24
                  </Option>
                  <Option key={4} value={25}>
                    25
                  </Option>
                  <Option key={5} value={26}>
                    26
                  </Option>
                  <Option key={6} value={27}>
                    27
                  </Option>
                  <Option key={6} value={28}>
                    28
                  </Option>
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
              value={lighting}
              onChange={event => {
                onChangeModalValue('lighting', event);
              }}
            >
              <Radio value={0}>办公</Radio>
              <Radio value={1}>商用</Radio>
            </Radio.Group>
          </div>
        ) : (
          <div />
        )}
      </Modal>
    );
  }
}

@connect(({ response }) => ({ response }))
export default class Detail extends Component {
  state = {
    value: 1,
    respondValue: 0,
    selectedRowKeys: [],
    selectRow: [],
    rowValue: [],
    modalVisible: false,
    modalExeVisible: false,
    exePower: 0,

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
          newTrand: value.target.value,
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
          lighting: value.target.value,
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
    var sendValue = [];
    var value0 = {};
    var value1 = {};
    var value2 = {};
    var value3 = {};
    var value4 = {};
    var value5 = {};
    for (let i of selectedRowKeys) {
      if (i == 0) {
        value0 = { key: 0, engineB: engineB, engineS: engineS };
      }
      if (i == 1) {
        value1 = { key: 1, outTemB: outTemB, outTemS: outTemS };
      }
      if (i == 2) {
        value2 = {
          key: 2,
          presetTime: presetTime,
          presetOutTemB: presetOutTemB,
          presetOutTemS: presetOutTemS,
          presetEndTemB: presetEndTemB,
          presetEndTemS: presetEndTemS,
        };
      }
      if (i == 3) {
        value3 = { key: 3, newTrand: newTrand };
      }
      if (i == 4) {
        value4 = { key: 4, endTemB: endTemB, endTemS: endTemS };
      }
      if (i == 5) {
        value5 = { key: 5, lighting: lighting };
      }
      if (JSON.stringify(value0) != '{}') {
        sendValue.push(value0);
      }

      if (JSON.stringify(value1) != '{}') {
        sendValue.push(value1);
      }
      if (JSON.stringify(value2) != '{}') {
        sendValue.push(value2);
      }
      if (JSON.stringify(value3) != '{}') {
        sendValue.push(value3);
      }
      if (JSON.stringify(value4) != '{}') {
        sendValue.push(value4);
      }
      if (JSON.stringify(value5) != '{}') {
        sendValue.push(value5);
      }
      console.log(sendValue);
      sendValue = [];
    }
  };

  onChangePresetTime = (value, dateString) => {
    console.log(dateString);
  };

  onChangeExeTime = (value, dateString) => {
    console.log(dateString);
  };

  handleSubmit = () => {
    const { exePower } = this.state;
    const { dispatch } = this.props;
    if (exePower == 1) {
      return Modal.confirm({
        title: `确定提交响应策略吗？`,
        cancelText: '取消',
        okText: '确定',
        onOk: () => {
          // dispatch({
          // })
        },
      });
    } else {
      return Modal.confirm({
        title: `需求响应能力已关闭`,
        cancelText: '取消',
        okText: '确定',
      });
    }
  };

  render() {
    const {
      value,
      respondValue,
      selectedRowKeys,
      selectRow,
      modalVisible,
      rowValue,
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
                <Col span={16}>
                  <RangePicker
                    showTime={{ format: 'HH:mm:ss' }}
                    format="YYYY-MM-DD HH:mm:ss"
                    onChange={this.onChangePresetTime.bind(this)}
                  />
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
                <Col span={16}>
                  <RangePicker
                    showTime={{ format: 'HH:mm:ss' }}
                    format="YYYY-MM-DD HH:mm:ss"
                    onChange={this.onChangeExeTime.bind(this)}
                  />
                </Col>
                <Col span={5}>
                  <Button type="primary" onClick={this.handleSubmit.bind(this)}>
                    执行
                  </Button>
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
          <CreateForm
            modalVisible={modalVisible}
            rowValue={rowValue}
            engineB={engineB}
            engineS={engineS}
            outTemB={outTemB}
            outTemS={outTemS}
            presetTime={presetTime}
            presetOutTemB={presetOutTemB}
            presetOutTemS={presetOutTemS}
            presetEndTemB={presetEndTemB}
            presetEndTemS={presetEndTemS}
            endTemB={endTemB}
            endTemS={endTemS}
            newTrand={newTrand}
            lighting={lighting}
            {...parentMethods}
          />
        )}
      </div>
    );
  }
}
