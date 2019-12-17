import React, { PureComponent } from 'react';
import {  View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../assets/styles/TuanCard'

export default class TuanCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getLabel = (recommendPersonNum) => {
    switch(recommendPersonNum) {
      case 1:
        return '单人'
      case 2:
        return '双人'
      default:
        return '多人'
    }
  }

  render() {
    return (
      <TouchableOpacity style={styles.tuanCard}
        activeOpacity={1}>
        <View style={styles.imgBox}>
          <Image style={styles.imageViewer} 
            source={{uri: this.props.imageUrl.replace('w.h','440.0')}}></Image>
          {
            this.props.cardTag ? (
              <Text style={[styles.tag, styles.tagType(this.props.cardTag)]}>
                {this.props.cardTag}
              </Text>
            ) : null
          }
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.sellNum}>{this.props.curNumberDesc}</Text>
          <View style={styles.price}>
            <Text style={styles.sellPrice}>
              <Text style={styles.yuan}>￥</Text>
              <Text style={styles.money}>{this.props.price}</Text>
            </Text>
          </View>
          <View style={styles.buyBox}>
            <Text style={styles.buyBtn}>去购买</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
