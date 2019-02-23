import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#7159C1",
    transform: [{ scale: 0.8 }]
  },
  containerModal: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    marginTop: 10
  },
  containerTitulo: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold"
  },
  inputForm: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    borderRadius: 3,
    borderWidth: 1
  },
  buttons: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  confirmar: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009d00",

    marginRight: 20,
    width: 150,
    height: 50,
    borderRadius: 3
  },
  btOK: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff"
  },
  cancelar: {
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c0c0c0",

    width: 150,
    height: 50,
    borderRadius: 3
  },
  btCancelar: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff"
  },
  button: {
    flex: 1,
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5959ff",
    borderRadius: 3
  }
});

export default styles;
