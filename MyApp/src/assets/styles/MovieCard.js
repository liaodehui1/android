import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  movieCard: {
    flexDirection: 'row',
  },
  imgBox: {
    width: 64,
    paddingTop: 10,
    paddingBottom: 5
  },
  avatar: {
    width: 64,
    height: 90
  },
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 0.5,
    borderStyle: 'solid',
    paddingTop: 10,
    paddingBottom: 5,
    marginLeft: 10,
    marginRight: 15
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  movieTitle: {
    maxHeight: 18,
    lineHeight: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    color: '#333',
    fontWeight: '700',
    paddingRight:  5,
  },
  version: {
    marginRight: 3 
  },
  v2d_imax: {
    width: 43,
    height: 14
  },
  v3d_imax: {
    width: 43,
    height: 14
  },
  v3d: {
    width: 17,
    height: 14
  },
  preshow: {
    width: 23,
    height: 14
  },
  detail: {
    marginTop: 5
  },
  score: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentLine: {
    fontSize: 12,
    color: '#666'
  },
  grade: {
    fontSize: 13,
    color: '#faaf00',
    fontWeight: '700',
    marginLeft: 2
  },
  person: {
    fontSize: 13,
    color: '#faaf00',
    fontWeight: '700',
    marginRight: 2
  },
  item: {
    marginTop: 4,
    lineHeight: 12
  },
  button: {
    flexBasis: 45,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    width: 45,
    height: 27,
    borderRadius: 4
  },
  normal: {
    backgroundColor: '#f03d37'
  },
  pre: {
    backgroundColor: '#3c9fe6'
  },
  wishBtn: {
    backgroundColor: '#faaf00'
  },
  fix: {
    fontSize: 12,
    lineHeight: 27,
    textAlign: 'center',
    color: '#fff'
  }
})