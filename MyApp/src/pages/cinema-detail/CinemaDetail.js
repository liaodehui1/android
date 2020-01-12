import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import api from '../../api/index'
import { myFetch, strLimit } from '../../assets/js/util'
import HeaderTitle from '../../components/HeaderTitle'
import TuanCard from '../../components/TuanCard'
import Loading from '../../components/Loading'
import MovieShow from './MovieShow'
import styles from '../../assets/styles/CinemaDetail'

class CinemaDetail extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      cinemaData: {},
      divideDealList: [],
      activity: {},
      showData: [],
      loading: true
    }
  }

  componentDidMount() {
    // console.log(this.props.navigation.state.params)
    let cinemaId = this.props.navigation.state.params.id
    myFetch(api.cinemaDetail, { cinemaId })
      .then(res => {
        console.log(res)
        this.setState({
          cinemaData: res.cinemaData,
          divideDealList: res.dealList.divideDealList,
          activity: res.dealList.activity,
          showData: res.showData,
          loading: false
        })
      })
  }

  _renderTuanList(divideDealItem, index) {
    return (
      <View key={index + ''}>
        <Text style={styles.sectionTitle}>{divideDealItem.title}</Text>
        {
          divideDealItem.dealList.map((item) => {
            return <TuanCard {...item} key={item.dealId.toString()}></TuanCard>
          })
        }
      </View>
    )
  }
  render() {
    const { cinemaData } = this.state
    return (
      <ScrollView>
        <HeaderTitle title={this.props.navigation.state.params.title}
          navigation={this.props.navigation} hasBack={true}></HeaderTitle>
        {
          this.state.loading ? (
            <Loading></Loading>
          ) : (
              <View style={{ flexDirection: 'column', }}>
                <View style={styles.cinemaWrap}>
                  <View style={styles.cinemaInfo}>
                    <Text style={styles.title}>{cinemaData.nm && strLimit(cinemaData.nm, 13)}</Text>
                    <Text style={styles.addr}>{cinemaData.addr && strLimit(cinemaData.addr)}</Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={1}
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
                      <Image source={require('../../assets/images/location.png')}
                        style={styles.locationIcon}></Image>
                    </View>
                  </TouchableOpacity>
                </View>
                <MovieShow showData={this.state.showData}></MovieShow>
                {
                  this.state.divideDealList.length ? (
                    <View style={styles.tuanWrap}>
                      <View style={styles.tuanTitleWrap}>
                        <Text style={styles.tuanTitle}>
                          {this.state.activity.title}
                        </Text>
                        <View>
                          <Text style={styles.desc}>
                            {this.state.activity.desc}
                          </Text>
                          <Image style={styles.icon}
                            resizeMode="contain"
                            source={{uri: this.state.activity.icon}} />
                        </View>
                      </View>
                      <View style={styles.tuanList}>
                        {
                          this.state.divideDealList.map((item, index) => {
                            return this._renderTuanList(item, index)
                          })
                        }
                      </View>
                    </View>
                  ) : null
                }
              </View>
            )
        }
      </ScrollView>
    );
  }
}

export default CinemaDetail;