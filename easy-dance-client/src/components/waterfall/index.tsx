import Taro, { Component } from "@tarojs/taro"
import { View } from "@tarojs/components"

import Card from '../cards/index'

import './index.css'

type CardProps = {
  imgsrc?: string,
  title?: string,
  size?: 'small' | 'middle' | 'large'
}

interface Props {
  cardList: Array<CardProps>
}

export default class Login extends Component<Props> {

  state = {
    context: {}
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  getLogin = () => {

  }

  render() {
    return (
      <div>
        <View className='waterfall-box'>
          {this.props.cardList.map(item => {
            return <Card title={item.title} size={item.size}></Card>
          })}
        </View>
      </div>
    )
  }
}
