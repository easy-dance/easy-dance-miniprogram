import { Button, View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';

interface Props {
    userName: string,
    password: string,
    onlogin: () => void,
}

export class Login extends Component<Props> {
  render() {
    return (
      <View>
        <View>用户名:{this.props.userName}</View>
        <View>密码:{this.props.password}</View>
        <Button onClick={() => this.props.onlogin()}>登录</Button>
      </View>
    );
  }
}
