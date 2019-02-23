import "./config/ReactotronConfig";
import React from "react";

import { View } from "react-native";
import { Provider } from "react-redux";

import Main from "~/main";
import store from "~/store";

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
