import React, { Component } from 'react';
import { Row, Col, Card, DatePicker, Button, Table, Form, Input, Modal, Select, Radio } from 'antd';
import style from './index.less';
import { connect } from 'dva';
import { moment } from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;

const data = [
  {
    key: '0',
    strategyId: 'One',
    strategyName: 'Shut down the main engine and corresponding cooling system',
  },
  {
    key: '1',
    strategyId: 'Two',
    strategyName: 'Increase the water outlet temperature of the chiller',
  },
  {
    key: '2',
    strategyId: 'Three',
    strategyName: 'Pre cooling',
  },
  {
    key: '3',
    strategyId: 'Four',
    strategyName: 'Shut down the fresh air system',
  },
  {
    key: '4',
    strategyId: 'Five',
    strategyName: 'Increase the air conditioning terminal setting temperature',
  },
  {
    key: '5',
    strategyId: 'Six',
    strategyName: 'Turn off public lighting system',
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
  // componentWillMount = () => {
  //   const { dispatch } = this.props
  //   dispatch({
  //     type: 'response/fetchCalculateValue',
  //     payload: {},
  //   })
  // }
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

      numofficeMaxValue,
      numbusiMaxValue,
      temofficeMaxValue,
      tembusiMaxValue,
      airMaxValue,
      lightMaxValue,
    } = this.props;
    return (
      <Modal
        title={'Please select the parameters to set'}
        visible={modalVisible}
        onCancel={() => {
          handleModalVisible(false, '');
        }}
        onOk={() => this.okHandle()}
        cancelText="cancel"
        okText="ok"
        destroyOnClose
      >
        {rowValue.key == 0 ? (
          <div>
            <FormItem label="Office" labelCol={{ span: 9 }} wrapperCol={{ span: 12 }}>
              {form.getFieldDecorator('engineB')(
                <div className={style.select}>
                  <Select
                    placeholder="Please select the number"
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
                </div>
              )}
            </FormItem>
            <FormItem label="Bussiness" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('engineS')(
                <div className={style.select}>
                  <Select
                    placeholder="Please select the number"
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
                </div>
              )}
            </FormItem>
          </div>
        ) : (
          <div />
        )}
        {rowValue.key == 1 ? (
          <div>
            <FormItem label="Office" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('outTemB')(
                <div className={style.select}>
                  <Select
                    placeholder="Please select the number of temperature"
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
            <FormItem label="bussiness" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('outTemS')(
                <div className={style.select}>
                  <Select
                    placeholder="Please select the number of temperature"
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
            <FormItem label="Precooling Time" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('presetTime')(
                <div className={style.select}>
                  <Select
                    placeholder="Please select the time of precooling"
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
                  <span>mins</span>
                </div>
              )}
            </FormItem>
            <div style={{ marginLeft: 95 }}>Raise outlet temperature</div>
            <FormItem label="Office" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('presetOutTemB')(
                <div className={style.select}>
                  <Select
                    placeholder="Please select the number of temperature"
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
            <FormItem label="Bussiness" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('presetOutTemS')(
                <div className={style.select}>
                  <Select
                    placeholder="Please select the number of temperature"
                    defaultValue={presetOutTemS}
                    onChange={event => {
                      onChangeModalValue('presetOutTemS', event);
                    }}
                  >
                    <Option key={10} value={7}>
                      7
                    </Option>
                    <Option key={11} value={8}>
                      8
                    </Option>
                    <Option key={12} value={9}>
                      9
                    </Option>
                    <Option key={13} value={10}>
                      10
                    </Option>
                    <Option key={14} value={11}>
                      11
                    </Option>
                    <Option key={15} value={12}>
                      12
                    </Option>
                  </Select>
                  <span>℃</span>
                </div>
              )}
            </FormItem>
            <div style={{ marginLeft: 95 }}>Terminal setting temperature</div>
            <FormItem label="Office" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('presetEndTemB')(
                <div className={style.select}>
                  <Select
                    placeholder="Please select the number of temperature"
                    defaultValue={presetEndTemB}
                    onChange={event => {
                      onChangeModalValue('presetEndTemB', event);
                    }}
                  >
                    <Option key={16} value={22}>
                      22
                    </Option>
                    <Option key={17} value={23}>
                      23
                    </Option>
                    <Option key={18} value={24}>
                      24
                    </Option>
                    <Option key={19} value={25}>
                      25
                    </Option>
                    <Option key={20} value={26}>
                      26
                    </Option>
                    <Option key={21} value={27}>
                      27
                    </Option>
                    <Option key={22} value={28}>
                      28
                    </Option>
                  </Select>
                  <span>℃</span>
                </div>
              )}
            </FormItem>
            <FormItem label="Bussiness" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('presetEndTemS')(
                <div className={style.select}>
                  <Select
                    placeholder="Please select the number of temperature"
                    defaultValue={presetEndTemS}
                    onChange={event => {
                      onChangeModalValue('presetEndTemS', event);
                    }}
                  >
                    <Option key={23} value={22}>
                      22
                    </Option>
                    <Option key={24} value={23}>
                      23
                    </Option>
                    <Option key={25} value={24}>
                      24
                    </Option>
                    <Option key={26} value={25}>
                      25
                    </Option>
                    <Option key={27} value={26}>
                      26
                    </Option>
                    <Option key={28} value={27}>
                      27
                    </Option>
                    <Option key={29} value={28}>
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
            <Radio value={0}>Office</Radio>
            <Radio value={1}>Bussiness</Radio>
          </Radio.Group>
        ) : (
          <div />
        )}
        {rowValue.key == 4 ? (
          <div>
            <FormItem label="Office" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('endTemB')(
                <div className={style.select}>
                  <Select
                    placeholder="Please select the number of temperature"
                    defaultValue={endTemB}
                    onChange={event => {
                      onChangeModalValue('endTemB', event);
                    }}
                  >
                    <Option key={30} value={22}>
                      22
                    </Option>
                    <Option key={31} value={23}>
                      23
                    </Option>
                    <Option key={32} value={24}>
                      24
                    </Option>
                    <Option key={33} value={25}>
                      25
                    </Option>
                    <Option key={34} value={26}>
                      26
                    </Option>
                    <Option key={35} value={27}>
                      27
                    </Option>
                    <Option key={36} value={28}>
                      28
                    </Option>
                  </Select>
                  <span>℃</span>
                </div>
              )}
            </FormItem>
            <FormItem label="Bussiness" labelCol={{ span: 9 }} wrapperCol={{ span: 11 }}>
              {form.getFieldDecorator('endTemS')(
                <div className={style.select}>
                  <Select
                    placeholder="Please select the number of temperature"
                    defaultValue={endTemS}
                    onChange={event => {
                      onChangeModalValue('endTemS', event);
                    }}
                  >
                    <Option key={37} value={22}>
                      22
                    </Option>
                    <Option key={38} value={23}>
                      23
                    </Option>
                    <Option key={39} value={24}>
                      24
                    </Option>
                    <Option key={40} value={25}>
                      25
                    </Option>
                    <Option key={41} value={26}>
                      26
                    </Option>
                    <Option key={42} value={27}>
                      27
                    </Option>
                    <Option key={43} value={28}>
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
        {rowValue.key == 5 ? (
          <div>
            <Radio.Group
              value={lighting}
              onChange={event => {
                onChangeModalValue('lighting', event);
              }}
            >
              <Radio value={0}>Office</Radio>
              <Radio value={1}>Bussiness</Radio>
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
    selectedRowKeys: [],
    selectRow: [],
    rowValue: [],
    modalVisible: false,
    modalExeVisible: false,
    exePower: 1,

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
        title: 'Policy Number',
        dataIndex: 'strategyId',
        width: 100,
      },
      {
        title: 'Policy Name',
        dataIndex: 'strategyName',
      },
      {
        title: 'Perform Parameter',
        render: row => <a onClick={() => this.handleModalVisible(true, row)}>Edit</a>,
        width: 100,
      },
    ];
  }

  // componentWillMount=()=>{
  //   const {
  //     dispatch,
  //     response: { responseStartTime, responseTime },
  //   } = this.props
  //   var responsEndTime = ''
  //   if (responseStartTime != '') {
  //     responsEndTime = moment(responseStartTime)
  //       .add('minutes', responseTime)
  //       .format('YYYY-MM-DD HH:mm:ss')
  //   }
  //   dispatch({
  //     type: 'response/fetchPolicyFirst',
  //     payload: { startTime: responseStartTime, endTime: responsEndTime },
  //   })
  //   dispatch({
  //     type: 'response/fetchPolicySecond',
  //     payload: { startTime: responseStartTime, endTime: responsEndTime },
  //   })
  //   // dispatch({
  //   //   type: 'response/fetchPolicyThird',
  //   //   payload: { startTime: responseStartTime, endTime: responsEndTime },
  //   // })
  //   dispatch({
  //     type: 'response/fetchPolicyForth',
  //     payload: { startTime: responseStartTime, endTime: responsEndTime },
  //   })
  //   // dispatch({
  //   //   type: 'response/fetchPolicyFifth',
  //   //   payload: { startTime: responseStartTime, endTime: responsEndTime },
  //   // })
  //   dispatch({
  //     type: 'response/fetchPolicySixth',
  //     payload: { startTime: responseStartTime, endTime: responsEndTime },
  //   })
  // }

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
    const {
      response: {
        numofficeBaseValue,
        numbusiBaseValue,
        temofficeBaseValue,
        tembusiBaseValue,
        airBaseValue,
        lightBaseValue,
        responseStartTime,
        responseEndTime,
      },
    } = this.props;
    const { dispatch } = this.props;
    var sendValue = [];
    var value0 = {};
    var value1 = {};
    var value2 = {};
    var value3 = {};
    var value4 = {};
    var value5 = {};
    var PolicyFirstValue = {
      engineB: engineB,
      engineS: engineS,
      officeBaseValue: numofficeBaseValue,
      busiBaseValue: numbusiBaseValue,
    };

    for (let i of selectedRowKeys) {
      if (i == 0) {
        value0 = {
          key: 0,
          engineB: engineB,
          engineS: engineS,
          officeBaseValue: numofficeBaseValue,
          busiBaseValue: numbusiBaseValue,
        };
      }
      if (i == 1) {
        value1 = {
          key: 1,
          outTemB: outTemB,
          outTemS: outTemS,
          officeBaseValue: temofficeBaseValue,
          busiBaseValue: tembusiBaseValue,
        };
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
        value3 = { key: 3, newTrand: newTrand, baseValue: airBaseValue };
      }
      if (i == 4) {
        value4 = { key: 4, endTemB: endTemB, endTemS: endTemS };
      }
      if (i == 5) {
        value5 = { key: 5, lighting: lighting, baseValue: lightBaseValue };
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
    }
    dispatch({
      type: 'response/fetchCalculateValue',
      payload: {
        ResStartTime: responseStartTime,
        ResEndTime: responseEndTime,
        sendValue: sendValue,
        PolicyFirstValue: PolicyFirstValue,
      },
    });
    sendValue = [];
  };

  handleSubmit = () => {
    const {
      exePower,
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
    const {
      dispatch,
      response: {
        responseStartTime,
        responseEndTime,
        responseId,
        policyBaselineMap,
        singlePowerMap,
      },
    } = this.props;
    if (exePower == 1) {
      return Modal.confirm({
        title: `Are you sure to submit?`,
        cancelText: 'cancel',
        okText: 'ok',
        onOk: () => {
          var sendValue = [];
          var value0 = {};
          var value1 = {};
          var value2 = {};
          var value3 = {};
          var value4 = {};
          var value5 = {};

          for (let i of selectedRowKeys) {
            if (i == 0) {
              value0 = {
                key: 0,
                engineB: engineB,
                engineS: engineS,
              };
            }
            if (i == 1) {
              value1 = {
                key: 1,
                outTemB: outTemB,
                outTemS: outTemS,
              };
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
          }
          dispatch({
            type: 'response/sendExeValue',
            payload: {
              ExeStartTime: responseStartTime,
              ExeEndTime: responseEndTime,
              responseId: responseId,
              SendValue: sendValue,
              policyBaselineMap: policyBaselineMap,
              singlePowerMap: singlePowerMap,
            },
          });
        },
      });
    } else {
      return Modal.confirm({
        title: `The demand response capability is turned off`,
        cancelText: 'cancel',
        okText: 'ok',
      });
    }
  };

  render() {
    const {
      value,

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

      numofficeMaxValue,
      numbusiMaxValue,
      temofficeMaxValue,
      tembusiMaxValue,
      airMaxValue,
      lightMaxValue,
    } = this.state;
    const {
      response: { calculateValue },
    } = this.props;
    var response = localStorage.getItem('response');
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
                  <span>Implementation Details</span>
                </Col>
                <Col span={7}>
                  {value ? (
                    <div>
                      Responsiveness :{/* {calculateValue} */ '215'}
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
          <Form labelCol={{ span: 5 }} wrapperCol={{ span: 19 }} name="basic">
            <Form.Item label="EstimateTime: " name="estimate ">
              <Row gutter={5}>
                {/* <Col span={16}>{response}</Col> */}
                <Col span={16} className={style.sss}>
                  {'2020-06-01 12:00-13:00'}
                </Col>
                <Col span={5}>
                  <Button type="primary" onClick={this.handleCalculate.bind(this)}>
                    Calculate
                  </Button>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item label="ExecuteTime:" name="Execute">
              <Row gutter={5}>
                {/* <Col span={16}>{response}</Col> */}
                <Col span={16} className={style.sss}>
                  {'2020-06-01 12:00-13:00'}
                </Col>
                <Col span={5}>
                  <Button type="primary" onClick={this.handleSubmit.bind(this)}>
                    Execute
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
            scroll={{ y: 150 }}
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
            numofficeMaxValue={numofficeMaxValue}
            numbusiMaxValue={numbusiMaxValue}
            temofficeMaxValue={temofficeMaxValue}
            tembusiMaxValue={tembusiMaxValue}
            airMaxValue={airMaxValue}
            lightMaxValue={lightMaxValue}
            {...parentMethods}
          />
        )}
      </div>
    );
  }
}
