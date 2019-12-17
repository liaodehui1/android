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
  },
  tuanWrap: {
    backgroundColor: '#f0f0f0'
  },
  tuanList: {
    marginTop: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  tuanTitle: {
    height: 45,
    lineHeight: 45,
    fontSize: 15,
    color: '#333',
    fontWeight: '700',
    borderBottomWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.1)'
  },
  sectionTitle: {
    lineHeight: 25,
    lineHeight: 25,
    fontSize: 14,
    color: '#666',
    paddingTop: 8
  }
})