import React, { Component } from 'react';
import { Row, Col, Card, DatePicker, Button, Table, Form, Popover } from 'antd';
import style from './index.less';
import { connect } from 'dva';
import { CheckCircleTwoTone } from '@ant-design/icons';
import moment from 'moment';

const FormItem = Form.Item;
const parameter = {
  engineB: '办公关停数量',
  engineS: '商用关停数量',
  outTemB: '办公出水温度',
  outTemS: '商用出水温度',
  presetEndTemB: '办公末端温度',
  presetEndTemS: '商用末端温度',
  presetOutTemB: '办公出水温度',
  presetOutTemS: '商用出水温度',
  presetTime: '预冷时间',
  newTrand: '关闭新风机组',
  endTemB: '办公末端温度',
  endTemS: '商用末端温度',
  lighting: '关闭照明',
};

@connect(trace => trace)
export default class Detail extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    ...this.props.routing.location.state,
    date: '',
  };
  componentWillMount = () => {
    const { dispatch } = this.props;
    const { responseTime } = this.state;
    var date = moment().format('YYYY-MM-DD') + ' 00:00:00';
    console.log(responseTime);
    if (typeof responseTime != 'undefined') {
      date =
        responseTime.substr(0, 4) +
        '-' +
        responseTime.substr(4, 2) +
        '-' +
        responseTime.substr(6, 2);
    }
    localStorage.setItem('searchTime', date);
    dispatch({
      type: 'trace/fetchTableValue',
      payload: { responseDate: date },
    });
  };

  onChangeDate = (date, dataString) => {
    this.setState({
      date: dataString + ' 00:00:00',
    });
  };

  handleSubmit = () => {
    const { date } = this.state;
    const { dispatch } = this.props;
    dispatch({
      type: 'trace/fetchTableValue',
      payload: { responseDate: date },
    });
  };

  handleSearch = value => {};
  chooseNumber = value => {
    if (value == 1) {
      return <span>商用</span>;
    } else if (value == 0) {
      return <span>办公</span>;
    } else {
      return <span>{value}</span>;
    }
  };
  chooseUnit = key => {
    if ((key == 'engineB') | (key == 'engineS')) {
      return <span>台</span>;
    } else if (key == 'presetTime') {
      return <span>分钟</span>;
    } else if ((key == 'newTrand') | (key == 'lightng')) {
      return <span />;
    } else {
      return <span>℃</span>;
    }
  };
  expandedRowRender = name => {
    var array = [];
    for (var i in name) {
      array.push({
        key: i,
        value: name[i],
      });
    }
    return (
      <div>
        {array.map(({ key, value }) => (
          <div>
            {parameter[key]}:<span style={{ color: 'red' }}>{this.chooseNumber(value)}</span>
            <span style={{ color: 'green' }}>{this.chooseUnit(key)}</span>
          </div>
        ))}
      </div>
    );
  };
  createColumn() {
    return [
      {
        title: 'Strategy Number',
        dataIndex: 'StrategyNumber',
      },
      {
        title: 'Strategy Name',
        dataIndex: 'StrategyName',
        width: 200,
      },
      {
        title: 'Execute',
        dataIndex: 'Execute',
      },
      {
        title: 'Forecast load/kW',
        dataIndex: 'Forecastload',
        align: 'center',
      },
      {
        title: 'Actual Load/kW',
        dataIndex: 'ActualLoad',
        align: 'center',
      },
    ];
  }
  render() {
    const { value } = this.state;
    const location = [
      {
        key: '1',
        StrategyNumber: 'Strategy One',
        StrategyName: 'Shut down the main engine and corresponding cooling system',
        Execute: 'Office：1',
        Forecastload: '208',
        ActualLoad: '230',
      },
      {
        key: '1',
        StrategyNumber: 'Strategy Two',
        StrategyName: 'Increase the water outlet temperature of the chiller',
        Execute: 'Office：12℃',
        Forecastload: '32',
        ActualLoad: '230',
      },
    ];
    return (
      <div className={style.top}>
        <Row gutter={16}>
          <Col span={18}>
            <Card
              title={
                <div>
                  <Row gutter={16}>
                    <Col span={5}>
                      <span>Implementation Details</span>
                    </Col>
                    <Col span={4}>
                      <DatePicker style={{ width: '150px' }} placeholder={'Please select date'} />
                    </Col>
                    <Col span={3}>
                      <Button type="primary" onClick={this.handleSubmit}>
                        Inquire
                      </Button>
                    </Col>
                  </Row>
                </div>
              }
            >
              <Col span={8}>
                <div className={style.form}>
                  <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14 }} name="basic">
                    <Form.Item label="Required Load" name="要求负荷">
                      {/* {value} */ '200'}
                      kW
                    </Form.Item>

                    <Form.Item label="Responsed Time" name="响应时间">
                      {/* {value} */ '2020-06-01 12:00-13:00'}
                    </Form.Item>
                    <Form.Item label="Subscribed Load" name="认缴负荷">
                      {/* {value} */ '200'}
                      kW
                    </Form.Item>
                    <Form.Item label="Reduced Load" name="削减负荷">
                      {/* {value} */ '230'}
                      kW
                    </Form.Item>
                    <Form.Item label="Execute Time" name="执行时间">
                      {/* {value} */ '2020-06-01 12:00-13:00'}
                    </Form.Item>
                    <Form.Item label="Geted Benefit" name="获得收益">
                      {/* {value}元 */ '￥6000'}
                    </Form.Item>
                  </Form>
                </div>
              </Col>
              <Col span={16}>
                <div className={style.table}>
                  <Table
                    className={style.table1}
                    rowKey={record => record.id}
                    columns={this.createColumn()}
                    dataSource={location}
                    //   dataSource={locationList}
                  />
                </div>
              </Col>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
