import React, { Component } from 'react';
import { Row, Col } from 'antd';
import style from './index.less';
import Detail from './info/detail.js';
import ResponseCurve from './info/responseCurve.js';

export default class Trace extends Component {
  render() {
    return (
      <div className={style.all}>
        <div className={style.top}>
          <Detail />
        </div>
        <div className={style.buttom}>
          <ResponseCurve />
        </div>
      </div>
    );
  }
}
