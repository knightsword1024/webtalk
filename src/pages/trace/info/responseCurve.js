import React, { Component } from 'react';
import { Row, Col } from 'antd';

export default class responseCurve extends Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={16} />
          <Col span={4} />
        </Row>
      </div>
    );
  }
}
