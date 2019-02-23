import React from "react";

import { View, Text, Image } from "react-native";
import Mapbox from "@mapbox/react-native-mapbox-gl";

import styles from "./styles";

const Annotation = ({ data }) => {
  console.tron.log(data);
  let users = [];
  {
    data.map(user => {
      users.push(
        <Mapbox.PointAnnotation
          key={user.name}
          id={user.name}
          coordinate={[-49.6446024, -27.2108001]}
        >
          <View style={styles.annotationContainer}>
            <Image
              source={{ uri: user.avatar }}
              style={styles.annotationFill}
            />
          </View>

          <Mapbox.Callout title={user.bio} />
        </Mapbox.PointAnnotation>
      );
    });
  }

  return users;
};

export default Annotation;
