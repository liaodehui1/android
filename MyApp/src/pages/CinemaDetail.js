import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native'
import api from '../api/index'
import { myFetch, strLimit } from '../assets/js/util'
import HeaderTitle from '../components/HeaderTitle'
import styles from '../assets/styles/CinemaDetail'

class CinemaDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cinemaData: {}
    }
  }

  componentDidMount() {
    // console.log(this.props.navigation.state.params)
    let cinemaId = this.props.navigation.state.params.id
    myFetch(api.cinemaDetail, { cinemaId })
      .then(res => {
        console.log(res)
        this.setState({
          cinemaData:res.cinemaData
        })
      })
  }

  render() {
    const {cinemaData} = this.state
    return (
      <>
        <HeaderTitle title={cinemaData.nm}
          navigation={this.props.navigation} hasBack={true}></HeaderTitle>
        <View style={styles.cinemaWrap}>
          <View style={styles.cinemaInfo}>
            <Text style={styles.title}>{cinemaData.nm && strLimit(cinemaData.nm)}</Text>
            <Text style={styles.addr}>{cinemaData.addr && strLimit(cinemaData.addr)}</Text>
          </View>
          <TouchableOpacity 
            onPress={() => {
              this.props.navigation.navigate(
                'LightMap',
                {
                  'title': cinemaData.nm,
                  'lat': cinemaData.lat,
                  'lng': cinemaData.lng
                }
              )
            }}
            style={styles.button}>
            <View style={styles.location}>
              <Image source={require('../assets/images/location.png')}
                style={styles.locationIcon}></Image>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default CinemaDetail;