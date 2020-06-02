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
              <Statistic title="累计响应次数" value={responseFreq} suffix="次" />
            </Col>
            <Col span={7}>
              <Statistic title="累计响应负荷" value={responsePower} suffix="kW" />
            </Col>
            <Col span={7}>
              <Statistic title="累计收益" value={responseProfit} suffix="元" />
            </Col>
          </Row>
        </div>
        <div className={style.buttom}>
          <Row gutter={10}>
            <Col span={7}>
              <Statistic title="响应负荷完成率" value={powerComplete} suffix="%" />
            </Col>
            <Col span={7}>
              <Statistic title="响应时间有效率" value={responseTimeRate} suffix="%" />
            </Col>
            <Col span={7}>
              <Statistic title="年度完成有效率" value={yearCompleteRate} suffix="%" />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
