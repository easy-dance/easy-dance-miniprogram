import { View } from '@tarojs/components';
import Taro, {Component} from '@tarojs/taro';
import Footer from '../../components/footer/index';
import BodyBox from './BodyBox/index';
import HeaderBox from './HeaderBox/index';

import './index.scss';

interface Props {
  avartarUrl: string,
  nickName: string,
  signature: string,
}

export default class MineView extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return(
      <View className='out'>
        <HeaderBox/>
        <BodyBox/>
        <Footer/>
      </View>
    );
  }
}
