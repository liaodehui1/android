import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Main from './src/pages/main/Main'
import CinemaDetail from './src/pages/CinemaDetail'
import MovieDetail from './src/pages/MovieDetail'
import LightMap from './src/pages/LightMap'

const stack = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        header: null
      }
    },
    CinemaDetail: {
      screen: CinemaDetail,
      navigationOptions: {
        header: null
      }
    },
    MovieDetail: {
      screen: MovieDetail,
      navigationOptions: {
        header: null
      }
    },
    LightMap: {
      screen: LightMap,
      navigationOptions: {
        header: null
      }
    }
  }
)

const App = createAppContainer(stack)

export default App;