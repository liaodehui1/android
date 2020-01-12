import React, { PureComponent } from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Image
} from 'react-native';
import styles from '../../assets/styles/MovieShow';
import SeatCard from '../../components/SeatCard';

class MovieShow extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.getMovies(props.showData.movies),
      vipInfo: props.showData.vipInfo,
      active: 1,
      activeTab: 0
    };
  }
  getMovies = (movies) => {
    return movies.map(movie => {
      movie.img = movie.img.replace('w.h', '148.208')
      return movie
    })
  }
  changeActive = (index) => {
    this.setState({
      active: index
    })
  }
  _renderPost = (movie, index) => {
    return (
      <TouchableOpacity key={movie.id.toString()}
        onPress={() => { this.changeActive(index) }}
        activeOpacity={1}
        style={[
          styles.post,
          index === this.state.active ? styles.activePost : {}
        ]}>
        <Image source={{ uri: movie.img }}
          style={styles.img}></Image>
      </TouchableOpacity>
    )
  }
  changeActiveTab = (index) => {
    this.setState({
      activeTab: index
    })
  }
  _renderTab = (dateShow, index) => {
    return (
      <TouchableOpacity onPress={() => { this.changeActiveTab(index) }}
        style={styles.tab}
        activeOpacity={1}
        key={index.toString()}>
        <Text style={[
          styles.label,
          index === this.state.activeTab && styles.active
        ]}>{dateShow}</Text>
      </TouchableOpacity>
    )
  }
  _renderVip = (vip, index) => {
    return (
      <View style={styles.discountBlock}
        key={index.toString()}>
        <TouchableOpacity onPress={() => { this.changeActiveTab(index) }}
          activeOpacity={1}
          style={styles.vipTips}>
          <View style={styles.tagBox}>
            <Text style={styles.tag}>{vip.tag}</Text>
          </View>
          <View style={styles.labelText}>
            <Text style={styles.viptitle}>{vip.title}</Text>
          </View>
          <View style={styles.processBox}>
            <Text style={styles.process}>{vip.process}</Text>
            <Text style={styles.arrow}></Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  _renderHasSeat = () => {
    return (
      <View style={[styles.hasSeatWrap, styles.bLine]}>
        {
          this.state.movies[this.state.active]
            .shows[this.state.activeTab].plist.map((item, index) => {
              const isLast = index === this.state.movies[this.state.active]
                .shows[this.state.activeTab].plist.length - 1
              return (
                <SeatCard
                  key={item.seqNo}
                  list={item}
                  isLast={isLast}
                  dur={this.state.movies[this.state.active].dur}></SeatCard>
              )
            })
        }
      </View>
    )
  }
  _renderNoSeat = () => {
    const nextDate = this.state.movies[this.state.active]
      .shows[this.state.activeTab + 1].showDate
    const index = this.state.activeTab + 1
    return (
      <View style={[styles.noSeatWrap, styles.bLine]}>
        <View style={styles.icon}>
          <Image style={styles.noseat}
            source={require('../../assets/images/noseat.png')} 
            resizeMode="contain"/>
        </View>
        <Text style={styles.text}>今日场次已映完</Text>
        <TouchableOpacity onPress={() => { this.changeActiveTab(index) }}
          style={styles.tab}
          style={styles.nextDateButton}
          activeOpacity={1}>
          <Text style={styles.btnText}>
            点击查看{nextDate}的场次
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
  render() {
    return (
      <View>
        <View style={styles.MovieShow}>
          <Image style={styles.absolute}
            source={{ uri: this.state.movies[this.state.active].img }}>
          </Image>
          <View style={styles.blur}></View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {
              this.state.movies.map((movie, index) => {
                return this._renderPost(movie, index)
              })
            }
          </ScrollView>
          <View style={styles.triangle}></View>
        </View>
        <View style={styles.movieInfo}>
          <View style={styles.movieTitle}>
            <Text style={styles.title}>
              {this.state.movies[this.state.active].nm}
            </Text>
            <Text style={styles.grade}>
              <Text style={styles.num}>
                {this.state.movies[this.state.active].sc}
              </Text>
              <Text style={styles.small}>分</Text>
            </Text>
          </View>
          <View style={styles.movieDesc}>
            <Text style={styles.desc}>
              {this.state.movies[this.state.active].desc}
            </Text>
          </View>
        </View>
        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.tabs}>
            {
              this.state.movies[this.state.active].shows.map((show, index) => {
                return this._renderTab(show.dateShow, index)
              })
            }
          </View>
        </ScrollView>
        {
          this.state.vipInfo.map((vip, index) => {
            return this._renderVip(vip, index)
          })
        }
        {
          this.state.movies[this.state.active]
            .shows[this.state.activeTab].plist.length ?
            this._renderHasSeat() : this._renderNoSeat()
        }
      </View>
    );
  }
}

export default MovieShow;