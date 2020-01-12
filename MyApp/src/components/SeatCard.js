import React, { PureComponent } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from '../assets/styles/SeatCard';

class SeatCard extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      list: props.list,
      isLast: props.isLast,
      dur: props.dur
    }
  }
  getEndTime = (start, dur) => {
    const int = Math.floor(dur / 60)
    const remainder = dur % 60
    const [hour, minute] = start.split(':').map(item => parseInt(item))
    const flag = Math.floor((minute + remainder) / 60)
    let res_hour = (hour + int + flag) >= 24 ?
      (hour + int + flag) % 24 : (hour + int + flag)
    res_hour = res_hour < 10 ? '0' + res_hour : res_hour
    let res_minute = (minute + remainder) % 60 < 10 ?
      '0' + (minute + remainder) % 60 : (minute + remainder) % 60
    return res_hour + ':' + res_minute
  }
  render() {
    const { list, isLast, dur } = this.state
    return (
      <TouchableOpacity activeOpacity={1}
        onPress={() => {  }}
        style={[styles.itemOuter, styles.mbLine(isLast)]}>
        <View style={[styles.item, styles.fdRow]}>
          <View>
            <Text style={styles.begin}>{list.tm}</Text>
            <Text style={[styles.end, styles.fdRow]}>
              <Text>{this.getEndTime(list.tm, dur)}</Text>
              <Text>散场</Text>
            </Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.lan}>
              {list.lang}{list.tp}
            </Text>
            <Text style={styles.hall}>{list.th}</Text>
          </View>
          <View style={styles.price}>
            <View style={styles.fdRow}>
              <Text style={[styles.sellPr, styles.fdRow]}>
                <Text style={styles.d}>￥</Text>
                <Text style={styles.stonefont}>34</Text>
              </Text>
              {
                list.vipPrice && list.vipPriceName ? (
                  <Text style={[styles.vipPrice, styles.fdRow]}>
                    <Text style={styles.icon}>{list.vipPriceName}</Text>
                    <Text style={styles.num}>￥{list.vipPrice}</Text>
                  </Text>
                ) : null
              }
            </View>
            {
              list.vipPriceNameNew && 
              list.vipPriceNameNew!=='折扣卡' ? (
                <Text style={styles.extraDesc}>
                  {list.vipPriceNameNew}
                </Text>
              ) : null
            }
          </View>
          <View style={styles.buttonBlock}>
            <Text style={styles.button}>购票</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default SeatCard;