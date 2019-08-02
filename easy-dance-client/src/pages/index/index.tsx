import { Text, View } from '@tarojs/components';
import Taro, { Component, Config } from '@tarojs/taro';
import { Login } from '../../components/login/index';
import './index.css';

interface Props {}

interface State {
  loginState: string,
  userName: string,
  password: string,
  serverInfo: string,
}

const DEFAULT_STATE: State = {
  loginState: '未登录',
  userName: 'SilenceRichard',
  password: '123456',
  serverInfo: '',
};

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

  constructor() {
    super();
    this.state = DEFAULT_STATE;
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  loginMethod(): void {
    const that = this;
    Taro.request({
      url: 'http://localhost:8000/users/login/',
      data: {
        username: this.state.userName,
        password: this.state.password,
      },
      success(res) {
        that.setState({
          serverInfo: res.data,
        });
      },
    });
  }

  render() {
    return (
      <View>
         <Text>{ this.state.loginState }</Text>
         <Login
          userName={this.state.userName}
          password={this.state.password}
          onlogin={() => this.loginMethod()}
         />
         <Text>这是服务端接收的消息:</Text>
         <Text className='serverText'>{ this.state.serverInfo }</Text>
      </View>
    );
  }
}
