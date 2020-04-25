import React, { Component } from 'react';
import { Row, Col } from 'antd';
import style from './index.less';
import Apear from './info/Apear';
import BaseLine from './info/baseLine';
import Order from './info/order';
import Strategy from './info/strategy';

export default class energyAnalysis extends Component {
  render() {
    return (
      <div className={style.all}>
        <div className={style.top}>
          <Row gutter={16}>
            <Col span={10}>
              <div className={style.order}>
                <Order />
              </div>
            </Col>
            <Col span={10}>
              <div className={style.apear}>
                <Apear />
              </div>
            </Col>
          </Row>
        </div>
        <div className={style.buttom}>
          <Row gutter={16}>
            <Col span={10}>
              <div className={style.baseLine}>
                <BaseLine />
              </div>
            </Col>
            <Col span={10}>
              <div className={style.strategy}>
                <Strategy />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
