import { Text, View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { ClAvatar, ClButton } from 'mp-colorui';
import {globalData} from '../../globalData';
import './index.scss';

interface Props {}

interface State {
  nickname: string,
  avatarurl: string,
}

export class LoginBox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nickname: '暂无昵称',
      avatarurl: '',
    };
  }
  async onGetUserInfo(info) {
    const res: any =  await Taro.cloud.callFunction({name: 'login'});
    const userInfo = {...info.detail.userInfo,
                      openid: res.result.openid}; // ES6 中的对象合并
    const result =  await Taro.request({
      url: `${globalData.default_config.server_url}/users/login`,
      data: userInfo,
    });
    this.setState({
      nickname: result.data.nickName,
      avatarurl: result.data.avatarUrl,
    });
  }
  render() {
    return(
      <View>
        <View className='avatarBox'>
          <ClAvatar
            key='avatar'
            headerArray={[
              {
                url: this.state.avatarurl,
                text: 'E',
                bgColor: 'yellow',
              },
            ]}
            size='xlarge'
            shape='round'
            shadow={true}
          >
          </ClAvatar>
        </View>
        <View className='nickNameBox'>
          <Text className='nickName'>
            {this.state.nickname}
          </Text>
        </View>
        <View className='buttonBox'>
          <ClButton
            bgColor='green'
            openType='getUserInfo'
            onGetUserInfo={this.onGetUserInfo.bind(this)}>
              授权登录
          </ClButton>
        </View>
      </View>
    );
  }
}
