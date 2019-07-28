import Taro, { Component } from '@tarojs/taro';
import { View, Input } from '@tarojs/components';

interface Props{
    userName: string,
    password: string,
}

export default class Login extends Component<Props>{
  render(){
    return (
      <View>
        <View>
          <Input placeholder=''></Input>
        </View> 
      </View>
    )
  }
}