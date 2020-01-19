import React, { Component,PureComponent } from 'react';
import {Text, View} from 'react-native'
import {strLimit} from '../assets/js/util'
import styles from '../assets/styles/CinemaCard'
import commonStyles from '../assets/styles/CommonStyle'

class CinemaCard extends PureComponent {
  constructor(props) {
    super(props)

  }

  getTagName = (tagName) => {
    switch(tagName) {
      case 'allowRefund':
        return '退'
      case 'buyout': 
        return ''
      case 'cityCardTag':
        return ''
      case 'deal':
        return ''
      case 'endorse':
        return '改签'
      case 'snack':
        return '小吃'
      case 'vipTag':
        return '折扣卡'
      case 'sell': 
        return '座'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={commonStyles.flexCenter}>
          <Text style={styles.nm}>{strLimit(this.props.nm)}</Text>
          {
            this.props.sellPrice ? (
              <Text style={styles.priceBox}>
                <Text style={styles.price}>{this.props.sellPrice}</Text>
                <Text style={styles.q}>元起</Text>
              </Text>
            ) : null
          }
        </View>
        <View style={[commonStyles.flexCenter,styles.locationBox]}>
          <Text style={styles.addr}>{strLimit(this.props.addr,18)}</Text>
          <Text style={styles.distance}>{this.props.distance}</Text>
        </View>
        <View style={[commonStyles.flexCenter,styles.labelBox]}>
          {
            Object.keys(this.props.tag).map((tagName,index) => {
                if(tagName === 'hallType' || tagName === 'hallTypeVOList') return
                if(this.props.tag[tagName]) {
                  return (
                    <Text style={[styles.tag,styles.tagName(tagName)]}
                      key={'tag' + index}>{this.getTagName(tagName)}</Text>
                  )
                }
            })
          }
          {
            this.props.tag['hallType'] && this.props.tag['hallType'].map((item,index) => {
              return (
                <Text style={[styles.tag,styles.tagName('hallType')]}
                  key={'hallType' + index}>{item}</Text>
              )
            })
          }
        </View>
        {
          this.props.promotion && this.props.promotion.cardPromotionTag ? 
          (<View style={commonStyles.flexCenter}>
            <Text style={styles.cardIcon}>卡</Text>
            <Text style={styles.discountText}>{this.props.promotion.cardPromotionTag}</Text>
          </View>) : null
        }
      </View>
    );
  }
}

export default CinemaCard;