import { Button, Image, View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';

interface Props {
  nickName: string,
  avatarUrl: string,
  onGetUserInfo?: () => any,
}

export class LoginBox extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return(
      <View>
        <Image src={this.props.avatarUrl}></Image>
        <Button openType='getUserInfo' onClick={this.props.onGetUserInfo}>授权登录</Button>
      </View>
    );
  }
}
