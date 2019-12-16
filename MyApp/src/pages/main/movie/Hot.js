import React, { Component } from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native'
import api from '../../../api/index'
import { myFetch } from '../../../assets/js/util'
import MovieCard from '../../../components/MovieCard'

class Hot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hotMovies: [],
      movieIds: [],
      offset: 0
    }
    console.log(this.props.navigation)
  }
  componentDidMount() {
    myFetch(api.movieOnInfoList)
      .then(res => {
        let movieList = res.movieList.map(item => {
          item.img = item.img.replace('w.h', '128.180')
          return item
        })
        // console.log(movieList)
        this.setState({
          hotMovies: movieList,
          movieIds: res.movieIds,
          offset: movieList.length,
        })
      })
  }

  getHotMovies = () => {
    let size = 10
    if ((this.state.offset - 12) % 10 !== 0 ||
    this.state.offset >= this.state.movieIds.length) return
    let movieIds = this.state.movieIds
      .slice(this.state.offset, this.state.offset + size)
      .toString()
    let params = {
      movieIds,
      token: ''
    }
    myFetch(api.moreComingList, params)
      .then(res => {
        // console.log(res)
        let movieList = res.coming.map(item => {
          item.img = item.img.replace('w.h', '128.180')
          return item
        })
        this.setState({
          hotMovies: this.state.hotMovies.concat(movieList),
          offset: this.state.offset + movieList.length,
        })
      })
  }

  render() {
    return (
      <>
        <FlatList
          style={{ paddingLeft: 10 }}
          onEndReachedThreshold={0.3}
          onEndReached={this.getHotMovies}
          data={this.state.hotMovies}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                this.props.navigation.navigate(
                  'MovieDetail',
                  {
                    'title': item.nm,
                    'id': item.id
                  }
                )
              }}>
              <MovieCard {...item}></MovieCard>
            </TouchableOpacity>)}
          keyExtractor={(item) => item.id.toString()}
        />
      </>
    );
  }
}

export default Hot;