import React, { PureComponent } from 'react';
import {  View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Loading: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    height: 30
  }
})
export default class Loading extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.Loading}>
        <ActivityIndicator size={this.props.size || 'small'} 
          color={this.props.color || '#00ff00'}></ActivityIndicator>
        <Text>{this.props.text || '正在加载...'}</Text>
      </View>
    );
  }
}
