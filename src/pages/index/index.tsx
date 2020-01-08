import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import moment from 'moment';

import Chart from '@/components/Chart';
import Calendar from '@/components/Calendar/Calendar';

import './index.css'
import '@/constants/tarouiCSS/calendar.scss';

interface State {
  calendar: {
    date: moment.Moment,
    defaultDate: moment.Moment,
    format: string,
  }
}
const initialState: Readonly<State> = {
  calendar: {
    date: moment(),
    defaultDate: moment(),
    format: 'YYYY-MM-DD'
  }
}
export default class Index extends Component<{}, State> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页',
  }

  state = {
    ...initialState,
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index' >
        <Calendar />
        <Chart/>
      </View>
    )
  }
}
