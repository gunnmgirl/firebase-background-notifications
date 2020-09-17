import ReactDOM from "react-dom";
import React from "react";

import App from "./App";

//In order for the worker to start working, it needs to be registered from the beginning
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Registration successful", registration);
    })
    .catch((error) => {
      console.log("Service worker registration failed, error:", error);
    });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
