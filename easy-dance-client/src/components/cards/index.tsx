import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import imgSrc from '../../img/luffy.jpeg'

import './index.css'

interface Props {
    imgsrc?: string,
    title?: string,
    size?: 'small' | 'middle' | 'large'
}

export default class Card extends Component<Props>{
    render() {
        return (
            <View>
                <View className={this.props.size ? this.props.size : 'middle'}>
                    <Image src={imgSrc} className='cardImage'></Image>
                    {this.props.title ? <Text>{this.props.title}</Text> : ''}
                </View>
            </View>
        )
    }
}
