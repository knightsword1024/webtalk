import React, { Component } from 'react';
import { Row, Col } from 'antd';
import style from './index.less';
import EERr from './info/eerr';
import COP from './info/cop';
import WTFchw from './info/wtfchw';
import Analysis from './info/analysis';
export default class energyAnalysis extends Component {
  render() {
    return (
      <div className={style.all}>
        <div className={style.top}>
          <Row gutter={16}>
            <Col span={10}>
              <div className={style.eerr}>
                <EERr />
              </div>
            </Col>
            <Col span={10}>
              <div className={style.card}>
                <Analysis />
              </div>
            </Col>
          </Row>
        </div>
        <div className={style.buttom}>
          <Row gutter={16}>
            <Col span={10}>
              <div className={style.cop}>
                <COP />
              </div>
            </Col>
            <Col span={10}>
              <div className={style.wtfchw}>
                <WTFchw />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
