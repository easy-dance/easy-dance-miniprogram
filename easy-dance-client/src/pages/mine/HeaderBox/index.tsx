import Taro, {Component} from '@tarojs/taro';

import HeaderView from './HeaderView';

interface Props {

}

export default class HeadView extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return(
      <HeaderView/>
    );
  }
}
