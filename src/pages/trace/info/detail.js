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
        title: '策略编号',
        dataIndex: 'strategyId',
      },
      {
        title: '策略名称',
        dataIndex: 'strategyName',
      },
      {
        title: '执行参数',
        render: row => (
          <Popover title="详细参数" trigger="click" content={this.expandedRowRender(row.policy)}>
            <a href="#">查看</a>
          </Popover>
        ),
      },
      {
        title: '预估响应负荷/kW',
        dataIndex: 'EstimateValue',
      },
      {
        title: '实际响应负荷/kW',
        dataIndex: 'practicalValue',
      },
    ];
  }
  render() {
    const {} = this.state;
    const {
      trace: {
        tableValue,
        responsePower,
        responseTime,
        payPower,
        cutPower,
        ExeStartTime,
        yieldProfit,
      },
    } = this.props;
    return (
      <div className={style.top}>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title={
                <div>
                  <Row gutter={16}>
                    <Col span={7}>
                      <span>实施细节</span>
                    </Col>
                    <Col span={7}>
                      <DatePicker onChange={this.onChangeDate} />
                    </Col>
                    <Col span={7}>
                      <Button type="primary" onClick={this.handleSubmit}>
                        查询
                      </Button>
                    </Col>
                  </Row>
                </div>
              }
            >
              <div className={style.form}>
                <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14 }} name="basic">
                  <Form.Item label="要求负荷" name="要求负荷">
                    {responsePower}
                    kW
                  </Form.Item>

                  <Form.Item label="响应时间" name="响应时间">
                    {responseTime}
                  </Form.Item>
                  <Form.Item label="认缴负荷" name="认缴负荷">
                    {payPower}
                    kW
                  </Form.Item>
                  <Form.Item label="削减负荷" name="削减负荷">
                    {cutPower}
                    kW
                  </Form.Item>
                  <Form.Item label="执行时间" name="执行时间">
                    {ExeStartTime}
                  </Form.Item>
                  <Form.Item label="获得收益" name="获得收益">
                    {yieldProfit}元
                  </Form.Item>
                </Form>
              </div>
            </Card>
          </Col>
          <Col span={10}>
            <div className={style.table}>
              <Table
                rowKey={record => record.id}
                columns={this.createColumn()}
                dataSource={tableValue}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
