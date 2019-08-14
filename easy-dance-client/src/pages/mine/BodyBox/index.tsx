import Taro, {Component} from '@tarojs/taro';
import BodyView from './BodyView/BodyView';

interface Props {

}

interface State {

}

export default class BodyBox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return <BodyView/>;
  }
}
