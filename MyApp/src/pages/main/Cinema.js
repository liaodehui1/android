import React, { PureComponent } from 'react';
import {FlatList, View, TouchableOpacity, Image, Text} from 'react-native'
import api from '../../api/index'
import {myFetch} from '../../assets/js/util'
import HeaderTitle from '../../components/HeaderTitle'
import CinemaCard from '../../components/CinemaCard'
import Loaing from '../../components/Loading'
import styles from '../../assets/styles/Cinema'
import City from '../../components/City'

class Cinema extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      cinemas: [],
      page: 1,
      size: 20
    }
    this.params = {
      day: (new Date).toJSON().match(/[0-9]+\-[0-9]+\-[0-9]+/)[0],
      offset: 20,
      limit: 20,
      districtId: -1,
      lineId: -1,
      hallType: -1,
      brandId: -1,
      serviceId: -1,
      areaId: -1,
      stationId: -1,
      item: '',
      updateShowDay: true,
      reqId: 1575975648816,
      cityId: 83,
      optimus_uuid: 'BB8519301B0511EAA08939D3878E1E4B89037DBD0A7249668B9EF81874125514',
      optimus_risk_level: 71,
      optimus_code: 10,
    }
  }

  componentDidMount(){
    this.getCinemas()
  }

  getCinemas = () => {
    this.setState({
      loading: true
    })
    let page = this.state.page
    let cinemas = this.state.cinemas
    if(this.state.size < 20) {
      return this.setState({
        loading: false
      })
    }
    this.params.offset = (page - 1) * 20
    myFetch(api.cinemaList,this.params)
      .then(res => {
        console.log(res)
        this.setState({
          loading: false,
          cinemas: cinemas.concat(res.cinemas),
          page: page + 1,
          size: res.cinemas.length
        })
      })
  }

  render() {
    return (
      <>
        <HeaderTitle title={'影院'}></HeaderTitle>
        <View style={styles.topbar}>
          <City city="南昌"></City>
          <TouchableOpacity style={styles.searchInput}
            activeOpacity={1}
            onPress={() => {
              this.props.navigation.navigate(
                'Search',
                {
                  searchtype: 'cinema',
                  cityId: this.params.cityId
                }
              )
            }}>
            <Image style={styles.searchImg}
              source={require('../../assets/images/search.png')} />
            <Text style={styles.searchTip}>搜影院</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapper}>
          <FlatList
            onEndReachedThreshold={0.1}
            onEndReached={this.getCinemas}
            ListFooterComponent={() => {
              return this.state.loading ? 
              (<Loaing></Loaing>) : null
            }}
            data={this.state.cinemas}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={1} 
                onPress={() => {
                  this.props.navigation.navigate(
                    'CinemaDetail',
                    {
                      'id':item.id,
                      'title':item.nm
                    }
                  )}}>
                <CinemaCard {...item}></CinemaCard>
              </TouchableOpacity>)}
            keyExtractor={(item) => item.id.toString()}
          />
      </View>
      </>
    );
  }
}

export default Cinema;