import React, { Component } from 'react';
import { Row, Col, Card, DatePicker, Button, Table, Form } from 'antd';
import style from './index.less';
import { connect } from 'dva';

const FormItem = Form.Item;

@connect(trace => trace)
export default class Detail extends Component {
  state = {
    value: 1,
  };
  componentWillMount = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'trace/fetchTableValue',
      payload: {},
    });
  };
  component;
  createColumn() {
    return [
      {
        title: '策略编号',
        dataIndex: 'locationid',
        key: 'locationid',
      },
      {
        title: '策略名称',
        dataIndex: 'location1',
        key: 'location1',
      },
      {
        title: '执行参数',
        dataIndex: 'location2',
        key: 'location2',
      },
      {
        title: '预估响应负荷/kW',
        dataIndex: 'location3',
        key: 'location3',
      },
      {
        title: '实际响应负荷/kW',
        dataIndex: 'location4',
        key: 'location4',
      },
    ];
  }
  render() {
    const { value } = this.state;
    const location = [
      {
        key: '1',
        locationid: '策略一',
        location1: '关停主机和对应的冷却系统',
        location2: '办公：1台',
        location3: '208',
        location4: '230',
      },
      {
        key: '1',
        locationid: '策略二',
        location1: '挺高冷水机组的出水温度',
        location2: '办公：12℃',
        location3: '32',
        location4: '230',
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
                    <Col span={3}>
                      <span>实施细节</span>
                    </Col>
                    <Col span={3}>
                      <DatePicker style={{ width: '120px' }} />
                    </Col>
                    <Col span={3}>
                      <Button type="primary" onClick={this.handleSubmit}>
                        查询
                      </Button>
                    </Col>
                  </Row>
                </div>
              }
            >
              <Col span={8}>
                <div className={style.form}>
                  <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14 }} name="basic">
                    <Form.Item label="要求负荷" name="要求负荷">
                      {/* {value} */ '200'}
                      kW
                    </Form.Item>

                    <Form.Item label="响应时间" name="响应时间">
                      {/* {value} */ '2020-6-1 12:00-13:00'}
                    </Form.Item>
                    <Form.Item label="认缴负荷" name="认缴负荷">
                      {/* {value} */ '200'}
                      kW
                    </Form.Item>
                    <Form.Item label="削减负荷" name="削减负荷">
                      {/* {value} */ '230'}
                      kW
                    </Form.Item>
                    <Form.Item label="执行时间" name="执行时间">
                      {/* {value} */ '2020-6-1 12:00-13:00'}
                    </Form.Item>
                    <Form.Item label="获得收益" name="获得收益">
                      {/* {value}元 */ '6000元'}
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
