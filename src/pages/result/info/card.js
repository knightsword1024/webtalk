import React, { Component } from 'react';
import { Statistic, Row, Col } from 'antd';
import style from './index.less';
import { connect } from 'dva';
import moment from 'moment';
@connect(({ result }) => ({ result }))
export default class card extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    var date = moment().format('YYYY-MM-DD');
    dispatch({
      type: 'result/fetchCardValue',
      payload: { inquireDate: date },
    });
  };
  render() {
    const {
      result: {
        responseFreq,
        responsePower,
        responseProfit,
        powerComplete,
        responseTimeRate,
        yearCompleteRate,
      },
    } = this.props;
    return (
      <div className={style.all}>
        <div className={style.top}>
          <Row gutter={10}>
            <Col span={7}>
              <Statistic title="Cumulative Response Times" value={6} suffix="Times" />
            </Col>
            <Col span={7}>
              <Statistic title="Cumulative Response Load" value={1500} suffix="kW" />
            </Col>
            <Col span={7}>
              <Statistic title="Accumulated Income" value={36000} suffix="￥" />
            </Col>
          </Row>
        </div>
        <div className={style.buttom}>
          <Row gutter={10}>
            <Col span={7}>
              <Statistic title="Response Load Complate Rate" value={'100'} suffix="%" />
            </Col>
            <Col span={7}>
              <Statistic title="Response Load Time Rate" value={'100'} suffix="%" />
            </Col>
            <Col span={7}>
              <Statistic title="Completion Efficiency" value={'100'} suffix="%" />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
