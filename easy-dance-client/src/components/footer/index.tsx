import Taro, {Component} from '@tarojs/taro';
import {ClTabBar} from 'mp-colorui';

export default class Footer extends Component {
  render() {
    return(
      <ClTabBar
        bgColor='black'
        activeColor='yellow'
        fix={true}
        active={0}
        tabs={
          [
            {
              icon: 'home',
              title: '首页',
            },
            {
              icon: 'add',
              title: '发起约舞',
              action: true,
            },
            {
              icon: 'myfill',
              title: '我的',
            },
          ]
        }
      />
    );
  }
}
