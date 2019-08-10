import { Text, View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { ClAvatar, ClButton } from 'mp-colorui';
import {globalData, set as setGlobalData} from '../../globalData';
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
  async componentWillMount() {
    try {
      const result: any = await Taro.getStorage({key: 'userInfo'});
      result && setGlobalData('loginFlag', true);
      this.setState({
        nickname: result.data.nickName,
        avatarurl: result.data.avatarUrl,
      });
    } catch (e) {
      setGlobalData('loginFlag', false);
    }
  }

  async onGetUserInfo(info) {
    const res: any =  await Taro.cloud.callFunction({name: 'login'});
    const userInfo = {...info.detail.userInfo,
                      openid: res.result.openid}; // ES6 中的对象合并
    const result =  await Taro.request({
      url: `${globalData.default_config.server_url}/users/login`,
      data: userInfo,
    });
    await Taro.setStorage({
      key: 'userInfo',
      data: result.data,
    });
    setGlobalData('loginFlag', true);
    this.setState({
      nickname: result.data.nickName,
      avatarurl: result.data.avatarUrl,
    });
  }

  renderUnLogin() {
    return (
      <View className='buttonBox'>
        <ClButton
          bgColor='white'
        >
          暂不登录
        </ClButton>
        <ClButton
          bgColor='green'
          openType='getUserInfo'
          onGetUserInfo={this.onGetUserInfo.bind(this)}>
          微信登录
        </ClButton>
      </View>
    );
  }

  renderLogin() {
    return (
      <View className='buttonBox'>
        <ClButton>
          欢迎回来
        </ClButton>
      </View>
    );
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
                text: globalData.loginFlag ? '' : 'E',
                bgColor: 'black',
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
        <View>
          {globalData.loginFlag ?
            this.renderLogin() :
            this.renderUnLogin()
          }
        </View>
      </View>
    );
  }
}
