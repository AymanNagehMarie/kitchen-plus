import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import marker from "../../assets/icons8-marker.png";

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      latitude: props.latitude,
      longitude: props.longitude,
    };
    // this.setState({
    //   ...this.state,
    //   latitude: props.latitude ? props.latitude : null,
    //   longitude: props.longitude ? props.longitude : null,
    // });
    //props.getLatLon(latitude, longitude);
  }

  updateState(location) {
    this.setState({
      ...this.state,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  }

  async componentDidMount() {
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        console.log(status);
        this.setState({
          ...this.state,
          latitude: 25.1916159002,
          longitude: 55.2711322488,
        });

        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      this.updateState(location);
    } catch (error) {
      console.log(error);
    }
  }

  onRegionChangeComplete = (region) => {
    // console.log(region);
    this.setState({
      ...this.state,
      latitude: region.latitude,
      longitude: region.longitude,
    });

    this.props.getLatLon(region.latitude, region.longitude);
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          onRegionChangeComplete={this.onRegionChangeComplete}
          style={styles.mapView}
          showsUserLocation
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        >
          {/* <Marker
            onTouchMove={true}
            coordinate={{
              latitude: this.state.latitude ? this.state.latitude : 51.5078788,
              longitude: this.state.longitude
                ? this.state.longitude
                : -0.0877321,
            }}
            pinColor={"red"} // any color
            title={"title"}
            description={"description"}
            onDragEnd={(e) => {
              console.log("dragEnd", e.nativeEvent.coordinate);
            }}
          /> */}
        </MapView>

        <View style={styles.markerFixed}>
          <Image style={styles.marker} source={marker} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 250,
  },

  mapView: {
    ...StyleSheet.absoluteFillObject,
  },

  markerFixed: {
    left: "50%",
    marginLeft: -24,
    marginTop: -48,
    position: "absolute",
    top: "50%",
  },
  marker: {
    height: 48,
    width: 48,
  },
});
