import { View } from '@tarojs/components';
import Taro, { Component, Config } from '@tarojs/taro';
import { LoginBox } from '../../components/loginbox/index';
import { get as getGlobaldata, UserInfo } from '../../globalData';
import './index.css';

interface Props {}

interface State {
  nickName: string,
  avatarUrl: string,
}

export default class Index extends Component<Props, State> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页',
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      nickName: getGlobaldata('userInfo').nickName,
      avatarUrl: getGlobaldata('userInfo').avatarUrl,
    };
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  getUserInfo(): any {
    Taro.getUserInfo().then(res => console.log(res))
  }

  render() {
    return (
      <View>
        <LoginBox
          nickName={this.state.nickName}
          avatarUrl={this.state.avatarUrl}
          onGetUserInfo ={this.getUserInfo}/>
      </View>
    );
  }
}
