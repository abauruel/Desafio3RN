import "./config/ReactotronConfig";
import React, { Component } from "react";
import { Text, StyleSheet, View, Modal, Alert } from "react-native";

import styles from "./styles";

import Mapbox from "@mapbox/react-native-mapbox-gl";
import MapboxGL from "@mapbox/react-native-mapbox-gl";

/*Mapbox.setAccessToken(
  "pk.eyJ1IjoiYWJhdXJ1ZWwiLCJhIjoiY2pzOWE3cTk4MGNrejQ0bGs5dTFiZjRwZiJ9.0W65orrBxnZR08of_DK9mQ"
);*/

Mapbox.setAccessToken(
  "pk.eyJ1IjoiYWJhdXJ1ZWwiLCJhIjoiY2ltczhmMWNqMDFoNHY3a2twa3VydDliNiJ9.CKzUdRMhJCHLmAdGwFMr6Q"
);
export default class App extends Component {
  state = {
    modalVisible: false
  };

  addUser = () => {};
  renderAnnotations() {
    return (
      <Mapbox.PointAnnotation
        id="rocketSeat"
        coordinate={[-49.6446024, -27.2108001]}
      >
        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>

        <Mapbox.Callout title="Rocketseat House" />
      </Mapbox.PointAnnotation>
    );
  }

  render() {
    return (
      <Mapbox.MapView
        zoomLevel={15}
        centerCoordinate={[-49.6446024, -27.2108001]}
        style={styles.container}
        showUserLocation
        styleURL={Mapbox.StyleURL.Dark}
        onLongPress={this.addUser}
      >
        {this.renderAnnotations()}
        <Modal visible={this.state.modalVisible}>
          <View>
            <Text>Hello MOdal</Text>
          </View>
        </Modal>
      </Mapbox.MapView>
    );
  }
}
