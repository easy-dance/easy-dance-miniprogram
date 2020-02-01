import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtMessage } from 'taro-ui';

import * as DanceService from '@/services/dance';

// import DanceList from '@/pages/dance/DanceList';
import NavBar from '@/components/NavBar/NavBar';
import TabBar from '@/components/TabBar/TabBar';
import "taro-ui/dist/style/components/message.scss";
import './index.scss'

interface State {
  current: number,
  title: string,
  page: number,
}
const initialState: Readonly<State> = {
  current: 0,
  title: '约舞',
  page: 0,
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
    // navigationBarTitleText: '首页',
  }

  state = {
    ...initialState,
  }

  componentWillMount() { }

  componentDidMount = async() => {
    const { page } = this.state;
    const data = await DanceService.getDanceList(page);
    console.log(data);
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onTabClick = (current: number) => {
    const title = current === 0 ? '约舞' : '我的'
    this.setState({ current, title })
  };

  render() {
    const { current, title } = this.state;
    return (
      <View className='index' >
        <NavBar title={title}/>
        {/* <DanceList/> */}
        <View className='bottomTabBar'>
          <TabBar 
            onTabClick={(current) => this.onTabClick(current)} 
            current={current} />
        </View>
        <AtMessage />
      </View>
    )
  }
}
