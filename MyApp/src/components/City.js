import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../assets/styles/City';

class City extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      city: props.city
    }
  }
  render() {
    const {city} = this.state
    return (
      <View style={styles.cityEntry}>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('citylist')
        }}
          style={styles.cityBox}
          activeOpacity={1}>
          <Text style={styles.cityName}>{city}</Text>
          <Text style={styles.cityEntryArrow}></Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default City;