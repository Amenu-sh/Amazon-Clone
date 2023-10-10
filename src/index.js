import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { intialState } from "./Reducer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider intialState={intialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
