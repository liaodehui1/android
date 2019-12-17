import React, { Component } from 'react';
import { Text,View,Image, TouchableOpacity } from 'react-native'
import HeaderTitle from '../../../components/HeaderTitle'
import Container from './Container'
import styles from '../../../assets/styles/Movie'
import Hot from './Hot'
import Coming from './Coming'

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0
    }
  }
  changeActive = (type) => {
    this.setState({
      active: type
    })
  }
  render() {
    return (
      <>
        <HeaderTitle title={'猫眼电影'}></HeaderTitle>
        <View style={styles.TabBar}>
          <View style={styles.cityEntry}>
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('citylist')
              }}
              style={styles.cityBox}
              activeOpacity={1}>
              <Text style={styles.cityName}>南昌</Text>
              <Text style={styles.cityEntryArrow}></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabs}>
            <TouchableOpacity onPress={() => {this.changeActive(0)}}
              style={styles.tab}
              activeOpacity={1}>
              <Text style={[styles.label, !this.state.active && styles.active]}>正在热映</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.changeActive(1)}}
              style={styles.tab}
              activeOpacity={1}>
              <Text style={[styles.label, this.state.active && styles.active]}>即将上映</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.searchEntry}>
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('search')
              }}
              style={styles.cityBox}
              activeOpacity={1}>
              <Image style={styles.searchIcon}
              source={require('../../../assets/images/search.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.movieList}>
            {
              !this.state.active ? (
                <Hot navigation={this.props.navigation}></Hot>
              ) : (<Coming></Coming>)
            }
        </View>
      </>
    );
  }
}

export default Movie;