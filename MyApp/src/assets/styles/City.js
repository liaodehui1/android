import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cityEntry: {
    flexBasis: 70,
  },
  cityBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  cityName: {
    width: 50,
    lineHeight: 40,
    fontSize: 15,
    color: '#666',
    textAlign: 'right',
    paddingRight: 3
  },
  cityEntryArrow: {
    width: 0,
    height: 0,
    borderWidth: 4,
    borderStyle: 'solid',
    borderTopColor: '#b0b0b0',
    borderBottomColor: 'rgba(0,0,0,0)',
    borderLeftColor: 'rgba(0,0,0,0)',
    borderRightColor: 'rgba(0,0,0,0)',
    marginTop: 5
  }
})