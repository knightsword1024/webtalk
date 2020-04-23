import React, { Component } from 'react';
import { Row, Col, Card, DatePicker, Button, Table, Form } from 'antd';
import style from './index.less';

const FormItem = Form.Item;

export default class Detail extends Component {
  state = {
    value: 1,
  };
  createColumn() {
    return [
      {
        title: '策略编号',
        dataIndex: 'locationid',
      },
      {
        title: '策略名称',
        dataIndex: 'location1',
      },
      {
        title: '执行参数',
        dataIndex: 'location2',
      },
      {
        title: '预估响应负荷/kW',
        dataIndex: 'location3',
      },
      {
        title: '实际响应负荷/kW',
        dataIndex: 'location4',
      },
    ];
  }
  render() {
    const { value } = this.state;
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
                      <DatePicker />
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
                    {value}
                    kW
                  </Form.Item>

                  <Form.Item label="响应时间" name="响应时间">
                    {value}
                  </Form.Item>
                  <Form.Item label="认缴负荷" name="认缴负荷">
                    {value}
                    kW
                  </Form.Item>
                  <Form.Item label="削减负荷" name="削减负荷">
                    {value}
                    kW
                  </Form.Item>
                  <Form.Item label="执行时间" name="执行时间">
                    {value}
                  </Form.Item>
                  <Form.Item label="获得收益" name="获得收益">
                    {value}元
                  </Form.Item>
                </Form>
              </div>
            </Card>
          </Col>
          <Col span={10}>
            <Table
              rowKey={record => record.id}
              columns={this.createColumn()}
              //   dataSource={locationList}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
