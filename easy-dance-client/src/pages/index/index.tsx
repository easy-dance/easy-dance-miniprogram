import Taro, { Component, Config } from '@tarojs/taro'
import './index.scss'

import Waterfall from '../../components/waterfall/index'


type cardList = {
  imgsrc?: string,
  title?: string,
  size?: 'small' | 'middle' | 'large'
}


export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  getCardList(): Array<cardList> {
    var cardList: any[] = []
    var size: string = '';
    for (var i = 0; i < 12; i++) {
      if (i === 2 || i === 4 || i === 7 || i === 10) { size = 'small' }
      else if (i === 1 || i === 6 || i === 8 || i===9) { size = 'large' }
      else { size = 'middle' }
      cardList.push({ imgsrc: '../../img/luffy.jpeg', title: 'Luffy', size: size })
    }
    return cardList
  }

  render() {

    return (
      <Waterfall cardList={this.getCardList()} />
    )
  }
}
