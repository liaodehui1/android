import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Hot from './Hot'
import Coming from './Coming'

const MaterialTopTabNavigator = createMaterialTopTabNavigator(
  {
    Hot: {
      screen: Hot,
      navigationOptions: {
        tabBarLabel: '正在热映'
      }
    },
    Coming: {
      screen: Coming,
      navigationOptions: {
        tabBarLabel: '即将上映'
      }
    }
  },
  {
    tabBarOptions: {
      tabStyle: {
        minWidth: 50
      },
      activeTintColor: '#f03d37',
      inactiveTintColor: '#666',
      style: {
        backgroundColor: '#fff',//TabBar 的背景颜色
      },
      indicatorStyle: {
        height: 2,
        backgroundColor: '#f03d37',
      },//标签指示器的样式
      labelStyle: {
        fontSize: 13,
      },//文字的样式
    },
    lazy: true
  }
)

export default createAppContainer(MaterialTopTabNavigator)