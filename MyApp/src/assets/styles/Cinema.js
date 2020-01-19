import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  topbar: {
    height: 44,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e6e6e6',
    borderStyle: 'solid',
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
  }, 
  searchInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 28,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 5,
    borderColor: '#e6e6e6',
    borderStyle: 'solid',
    borderWidth: 0.5
  },
  searchImg: {
    width: 14,
    height: 14,
    marginHorizontal: 4,
    tintColor: '#b2b2b2'
  },
  searchTip: {
    fontSize: 13,
    color: '#b2b2b2'
  },
  wrapper: {
    paddingLeft: 10,
    flex: 1
  }
})