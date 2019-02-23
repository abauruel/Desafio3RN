import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";

import * as UsersMaps from "~/store/actions/users";
import styles from "./styles";

import Mapbox from "@mapbox/react-native-mapbox-gl";
import Modal from "react-native-modal";

import api from "~/services/api";
import Annotation from "../components/Annotation";

/*Mapbox.setAccessToken(
  "pk.eyJ1IjoiYWJhdXJ1ZWwiLCJhIjoiY2pzOWE3cTk4MGNrejQ0bGs5dTFiZjRwZiJ9.0W65orrBxnZR08of_DK9mQ"
);*/

Mapbox.setAccessToken(
  "pk.eyJ1IjoiYWJhdXJ1ZWwiLCJhIjoiY2ltczhmMWNqMDFoNHY3a2twa3VydDliNiJ9.CKzUdRMhJCHLmAdGwFMr6Q"
);
class Main extends Component {
  state = {
    userinput: "",
    modalVisible: false,
    coordenadas: {
      latitude: 0,
      longitude: 0
    }
  };

  addUser = () => {
    this.setState({
      modalVisible: true
    });
  };

  handleClick = async e => {
    const { geometry } = e;
    await this.setState({
      coordenadas: {
        latitude: geometry.coordinates[1],
        longitude: geometry.coordinates[0]
      },
      modalVisible: true
    });

    console.tron.log(this.state.coordenadas);
  };
  CloseModal() {
    this.setState({
      modalVisible: false
    });
  }
  addUser = async () => {
    const { user, add_user } = this.props;
    if (!this.state.userinput.length) return;
    const userData = await api.get(`users/${this.state.userinput}`);

    const data = {
      name: userData.data.name,
      bio: userData.data.bio,
      avatar: userData.data.avatar_url,
      coordenadas: this.state.coordenadas
    };
    this.props.add_user(data);

    this.setState({
      userinput: ""
    });
    this.CloseModal();
  };

  render() {
    const { data } = this.props.users;
    console.tron.log(this.props.users.data);
    return (
      <View style={styles.container}>
        <Mapbox.MapView
          zoomLevel={15}
          centerCoordinate={[-49.6446024, -27.2108001]}
          style={styles.container}
          showUserLocation
          styleURL={Mapbox.StyleURL.Dark}
          onLongPress={this.handleClick}
        >
          {!!data.length && <Annotation data={data} />}
        </Mapbox.MapView>
        <View>
          {data &&
            data.map(user => (
              <Text key={user.name} style={{ backgroundColor: "#ffffff" }}>
                {user.name}
              </Text>
            ))}
        </View>
        <View>
          <Modal
            isVisible={this.state.modalVisible}
            style={styles.containerModal}
          >
            <View style={styles.containerForm}>
              <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Adicionar novo local</Text>
              </View>

              <TextInput
                style={styles.inputForm}
                placeholder="insira o usuário do Github"
                value={this.state.userinput}
                onChangeText={userinput => this.setState({ userinput })}
              />
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.confirmar}
                  onPress={this.addUser}
                >
                  <Text style={styles.btOK}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelar}
                  onPress={() => this.setState({ modalVisible: false })}
                >
                  <Text style={styles.btCancelar}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}
Main.propTypes = {
  add_user: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.usersGit
});
const mapDispatchToProps = dispatch => bindActionCreators(UsersMaps, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
