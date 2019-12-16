import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../assets/styles/MovieCard'
import { strLimit } from "../assets/js/util"

class MovieCard extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.movieCard}>
        <View style={styles.imgBox}>
          <Image style={styles.avatar}
            source={{ uri: this.props.img }}></Image>
        </View>
        <View style={styles.Wrapper}>
          <View style={styles.contentWrapper}>
            <View style={styles.movieTitle}>
              <Text style={styles.title}>{strLimit(this.props.nm, 6)}</Text>
              {
                this.props.version === 'v2d imax' ? (
                  <Image style={[styles.version, styles.v2d_imax]}
                    source={
                      require('../assets/images/2dimax.png')
                    }></Image>
                ) : null
              }
              {
                this.props.version === 'v3d imax' ? (
                  <Image style={[styles.version, styles.v3d_imax]}
                    source={require('../assets/images/3dimax.png')}></Image>
                ) : null
              }
              {
                this.props.version === 'v3d' ? (
                  <Image style={[styles.version, styles.v3d]}
                    source={require('../assets/images/3d.png')}></Image>
                ) : null
              }
              {
                this.props.preShow ? (
                  <Image style={[styles.version, styles.preshow]}
                    source={require('../assets/images/preshow.png')}></Image>
                ) : null
              }
            </View>
            <View style={styles.detail}>
              {
                this.props.showst === 3 && this.props.sc ? (
                  <View style={styles.score}>
                    <Text style={styles.contentLine}>观众评</Text>
                    <Text style={styles.grade}>{this.props.sc}</Text>
                  </View>
                ) : this.props.showst === 3 && !this.props.sc ? (
                  <View style={styles.score}>
                    <Text style={styles.contentLine}>暂无评分</Text>
                  </View>
                ) : this.props.showst === 4 || this.props.showst === 1 ? (
                  <View style={styles.score}>
                    <Text style={styles.person}>{this.props.wish}</Text>
                    <Text style={styles.contentLine}>人想看</Text>
                  </View>
                ) : null
              }
              <View style={styles.item}>
                <Text style={styles.contentLine}>{strLimit('主演:' + this.props.star, 15)}</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contentLine}>{this.props.showInfo || `${this.props.rt}上映`}</Text>
              </View>
            </View>
          </View>
          <View style={styles.button}>
            {
              this.props.showst === 3 ? (
                <View style={[styles.btn, styles.normal]}>
                  <Text style={styles.fix}>购票</Text>
                </View>
              ) : this.props.showst === 4 ? (
                <View style={[styles.btn, styles.pre]}>
                  <Text style={styles.fix}>预售</Text>
                </View>
              ) : this.props.showst === 1 ? (
                <View style={[styles.btn, styles.wishBtn]}>
                  <Text style={styles.fix}>想看</Text>
                </View>
              ) : null
            }
          </View>
        </View>
      </View>
    );
  }
}

export default MovieCard;