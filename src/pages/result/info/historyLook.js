import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Form, Select, Button, DatePicker, Table } from 'antd';
import { connect } from 'dva';
import style from './index.less';
import moment from 'moment';
import router from 'umi/router';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;

@connect(({ result }) => ({ result }))
export default class historyLook extends Component {
  state = {
    startDate: '',
    endDate: '',
  };
  componentDidMount = () => {
    const { dispatch } = this.props;
    var date1 = moment().format('YYYY-MM-DD');
    var date2 = moment()
      .subtract('days', 30)
      .format('YYYY-MM-DD');
    dispatch({
      type: 'result/fetchTableValue',
      payload: { startDate: date2, endDate: date1 },
    });
  };
  createColumn() {
    return [
      {
        title: '响应时间',
        dataIndex: 'responseTime',
        width: 120,
      },
      {
        title: '要求负荷/kW',
        dataIndex: 'requirePower',
      },
      {
        title: '认缴负荷/kW',
        dataIndex: 'payPower',
      },
      {
        title: '响应负荷/kW',
        dataIndex: 'cutPower',
      },
      {
        title: '获得收益/元',
        dataIndex: 'yieldProfit',
      },
      {
        title: '查看',
        render: row => (
          <div>
            <a onClick={() => this.lookData(row)}>查看</a>
          </div>
        ),
      },
    ];
  }
  lookData = row => {
    var src = row.responseTime.substr(0, 10);
    var reg = new RegExp('/', 'gi');
    var src2 = src.replace(reg, '');
    router.push({
      pathname: `/trace/${src2}`,
      state: { responseTime: src2 },
    });
  };
  renderSimpleForm() {
    const {} = this.props;
    return (
      <div style={{ marginBottom: 4 }}>
        <Fragment>
          <Row gutter={20}>
            <Col span={9}>
              <div className={style.select}>
                <RangePicker onChange={this.onChangeDate} />
              </div>
            </Col>
            <Col span={4}>
              <Button type="primary" onClick={this.handleSubmit}>
                查询
              </Button>
            </Col>
          </Row>
        </Fragment>
      </div>
    );
  }
  handleSubmit = () => {
    const { dispatch } = this.props;
    const { startDate, endDate } = this.state;
    dispatch({
      type: 'result/fetchTableValue',
      payload: { startDate: startDate, endDate: endDate },
    });
  };

  onChangeDate = (date, datestring) => {
    this.setState({ startDate: datestring[0], endDate: datestring[1] });
  };

  render() {
    const {
      result: { tableValue },
    } = this.props;
    return (
      <div className={style.card}>
        <Card title="历史响应查看">
          {this.renderSimpleForm()}
          <Table
            rowKey={record => record.id}
            columns={this.createColumn()}
            dataSource={tableValue}
            scroll={{ y: 82 }}
          />
        </Card>
      </div>
    );
  }
}
