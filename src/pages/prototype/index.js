import React, { Component } from 'react';
import { connect } from 'dva';
import style from './index.less';
import { Input, Card, Collapse, Table, Button, Row, Col, Icon } from 'antd';

const Search = Input.Search;
const { Panel } = Collapse;

@connect(({ prototype, global }) => ({ prototype, global }))
class prototype extends Component {
  state = {};

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'prototype/fetchPrototype',
      payload: '',
    });
    dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: true,
    });
    dispatch({
      type: 'prototype/fetchCollapse',
      payload: true,
    });
  };

  handleDoor = row => {
    console.log(row);
  };

  callback = value => {
    console.log(value);
  };
  onSearch = value => {
    console.log(value);
  };

  handleValue = value => {
    console.log(value);
  };
  render() {
    const {
      prototype: { prototypeValue, collapseValue },
    } = this.props;
    const columns = [
      {
        title: '户号',
        align: 'center',
        className: 'firstColumns',
        render: row => <a onClick={() => this.handleDoor(row)}>{row.doorNum}</a>,
      },
      {
        title: '出水口温度',
        align: 'center',
        render: row => {
          return <div>{row.outfallTem}℃</div>;
        },
      },
      {
        title: '进水口温度',
        align: 'center',
        render: row => {
          return <div>{row.infallTem}℃</div>;
        },
      },
      {
        title: '室内温度',
        align: 'center',
        render: row => {
          return <div>{row.insideTem}℃</div>;
        },
      },
      {
        title: '室外温度',
        align: 'center',
        render: row => {
          return <div>{row.outsideTem}℃</div>;
        },
      },
      {
        title: '阀门开度',
        dataIndex: 'valveOpening',
        align: 'center',
      },
    ];
    return (
      <div className={style.main}>
        <Row gutter={10}>
          <Col span={5}>
            <div className={style.left}>
              <div className={style.input}>
                <Search
                  placeholder="请输入查询内容"
                  enterButton
                  onSearch={this.onSearch.bind(this)}
                />
              </div>
              <Collapse onChange={this.callback.bind(this)} accordion bordered={false}>
                {collapseValue.map(({ name, value }) => {
                  return (
                    <Panel header={name} key={name}>
                      {value.map(({ key, name }) => (
                        <div className={style.selectItem}>
                          <Icon type="codepen" style={{ color: 'blue' }} />
                          <a key={key} onClick={this.handleValue.bind(this)}>
                            {name}
                          </a>
                        </div>
                      ))}
                    </Panel>
                  );
                })}
              </Collapse>
            </div>
          </Col>
          <Col span={19}>
            <div className={style.card}>
              <Card>
                <div className={style.button}>
                  <Button type="primary">保存为策略</Button>
                </div>
                <div className={style.table}>
                  <Table
                    rowKey={record => record.id}
                    dataSource={prototypeValue}
                    columns={columns}
                  />
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default prototype;
