import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 0.5,
    borderStyle: 'solid',
    marginRight: 15,
    paddingBottom: 13,
    paddingTop: 13,
  },
  nm: {
    fontSize: 16,
    color: '#000'
  },
  priceBox: {
    paddingLeft: 10,
    color: '#f03d37'
  },
  price: {
    fontSize: 18
  },
  q: {
    fontSize: 11,
    marginLeft: 3
  },
  locationBox: {
    marginTop: 6,
  },
  addr: {
    color: '#666',
    fontSize: 13,
  },
  distance: {
    color: '#666',
    fontSize: 13,
    marginLeft: 5
  },
  labelBox: {
    marginTop: 4,
    marginBottom: 4,
    lineHeight: 17,
    height: 17
  },
  tag: {
    paddingLeft: 3,
    paddingRight: 3,
    borderRadius: 2,
    lineHeight: 15,
    height: 15,
    fontSize: 10,
    marginRight: 5,
    textAlign: 'center'
  },
  tagName: (tagName) => {
    if(tagName === 'allowRefund' ||
      tagName === 'endorse' ||
      tagName === 'hallType' ||
      tagName === 'sell'){
        return {
          color: '#589daf',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#589daf'
        }
    }
    if(tagName === 'snack' ||
      tagName === 'vipTag') {
        return {
          color: '#f90',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#f90'
        }
      }
  },
  cardIcon: {
    paddingLeft: 3,
    paddingRight: 3,
    borderRadius: 2,
    color: '#fff',
    fontSize: 11,
    backgroundColor: 'rgb(87,192,248)'
  },
  discountText: {
    fontSize: 11,
    color: '#999',
    marginLeft: 5
  }
})