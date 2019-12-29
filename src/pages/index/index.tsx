import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtMessage } from 'taro-ui'

import { getWXcontext } from '../../services/cloud';

import '../../constants/tarouiCSS/message.scss';
import '../../constants/tarouiCSS/button.scss';
import './index.css'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  login = async () => {
    await getWXcontext();
    await Taro.atMessage({
      'message': '消息通知',
      'type': 'success',
    })
  }

  render() {
    return (
      <View className='index'>
        <AtMessage />
        <Text>Hello world!</Text>
        <AtButton onClick={() => this.login()}>云开发登录</AtButton>
      </View>
    )
  }
}
