import React, { Component } from 'react';
import { Statistic, Row, Col } from 'antd';
import style from './index.less';

export default class card extends Component {
  render() {
    return (
      <div className={style.all}>
        <div className={style.top}>
          <Row gutter={10}>
            <Col span={7}>
              <Statistic title="累计响应次数" value={93} suffix="次" />
            </Col>
            <Col span={7}>
              <Statistic title="累计响应负荷" value={93} suffix="kW" />
            </Col>
            <Col span={7}>
              <Statistic title="累计收益" value={93} suffix="元" />
            </Col>
          </Row>
        </div>
        <div className={style.buttom}>
          <Row gutter={10}>
            <Col span={7}>
              <Statistic title="响应负荷完成率" value={93} suffix="%" />
            </Col>
            <Col span={7}>
              <Statistic title="响应时间有效率" value={93} suffix="%" />
            </Col>
            <Col span={7}>
              <Statistic title="年度完成有效率" value={93} suffix="%" />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
