import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  tuanCard: {
    paddingVertical: 8,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.1)'
  },
  imgBox: {
    width: 92,
    height: 92
  },
  imageViewer: {
    width: '100%',
    height: '100%'
  },
  tag: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 18,
    lineHeight: 18,
    fontSize: 12,
    paddingHorizontal: 5,
    color: '#fff',
    borderBottomRightRadius: 2
  },
  tagType: (cardTag) => {
    if(cardTag === 'HOT') {
      return {backgroundColor: '#fa5939'}
    }else {
      return {backgroundColor: '#0ac1ae'}
    }
  },
  itemInfo: {
    flex: 1,
    marginLeft: 10,
    marginRight: 15
  },
  title: {
    fontSize: 14,
    lineHeight: 18,
    color: '#333'
  },
  sellNum: {
    position: 'absolute',
    bottom: 34,
    right: 0,
    lineHeight: 16,
    height: 16,
    fontSize: 12,
    color: '#999'
  },
  price: {
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  sellPrice: {
    color: '#f03d37'
  },
  yuan: {
    fontSize: 14
  },
  money: {
    fontSize: 17
  },
  buyBox: {
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  buyBtn: {
    paddingHorizontal: 8,
    height: 27,
    lineHeight: 27,
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
    borderRadius: 3,
    backgroundColor: '#f03d37'
  }
})