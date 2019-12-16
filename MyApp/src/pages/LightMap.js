import React, { Component } from 'react';
import { View } from 'react-native'
import { MapView, MapTypes, Overlay} from 'react-native-baidu-map'
import styles from '../assets/styles/LightMap'
import HeaderTitle from '../components/HeaderTitle'

class LightMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mayType: MapTypes.NORMAL, //地图类型
      zoom: 15, // 比例
      trafficEnabled: true,
      baiduHeatMapEnabled: true,
      center: { // 点位点
        latitude: props.navigation.state.params.lat,
        longitude: props.navigation.state.params.lng
      }
    };
  }
  
  render() {
    const { Marker, Cluster} = Overlay;
    return (
      <>
        {/* 自定义的头部 */}
        <HeaderTitle title={this.props.navigation.state.params.title}
          navigation={this.props.navigation} hasBack={true}></HeaderTitle>
          {/* 百度地图 */}
        <View style={styles.container}>
          <MapView
            trafficEnabled={this.state.trafficEnabled}
            baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
            zoom={this.state.zoom}
            mapType={this.state.mapType}
            center={this.state.center}
            style={styles.map}
            onMapClick={(e) => {
            }}>
            <Cluster>
              <Marker location={{ ...this.state.center }} />
            </Cluster>
          </MapView>
        </View>
      </>
    );
  }
}

export default LightMap;