import React, { Component } from 'react';
import {Text, View,TouchableOpacity} from 'react-native'
import {strLimit} from '../assets/js/util'
import styles from '../assets/styles/HeaderTitle'

class HeaderTitle extends Component {
  back = () => {
    this.props.navigation.goBack(); 
  }
  render() {
    return (
      <View style={styles.container(this.props.backgroundColor)}>
        {
          this.props.hasBack ? (
            <TouchableOpacity onPress={this.back}
              activeOpacity={1}
              style={styles.left}>
                <Text style={styles.backArrow}></Text>
            </TouchableOpacity>
          ) : null
        }
        <View style={styles.textView}>
          <Text style={styles.text(this.props.hasBack)}>
            {this.props.title && strLimit(this.props.title,13)}
          </Text>
        </View>
      </View>
    );
  }
}

export default HeaderTitle;