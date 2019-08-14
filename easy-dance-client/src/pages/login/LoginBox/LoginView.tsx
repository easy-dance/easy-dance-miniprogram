import { Text, View } from '@tarojs/components';
import Taro, { PureComponent } from '@tarojs/taro';
import { ClAvatar, ClButton } from 'mp-colorui';
import './index.scss';

interface LoginProps {
  avatarUrl: string
  nickName: string
  onLogin: (data: any) => void
}

export default class LoginView extends PureComponent<LoginProps> {
  constructor(props: LoginProps) {
    super(props);
  }
  render() {
    return (
      <View className='out'>
        <ClAvatar
          shape='round'
          size='xlarge'
          headerArray={[
            {
              text: this.props.avatarUrl ? '' : 'E',
              url: this.props.avatarUrl || '',
            },
          ]}
        ></ClAvatar>
        <Text className='nickName'>
          {this.props.nickName === '' ? '暂未登录' : this.props.nickName}
        </Text>
        <ClButton
          openType='getUserInfo'
          onGetUserInfo={(data) => this.props.onLogin(data)}
          size='large'
          bgColor='green'
        >
          微信登录
        </ClButton>
    </View>
    );
  }
}
