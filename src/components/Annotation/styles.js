import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  annotationContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15
  },
  annotationFill: {
    width: 50,
    height: 50,
    borderRadius: 15,

    transform: [{ scale: 0.8 }]
  }
});

export default styles;
