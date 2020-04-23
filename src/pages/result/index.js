import React, { Component } from 'react';
import { Row, Col } from 'antd';
import style from './index.less';
import LoadContrast from './info/loadContrast.js';
import HistoryLook from './info/HistoryLook.js';
import HistoryConsum from './info/HistoryConsum.js';
import Card from './info/Card.js';

export default class result extends Component {
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
              <div className={style.HistoryLook}>
                <HistoryLook />
              </div>
            </Col>
          </Row>
        </div>
        <div className={style.buttom}>
          <Row gutter={16}>
            <Col span={11}>
              <div className={style.HistoryConsum}>
                <HistoryConsum />
              </div>
            </Col>
            <Col span={10}>
              <div className={style.Card}>
                <Card />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
