import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  TabBar: {
    flexDirection: 'row',
    height: 40,
    borderBottomColor: '#e6e6e6',
    borderStyle: 'solid',
    borderBottomWidth: 0.5
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
  },
  label: {
    lineHeight: 40,
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
  },
  active: {
    color: '#ef4238',
    borderBottomColor:'#ef4238',
    borderStyle: 'solid',
    borderBottomWidth: 1
  }, 
  searchEntry: {
    flexBasis: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  movieList: {
    paddingBottom: 78
  }
})