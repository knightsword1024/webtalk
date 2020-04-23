import React, { Component } from 'react';
import { Row, Col } from 'antd';
import style from './index.less';
import LoadContrast from './info/loadContrast.js';
import MonthComPare from './info/monthComPare.js';
import DayComPare from './info/dayComPare.js';

export default class energyConsumption extends Component {
  render() {
    return (
      <div className={style.all}>
        <div className={style.top}>
          <Row gutter={16}>
            <Col span={10}>
              <div className={style.LoadContrast}>
                <LoadContrast />
              </div>
            </Col>
            <Col span={10}>
              <div className={style.MonthComPare}>
                <MonthComPare />
              </div>
            </Col>
          </Row>
        </div>
        <div className={style.buttom}>
          <Row gutter={16}>
            <Col span={20}>
              <div className={style.DayComPare}>
                <DayComPare />{' '}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
