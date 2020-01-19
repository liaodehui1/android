import React, { PureComponent } from 'react';
import { 
  Text, 
  View, 
  Image, 
  TextInput, 
  FlatList,
  TouchableOpacity 
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import Loaing from '../components/Loading';
import CinemaCard from '../components/CinemaCard';
import styles from '../assets/styles/Search';
import api from '../api/index';
import { myFetch, debounce } from '../assets/js/util';

class Search extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      stype: this.getstype(props.navigation.state.params.searchtype),
      cityId: props.navigation.state.params.cityId,
      kw: '',
      cinemas: [],
      loading: false,
      total: 0
    }
  }
  getstype = (searchtype) => {
    if (searchtype === 'cinema') {
      return 2
    }
  }
  getPlaceholder = (stype) => {
    if (stype === 2) {
      return '搜影院'
    }
  }
  changeKw = (kw) => {
    this.setState({ 
      kw,
      loading: true
    })
    this.getCinemas(kw)
  }
  getCinemas = debounce((kw) => {
    let params = {
      kw,
      cityId: this.state.cityId,
      stype: this.state.stype
    }
    myFetch(api.search, params)
      .then(res => {
        console.log(res)
        let cinemas = res.cinemas ? res.cinemas.list : []
        let total = res.cinemas ? res.cinemas.total : 0
        this.setState({
          cinemas,
          loading: false,
          total
        })
      })
  })
  getMoreCinemas = () => {
    console.log(this.state.cinemas.length, this.state.total)
    if (this.state.cinemas.length === this.state.total || this.state.loading) return;
    this.setState({loading: true})
    let params = {
      keyword: this.state.kw,
      ci: this.state.cityId,
      offset: this.state.cinemas.length,
      limit: 20
    }

    myFetch(api.cinemas, params)
      .then(res => {
        console.log(res)
        this.setState({
          cinemas: this.state.cinemas.concat(res.cinemas),
          loading: false
        })
      })
  }
  render() {
    return (
      <>
        <HeaderTitle title={'猫眼电影'} hasBack={true}
          navigation={this.props.navigation}></HeaderTitle>
        <View style={styles.searchWrapper}>
          <View style={styles.searchHeader}>
            <View style={styles.inputWrapper}>
              <Image style={styles.searchIcon}
                source={require('../assets/images/search.png')} />
              <TextInput style={styles.searchInput}
                placeholder={this.getPlaceholder(this.state.stype)}
                onChangeText={(kw) => this.changeKw(kw)}
                value={this.state.kw} />
              {
                this.state.kw ? (
                  <TouchableOpacity style={styles.delInput}
                    activeOpacity={1}
                    onPress={() => {
                      this.changeKw('')
                    }}>
                    <Image style={styles.delIcon}
                      resizeMode="contain"
                      source={require('../assets/images/del.png')} />
                  </TouchableOpacity>
                ) : null
              }
            </View>
            <TouchableOpacity style={styles.cancleBtn}
              activeOpacity={1}
              onPress={() => {
                this.props.navigation.goBack()
              }}>
              <Text style={styles.cancle}>取消</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapper}>
            <FlatList
              onEndReachedThreshold={0.1}
              onEndReached={this.getMoreCinemas}
              ListFooterComponent={() => {
                return this.state.loading ?
                  (<Loaing></Loaing>) : null
              }}
              data={this.state.cinemas}
              renderItem={({ item }) => {
                item.tag = {
                  sell: item.sell,
                  deal: item.deal,
                  allowRefund: item.allowRefund,
                  endorse: item.endorse,
                  snack: item.snack
                }
                return (
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      this.props.navigation.navigate(
                        'CinemaDetail',
                        {
                          'id': item.id,
                          'title': item.nm
                        }
                      )
                    }}>
                    <CinemaCard {...item}></CinemaCard>
                  </TouchableOpacity>
                )
              }}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      </>
    )
  }
}

export default Search;