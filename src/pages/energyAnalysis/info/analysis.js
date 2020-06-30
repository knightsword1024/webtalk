import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Form, Select, Button, DatePicker } from 'antd';
import { connect } from 'dva';
import style from './index.less';
import analysisJPG from '@/assets/analysis.png';

@connect(analysis => analysis)
export default class analysis extends Component {
  componentWillMount = () => {
    const { dispatch } = this.props;

    dispatch({
      type: 'analysis/fetchCardValue',
      payload: {},
    });
  };
  render() {
    const {
      analysis: { EERrB, EERrS, COPB, COPS, WTFchwB, WTFchwS },
    } = this.props;
    return (
      <div className={style.anaCard}>
        <Card title="Energy Efficiency Analysis " style={{ height: 340 }}>
          <div className={style.background}>
            <span className={style.textone}>{EERrB}</span>
            <span className={style.texttwo}>{COPB}</span>
            <span className={style.textthree}>{WTFchwB}</span>
            <span className={style.textfour}>{EERrS}</span>
            <span className={style.textfive}>{COPS}</span>
            <span className={style.textsix}>{WTFchwS}</span>
          </div>
        </Card>
      </div>
    );
  }
}
