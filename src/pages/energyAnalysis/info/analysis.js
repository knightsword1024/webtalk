import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Form, Select, Button, DatePicker } from 'antd';
import { connect } from 'dva';
import style from './index.less';
import analysisJPG from '@/assets/analysis.png';

export default class analysis extends Component {
  render() {
    return (
      <div className={style.anaCard}>
        <Card title="能效分析" style={{ height: 340 }}>
          <div className={style.background}>
            <span className={style.textone}>40</span>
            <span className={style.texttwo}>40</span>
            <span className={style.textthree}>40</span>
            <span className={style.textfour}>40</span>
            <span className={style.textfive}>40</span>
            <span className={style.textsix}>40</span>
          </div>
        </Card>
      </div>
    );
  }
}
