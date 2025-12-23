import * as React from 'react';
import styles from './index.less';
export default class Index extends React.Component {
  state = {
    userName: 'egg-umi-ts',
  };
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const { userName } = this.state;
    return (
        <span className={styles.userName}>{userName}</span>
      );
    }
}
