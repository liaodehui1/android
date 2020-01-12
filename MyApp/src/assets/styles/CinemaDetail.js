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
    backgroundColor: '#fff'
  },
  tuanTitleWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.1)'
  },
  tuanTitle: {
    height: 45,
    lineHeight: 45,
    fontSize: 15,
    color: '#333',
    fontWeight: '700'
  },
  desc: {
    color: '#666',
    fontSize: 12,
    lineHeight: 45
  },
  icon: {
    width: 12
  },
  tuanList: {
    paddingLeft: 15
  },
  sectionTitle: {
    lineHeight: 25,
    lineHeight: 25,
    fontSize: 14,
    color: '#666',
    paddingTop: 8
  }
})