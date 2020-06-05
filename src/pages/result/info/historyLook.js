import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Form, Select, Button, DatePicker, Table } from 'antd';
import { connect } from 'dva';
import style from './index.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;

@connect(({}) => ({}))
export default class historyLook extends Component {
  state = {
    date: [],
    time: '',
  };
  componentDidMount = () => {
    const { dispatch } = this.props;
    // dispatch({})
  };
  createColumn() {
    return [
      {
        title: '响应时间',
        dataIndex: 'locationid',
      },
      {
        title: '要求负荷',
        dataIndex: 'location1',
      },
      {
        title: '认缴负荷',
        dataIndex: 'location2',
      },
      {
        title: '响应负荷',
        dataIndex: 'location3',
      },
      {
        title: '获得收益',
        dataIndex: 'location4',
      },
      {
        title: '查看',
        render: row => (
          <div>
            <a>查看</a>
          </div>
        ),
      },
    ];
  }
  renderSimpleForm() {
    const {} = this.props;
    return (
      <div style={{ marginLeft: 0 }}>
        <Fragment>
          <Row gutter={20}>
            <Col span={11}>
              <div className={style.select} style={{ width: 200 }}>
                <RangePicker onChange={this.onChangeDate} />
              </div>
            </Col>
            <Col span={5}>
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
  };

  onChangeDate = () => {
    const { dispatch } = this.props;
  };

  render() {
    const location = [
      {
        key: '1',
        locationid: '2020-5-10 12:00-13:00',
        location1: '200kWh',
        location2: '200kWh',
        location3: '206kWh',
        location4: '6000元',
      },
      {
        key: '2',
        locationid: '2020-5-20 12:00-13:00',
        location1: '200kWh',
        location2: '200kWh',
        location3: '218kWh',
        location4: '6000元',
      },
      {
        key: '3',
        locationid: '2020-6-1 12:00-13:00',
        location1: '200kWh',
        location2: '200kWh',
        location3: '230kWh',
        location4: '6000元',
      },
    ];
    return (
      <div className={style.pages}>
        <Card
          title={
            <div>
              <Row gutter={16}>
                <Col span={5}>
                  <span>实施细节</span>
                </Col>
                <Col span={19}>{this.renderSimpleForm()}</Col>
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
          />
        </Card>
      </div>
    );
  }
}
