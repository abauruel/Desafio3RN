import "./config/ReactotronConfig";
import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import Modal from "react-native-modal";

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
    modalVisible: false,
    latitude: 0,
    longitude: 0
  };

  addUser = () => {
    this.setState({
      modalVisible: true
    });
  };

  handleClick = e => {
    /*
    const { geometry } = e;
    await this.setState({
      latitude: geometry.coordinates[1],
      longitude: geometry.coordinates[0],
      modalVisible: true
    });
    */
    this.setState({
      modalVisible: true
    });
  };
  CloseModal() {
    this.setState({
      modalVisible: false
    });
  }

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
  renderModal() {
    <Modal isVisible={this.state.modalVisible} style={styles.container}>
      <View style={styles.containerForm}>
        <View style={styles.containerTitulo}>
          <Text style={styles.titulo}>Adicionar novo local</Text>
        </View>
        <TextInput
          style={styles.inputForm}
          placeholder="insira o usuário do Github"
        />
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.confirmar}>
            <Text style={styles.btOK}>OK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelar}
            onPress={() => this.setState({ modalVisible: false })}
          >
            <Text style={styles.btCancelar}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>;
  }

  render() {
    return (
      <Mapbox.MapView
        zoomLevel={15}
        centerCoordinate={[-49.6446024, -27.2108001]}
        style={styles.container}
        showUserLocation
        styleURL={Mapbox.StyleURL.Dark}
        onLongPress={this.handleClick}
      >
        {this.renderAnnotations()}
      </Mapbox.MapView>
    );
  }
}
