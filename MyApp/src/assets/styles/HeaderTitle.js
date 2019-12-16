import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: ($backgroundColor) => ({
    flexDirection: 'row',
    // flexBasis: 40,
    height: 40,
    backgroundColor: $backgroundColor || '#f03d37'
  }),
  left: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    width: 14,
    height: 14,
    borderColor: '#fff',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    transform: [{rotate: '45deg'}],
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
  },
  text: (hasBack) => {
    let ret = {
      fontSize: 16,
      color: '#fff',
      textAlign: 'center'
    }
    return !hasBack ? ret : {...ret, transform: [{translateX: -20}]}
  }
})