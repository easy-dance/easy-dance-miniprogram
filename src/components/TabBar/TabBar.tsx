import Taro from '@tarojs/taro';
import { AtTabBar } from 'taro-ui';

import './index.scss';

interface Props {
  onTabClick: (num: number) => void,
  current: number,
}

const TabBar = (props: Props) => {
  const { onTabClick, current } = props;
  return (
    <AtTabBar
      tabList={[
        { title: '发现', iconType: 'message' },
        { title: '我的', iconType: 'user', text: '100', max: 99 }
      ]}
      onClick={onTabClick}
      current={current}
    />
  )
}

export default TabBar;