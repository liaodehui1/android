import React, { Component } from 'react';
import {Image, StyleSheet} from 'react-native'
import Movie from './movie/Movie'
import Cinema from './Cinema'
import Mine from './Mine'
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

const Main = createBottomTabNavigator(
  {
    Movie: {
      screen: Movie,
      navigationOptions: {
        tabBarLabel: '电影',
        tabBarIcon: ({tintColor,focused}) => {
          return <Image 
            source={require('../../assets/images/movie.png')}
            style={{ ...style.iconSize, tintColor: tintColor }}></Image>
        }
      }
    },
    Cinema: {
      screen: Cinema,
      navigationOptions: {
        tabBarLabel: '影院',
        tabBarIcon: ({tintColor,focused}) => {
          return <Image 
            source={require('../../assets/images/cinema.png')}
            style={{ ...style.iconSize, tintColor: tintColor }}></Image>
        }
      }
    },
    Mine: {
      screen: Mine,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({tintColor,focused}) => {
          return <Image 
            source={require('../../assets/images/mine.png')}
            style={{ ...style.iconSize, tintColor: tintColor }}></Image>
        }
      }
    }
  },
  {
    tabBarOptions:{
      activeTintColor: '#f03d37'
    }
  }
)

const style = StyleSheet.create({
  iconSize: {
    width: 25,
    height: 25
  }
})

export default createAppContainer(Main)