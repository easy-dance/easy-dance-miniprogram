import Taro, {PureComponent} from '@tarojs/taro';
import {UserInfo} from '../../../globalData';
import LoginView from '../LoginBox/LoginView';

interface Props {}

interface State {
  avatarUrl: string
  nickName: string
}

export default class LoginBox extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      avatarUrl: '',
      nickName: '',
    };
    this.onLogin = this.onLogin.bind(this);
  }
  public onLogin(data) {
    const info: UserInfo = data.detail.userInfo;
    this.setState({
      avatarUrl: info.avatarUrl,
      nickName: info.nickName,
    });
  }
  render() {
    return(
      <LoginView
        nickName={this.state.nickName}
        avatarUrl={this.state.avatarUrl}
        onLogin={this.onLogin}
      />
    );
  }
}
