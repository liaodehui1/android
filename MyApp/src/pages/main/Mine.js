import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import HeaderTitle from '../../components/HeaderTitle'
import styles from '../../assets/styles/Mine'

class Mine extends Component {
  render() {
    return (
      <View style={styles.body}>
        <HeaderTitle title={'我的'}></HeaderTitle>
        <View style={styles.myCenter}>
          <ImageBackground style={styles.header}
            source={require('../../assets/images/mine_bg.png')}>
            <View style={styles.avatarImg}>
              <Image style={styles.avatar}
                source={{ uri: 'http://img.meituan.net/avatar/f5c0a32289228104eef4cf68eced4ee53072.jpg' }}></Image>
            </View>
          </ImageBackground>
          <View>
            <View style={styles.group}>
              <View style={styles.orders}>
                <View>
                  <Text style={styles.title}>我的订单</Text>
                  <Image style={styles.titleLine}
                    source={require('../../assets/images/mine_line_bg.png')}></Image>
                </View>
                <View style={styles.list}>
                  <TouchableOpacity
                    style={styles.orderItem}
                    activeOpacity={1}
                    onPress={() => {
                      this.props.navigation.navigate('MyOrders')
                    }}>
                    <ImageBackground style={styles.movie}
                      source={require('../../assets/images/mine_movie_bg.png')}>
                      <Text style={styles.orderItemText}>电影</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.orderItem}
                    activeOpacity={1}
                    onPress={() => {
                      this.props.navigation.navigate('Store')
                    }}>
                    <ImageBackground style={styles.store}
                      source={require('../../assets/images/mine_store_bg.png')}>
                      <Text style={styles.orderItemText}>商城</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.group}>
              <TouchableOpacity
                style={[styles.item]}
                activeOpacity={1}
                onPress={() => {
                  this.props.navigation.navigate('myCoupon')
                }}>
                <Text style={styles.itemTitle}>优惠劵</Text>
                <View style={styles.arrow}></View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                activeOpacity={1}
                onPress={() => {
                  this.props.navigation.navigate('myCoupon')
                }}>
                <Text style={styles.itemTitle}>折扣卡</Text>
                <View style={styles.arrow}></View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Mine;