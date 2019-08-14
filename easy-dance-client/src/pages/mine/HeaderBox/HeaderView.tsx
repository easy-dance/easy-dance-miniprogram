import { View, Text } from '@tarojs/components';
import Taro, {Component} from '@tarojs/taro';
import { ClAvatar, ClIcon } from 'mp-colorui';

import './index.scss';

interface Props {

}

export default class HeaderView extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return(
      <View className='headerBox'>
        <View className='backend'>
          <View className='header'>
            <ClAvatar
              size='xlarge'
              shape='round'
              headerArray={[{
                text: 'E',
              }]}
            />
            <View className='nickNameBox'>
              <View className='sex'>
               <ClIcon iconName='male' color='blue' size='xsmall'></ClIcon>
              </View>
              <Text className='nickName'>八哥</Text>
            </View>
            <Text className='signature'>爱写代码不爱debug的programmer八可可</Text>
          </View>
        </View>
      </View>
    );
  }
}
