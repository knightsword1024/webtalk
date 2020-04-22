import React, { PureComponent } from 'react';
import { Spin } from 'antd';
import style from './index.less';

class HomePage extends PureComponent {
  render() {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // paddingTop: 64,
          textAlign: 'center',
        }}
      >
        <iframe
          // src={url}
          src="https://datav.aliyuncs.com/share/5fdcd3698c3c47e5fa46e81eb76ad5bd"
          style={{ width: '100%', height: '100%', border: 0 }}
        />
      </div>
    );
  }
}

export default HomePage;
