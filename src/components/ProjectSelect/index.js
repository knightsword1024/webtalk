import React, { Component } from 'react';
import { Select } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

const { Option } = Select;

@connect(({ project, dynamicmenu }) => ({ project, dynamicmenu }))
export default class projectSelect extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'project/fetchAllProject',
    });
  };

  changeProject = value => {
    const { dispatch } = this.props;
    dispatch({
      type: 'dynamicmenu/getDynamicmenu',
      payload: { value: value },
    });
    console.log(value);
  };
  render() {
    const {
      project: { projectTotal },
    } = this.props;
    return (
      <div className={styles.select}>
        <Select placeholder="选择项目" onChange={this.changeProject.bind(this)} />
      </div>
    );
  }
}
