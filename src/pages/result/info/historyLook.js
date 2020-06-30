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
        title: 'Response Time',
        dataIndex: 'responseTime',
        // width: 120,
      },
      {
        title: 'Required Load',
        dataIndex: 'RequiredLoad',
      },
      {
        title: 'Subscribed Load',
        dataIndex: 'SubscribedLoad',
      },
      {
        title: 'Responsed Load',
        dataIndex: 'ResponseLoad',
      },
      {
        title: 'Geted Benefit',
        dataIndex: 'GetedBenefit',
      },
      {
        title: 'Look',
        render: row => (
          <div>
            <a onClick={() => this.lookData(row)}>Look</a>
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
      <div style={{ marginLeft: 0 }}>
        <Fragment>
          <Row gutter={20}>
            <Col span={18}>
              <div className={style.select} style={{ width: 200 }}>
                <RangePicker onChange={this.onChangeDate} placeholder={['StartTime', 'EndTime']} />
              </div>
            </Col>
            <Col span={6}>
              <Button type="primary" onClick={this.handleSubmit}>
                Inquire
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
    const location = [
      {
        key: '1',
        responseTime: '2020-05-10 12:00-13:00',
        RequiredLoad: '200kWh',
        SubscribedLoad: '200kWh',
        ResponseLoad: '206kWh',
        GetedBenefit: '￥6000',
      },
      {
        key: '2',
        responseTime: '2020-05-20 12:00-13:00',
        RequiredLoad: '200kWh',
        SubscribedLoad: '200kWh',
        ResponseLoad: '218kWh',
        GetedBenefit: '￥6000',
      },
      {
        key: '3',
        responseTime: '2020-06-01 12:00-13:00',
        RequiredLoad: '200kWh',
        SubscribedLoad: '200kWh',
        ResponseLoad: '230kWh',
        GetedBenefit: '￥6000',
      },
    ];
    return (
      <div className={style.pages}>
        <Card
          title={
            <div>
              <Row gutter={16}>
                <Col span={11}>
                  <span>Implementation Details</span>
                </Col>
                <Col span={12}>{this.renderSimpleForm()}</Col>
              </Row>
            </div>
          }
        >
          <Table
            className={style.tabler}
            rowKey={record => record.id}
            columns={this.createColumn()}
            //   dataSource={locationList}
            dataSource={location}
            scroll={{ y: 133 }}
          />
        </Card>
      </div>
    );
  }
}
