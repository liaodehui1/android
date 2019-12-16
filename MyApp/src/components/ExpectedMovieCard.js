import React, { PureComponent } from 'react'
import { Text, View,Image, ImageBackground, TouchableOpacity } from "react-native"
import styles from '../assets/styles/ExpectedMovieCard'
import { strLimit } from "../assets/js/util"

class ExpectedMovieCard extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <View style={styles.ExpectedMovieCard}>
          <View style={styles.imgBox}>
            <ImageBackground style={styles.poster}
              source={{ uri: this.props.img }}>
              <View style={styles.wish}>
                <Text style={styles.wishNum}>{this.props.wish}人想看</Text>
              </View>
              <TouchableOpacity
                 style={styles.toggleWish}
                 activeOpacity={1}
                 onPress={() => {
                   this.props.navigation.navigate('movieDetail')
                 }}>
                <View style={styles.wishImgBox}>
                  <Image style={styles.wishImg}
                    source={require('../assets/images/wish.png')}></Image>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View>
            <Text style={styles.name}>{strLimit(this.props.nm, 5)}</Text>
            <Text style={styles.date}>{this.props.comingTitle}</Text>
          </View>
        </View>
      </>
    );
  }
}

export default ExpectedMovieCard