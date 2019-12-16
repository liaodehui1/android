import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  cinemaWrap: {
    padding: 10,
    flexDirection: 'row',
  },
  cinemaInfo: {
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    lineHeight: 24
  },
  addr: {
    marginTop: 2,
    fontSize: 13,
    lineHeight: 18,
    color: '#999'
  },
  button: {
    flexBasis: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  location: {
    width: 50,
    height: 30,
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(0,0,0,0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationIcon: {
    width: 19,
    height: 22,
  }
})