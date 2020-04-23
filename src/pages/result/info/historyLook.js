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
        title: '要求负荷/kW',
        dataIndex: 'location1',
      },
      {
        title: '认缴负荷/kW',
        dataIndex: 'location2',
      },
      {
        title: '响应负荷/kW',
        dataIndex: 'location3',
      },
      {
        title: '获得收益/元',
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
      <div style={{ marginLeft: 40 }}>
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
  };

  onChangeDate = () => {
    const { dispatch } = this.props;
  };

  render() {
    return (
      <div>
        <Card title="历史响应查看">
          {this.renderSimpleForm()}
          <Table
            rowKey={record => record.id}
            columns={this.createColumn()}
            //   dataSource={locationList}
          />
        </Card>
      </div>
    );
  }
}
