import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./components/containers/AppLayout";
import { Provider } from "react-redux";
import store from "./store/index";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
