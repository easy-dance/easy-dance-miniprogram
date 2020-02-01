import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtNavBar } from 'taro-ui';

import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import './index.scss';

interface Props {
  title: string,
  onStClick?: () => void,
  onNdClick?: () => void,
  onLeftClick?: () => void,
}

const NavBar = (props: Props) => {
  const { title, onLeftClick, onNdClick, onStClick } = props;
  return (<AtNavBar
    onClickRgIconSt={onStClick}
    onClickRgIconNd={onNdClick}
    onClickLeftIcon={onLeftClick}
    color='#000'
    leftText=''
    rightFirstIconType='bullet-list'
    rightSecondIconType='user'
  >
    <View>{title}</View>
  </AtNavBar>);
}

export default NavBar;
