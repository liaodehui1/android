import React, { PureComponent } from 'react';
import {  View, Text, ActivityIndicator } from 'react-native';

export default class Loading extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flexDirection: "row",alignItems: 'center',justifyContent: "center"}}>
        <ActivityIndicator size={this.props.size || 'small'} 
          color={this.props.color || '#00ff00'}></ActivityIndicator>
        <Text>{this.props.text || '正在加载...'}</Text>
      </View>
    );
  }
}
