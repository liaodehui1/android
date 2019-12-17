import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  body: {
    backgroundColor: '#f3f3f3',
    height: '100%'
  },
  myCenter: {
    flexDirection: 'column',
  },
  header: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImg: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#fff',
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%'
  },
  group: {
    marginTop: 10,
    backgroundColor: '#fff',
  },
  orders: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    fontSize: 15,
    color: '#333',
    lineHeight: 21,
    width: 80,
    backgroundColor: '#fff',
    marginTop: 13,
    position: 'relative',
    left: '50%',
    transform: [{translateX: -40}],
    zIndex: 9,
    textAlign: 'center',
  },
  titleLine: {
    position: 'absolute',
    top: 23,
    alignSelf: 'center',
    width: 160,
    height: 1
  },
  list: {
    flexDirection: 'row',
    marginTop: 18
  },
  orderItem: {
    flex: 1,
    height: 97,
    alignItems: 'center',
  },
  movie: {
    width: 45,
    height: 45
  },
  store: {
    width: 45,
    height: 45
  },
  orderItemText: {
    position: 'relative',
    top: 53,
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 21,
    height: 21,
    color: '#333'
  },
  item: {
    height: 44,
    marginLeft: 15,
    paddingRight: 15,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderStyle: 'solid',
    borderBottomWidth: 0.5
  },
  itemTitle: {
    lineHeight: 44,
    color: '#333'
  },
  arrow: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    transform: [{rotate: '-45deg'}],
    width: 8,
    height: 8,
    position: 'absolute',
    right: 15,
    top: 18
  }
})