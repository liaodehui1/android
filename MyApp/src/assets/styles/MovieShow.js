import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  MovieShow: {
    width: '100%',
    height: 140,
    position: 'relative',
    paddingBottom: 15,
    overflow: 'hidden'
  },
  absolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    transform: [{scale: 2.5}]
  },
  blur: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(52,52,52,0.9)'
  },
  post: {
    marginLeft: 15,
    alignSelf: 'flex-end',
  },
  activePost: {
    transform: [{scale: 1.15}],
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    position: 'relative',
    bottom: 7
  },
  img: {
    height: 95,
    width: 65,
  },
  triangle: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: 8,
    height: 8,
    transform: [{translateX: -4}],
    borderBottomColor: 'white',
    borderTopColor:'rgba(0,0,0,0)',
    borderLeftColor:'rgba(0,0,0,0)',
    borderRightColor:'rgba(0,0,0,0)',
    borderWidth: 8,
    borderStyle: 'solid'
  },
  movieInfo: {
    paddingHorizontal: 15,
    paddingVertical: 11,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.1)',
    borderStyle: 'solid'
  },
  movieTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 24,
    lineHeight: 24
  },
  title: {
    color: '#333',
    fontSize: 17,
    fontWeight: '700',
  },
  grade: {
    marginLeft: 3,
    color: '#ffb400'
  },
  num: {
    fontSize: 16
  },
  small: {
    fontSize: 10
  },
  movieDesc:{
    marginTop: 2,
    height: 18.5,
    lineHeight: 18.5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  desc: {
    color: '#999',
    fontSize: 13
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    paddingLeft: 15,
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
  discountBlock: {
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 0.5
  },
  vipTips: {
    height: 42,
    lineHeight: 42,
    paddingHorizontal: 15,
    backgroundColor: '#fff5ea',
    flexDirection: 'row'
  },
  tagBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  tag: {
    width: 34,
    height: 15,
    lineHeight: 15,
    backgroundColor: '#ff941a',
    borderRadius: 2,
    textAlign: 'center',
    color: 'white',
    fontSize: 10
  },
  labelText: {
    flex: 1,
    justifyContent: 'center'
  },
  viptitle: {
    color: '#fa9600',
    fontSize: 12
  },
  processBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  process: {
    fontSize: 12,
    color: '#999'
  },
  arrow: {
    width: 7,
    height: 7,
    borderColor: '#999',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    transform: [{rotate: '-45deg'}],
    marginLeft: 3
  },
  bLine: {
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.1)'
  },
  hasSeatWrap: {
    flexDirection: 'column'
  },
  noSeatWrap: {
    height: 205,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    height: 71.5
  },
  noseat: {
    height: '100%'
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: '#acacac'
  },
  nextDateButton: {
    marginTop: 10,
    width: 190,
    height: 35,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fa9600',
    borderRadius: 17.5
  },
  btnText: {
    lineHeight: 35,
    fontSize: 14,
    color: '#fa9600',
    textAlign: 'center'
  }
})