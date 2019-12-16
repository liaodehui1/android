import React, { Component } from 'react';
import {Text} from 'react-native'
import HeaderTitle from '../components/HeaderTitle'

class MovieDetail extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <HeaderTitle title={this.props.navigation.state.params.title}
          navigation={this.props.navigation} hasBack={true}></HeaderTitle>
      </>
    );
  }
}

export default MovieDetail;