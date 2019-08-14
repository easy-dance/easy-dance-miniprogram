import {View, Text} from '@tarojs/components';
import Taro, {PureComponent} from '@tarojs/taro';
import {ClGrid, ClIcon} from 'mp-colorui';

import './index.scss';

interface Props {

}

export default class BodyView extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <View className='bodyBox'>
        <ClGrid col={2}>
          <View className='innerBox'>
            <ClIcon iconName='formfill' size='normal' color='yellow'/>
            <Text className='iconName'>我的约局</Text>
          </View>
          <View className='innerBox'>
            <ClIcon iconName='noticefill' size='normal' color='yellow'/>
            <Text className='iconName'>我的约局</Text>
          </View>
        </ClGrid>
        <ClGrid col={2}>
          <View className='innerBox'>
            <ClIcon iconName='profilefill' size='normal' color='yellow'/>
            <Text className='iconName'>我的约局</Text>
          </View>
          <View className='innerBox'>
            <ClIcon iconName='newshotfill' size='normal' color='yellow'/>
            <Text className='iconName'>我的约局</Text>
          </View>
        </ClGrid>
      </View>
    );
  }
}
