import React, { PureComponent } from 'react';
import { Text, View, ScrollView, FlatList, SectionList, TouchableOpacity } from 'react-native'
import api from '../../../api/index'
import { myFetch } from '../../../assets/js/util'
import styles from '../../../assets/styles/Coming'
import ExpectedMovieCard from "../../../components/ExpectedMovieCard"
import MovieCard from '../../../components/MovieCard'
import Loading from '../../../components/Loading'

class Coming extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ci: 83,
      paging: {
        hasMore: true,
        limit: 10,
        offset: 0,
        total: 0
      },
      MostExpectedMovies: [],
      comingList: [],
      movieIds: [],
      offset: 0
    }
  }

  componentDidMount() {
    this.getMostExpectedMovies()
    this.getComingMoives()
  }

  getMostExpectedMovies = () => {
    if (!this.state.paging.hasMore) return
    let parmas = {
      ci: this.state.ci,
      limit: this.state.paging.limit,
      offset: this.state.paging.offset,
      token: '',
    }
    myFetch(api.mostExpected, parmas)
      .then(res => {
        let movieList = res.coming.map(item => {
          item.img = item.img.replace('w.h', '170.230')
          let index = item.comingTitle.indexOf(' ')
          item.comingTitle = item.comingTitle.substring(0, index)
          return item
        })
        // console.log(movieList)
        this.setState({
          MostExpectedMovies: this.state.MostExpectedMovies.concat(movieList),
          paging: {
            hasMore: res.paging.hasMore,
            limit: res.paging.limit,
            offset: res.paging.offset + res.paging.limit,
            total: res.paging.total
          }
        })
      })
  }

  getComingMoives = () => {
    let params = {
      ci: this.state.ci,
      token: ''
    }

    myFetch(api.comingList, params)
      .then(res => {
        // console.log(res)
        let movieList = res.coming.map(item => {
          item.img = item.img.replace('w.h', '128.180')
          return item
        })
        let comingList = this.createSection(movieList)
        // console.log(comingList)
        this.setState({
          comingList,
          movieIds: res.movieIds,
          offset: res.coming.length + this.state.offset
        })
      })
  }

  getMoreComingMovies = () => {
    let size = 10
    if ((this.state.offset - 12) % 10 !== 0 ||
      this.state.offset >= this.state.movieIds.length) return
    let movieIds = this.state.movieIds
      .slice(this.state.offset, this.state.offset + size)
      .toString()
    let params = {
      movieIds,
      ci: this.state.ci,
      limit: size,
      token: ''
    }
    myFetch(api.moreComingList, params)
      .then(res => {
        // console.log(res)
        let movieList = res.coming.map(item => {
          item.img = item.img.replace('w.h', '128.180')
          return item
        })
        let comingList = this.createSection(movieList)
        this.setState({
          comingList,
          offset: res.coming.length + this.state.offset
        })
      })
  }

  createSection = (movieList) => {
    let comingList = this.state.comingList.slice(0)
    movieList.forEach(item => {
      let data = comingList.length && comingList[comingList.length - 1].data
      if (data && data[0].rt === item.rt) {
        data.push(item)
      } else {
        comingList.push({
          title: item.comingTitle,
          data: [item]
        })
      }
    })
    return comingList
  }

  renderMostExpectedMovie = () => {
    return (
      <View style={styles.wrapper}>
        <View style={styles.mostExpectd}>
          <Text style={styles.title}>近期最受期待</Text>
          <FlatList
            style={styles.mostExpectdList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onEndReachedThreshold={0.1}
            onEndReached={this.getMostExpectedMovies}
            data={this.state.MostExpectedMovies}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  this.props.navigation.navigate('movieDetail')
                }}>
                <ExpectedMovieCard {...item}></ExpectedMovieCard>
              </TouchableOpacity>)}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    )
  }

  render() {
    return (
      <>
        <View style={styles.comingList}>
          {
            this.state.comingList ? (
              <SectionList
                ListHeaderComponent={this.renderMostExpectedMovie()}
                ListFooterComponent={<Loading></Loading>}
                onEndReachedThreshold={0.1}
                onEndReached={this.getMoreComingMovies}
                style={styles.comingList}
                renderItem={({ item }) => <MovieCard {...item}></MovieCard>}
                renderSectionHeader={({ section: { title } }) => (
                  <Text style={styles.sectionTitle}>{title}</Text>
                )}
                sections={this.state.comingList}
                keyExtractor={(item) => item.id.toString()} />
            ) : null
          }
        </View>
      </>
    );
  }
}

export default Coming;