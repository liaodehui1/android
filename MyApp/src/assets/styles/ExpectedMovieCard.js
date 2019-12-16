import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  ExpectedMovieCard: {
    width: 85,
    marginRight: 10
  },
  imgBox: {
    width: 85,
    height: 115,
    marginBottom: 3
  },
  poster: {
    width: '100%',
    height: '100%'
  },
  wish: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  wishNum: {
    flex: 1,
    fontSize: 11,
    fontWeight: '600',
    color: '#faaf00',
    textAlign: 'center',
  },
  toggleWish: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 28,
    height: 28,
    borderBottomRightRadius: 10,
    backgroundColor: 'rgba(61,63,71,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wishImgBox: {
    width: 10,
    height: 10
  },
  wishImg: {
    width: '100%',
    height: '100%'
  },
  name: {
    fontSize: 13,
    color: '#222',
    marginBottom: 2
  },
  date: {
    fontSize: 12,
    color: '#999'
  }
})