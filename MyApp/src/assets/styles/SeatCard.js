import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  fdRow: {
    flexDirection: 'row'
  },
  itemOuter: {
    marginLeft: 12.5,
    paddingVertical: 17
  },
  mbLine: (isLast) => {
    return !isLast ? {
      borderBottomWidth: 0.5,
      borderColor: 'rgba(0,0,0,0.1)'
    } : {}
  },
  item: {
    paddingRight: 12.5
  },
  begin: {
    fontSize: 20,
    color: '#333'
  },
  end: {
    marginTop: 5,
    color: '#999',
    fontSize: 11
  },
  infoBlock: {
    marginLeft: 17,
    flex: 1
  },
  lan: {
    paddingTop: 4,
    lineHeight: 18,
    fontSize: 13,
    color: '#333'
  },
  hall: {
    marginTop: 5,
    fontSize: 11,
    color: '#999'
  },
  price: {
    width: 130,
    marginLeft: 5
  },
  sellPr: {
    color: '#f03d37'
  },
  d: {
    fontSize: 11
  },
  stonefont: {
    fontSize: 19
  },
  vipPrice: {
    lineHeight: 17,
    height: 17,
    borderColor: '#ff9000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 2,
    fontSize: 12,
    alignSelf: 'center',
    marginLeft: 4,
  },
  icon: {
    backgroundColor: '#f90',
    color: 'white'
  },
  num: {
    color: '#f90'
  },
  extraDesc: {
    marginTop: 5,
    fontSize: 11,
    color: '#999'
  },
  buttonBlock: {
    marginLeft: 2,
    width: 45,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#f03d37',
    color: 'white',
    height: 28,
    lineHeight: 28,
    textAlign: 'center',
    fontSize: 12,
    borderRadius: 4
  }
})