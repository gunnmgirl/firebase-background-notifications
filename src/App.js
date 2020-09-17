import React from "react";
import * as firebase from "firebase/app";
import "@firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "notification-message-test.firebaseapp.com",
  databaseURL: "https://notification-message-test.firebaseio.com",
  projectId: "notification-message-test",
  storageBucket: "notification-message-test.appspot.com",
  messagingSenderId: "504013900773",
  appId: "1:504013900773:web:3b326585cb42592ed23d0c",
};

function App() {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();

  Notification.requestPermission()
    .then((result) => {
      return messaging.getToken();
    })
    .then((token) => {
      console.log(token);
    })
    .catch((error) => console.log("Error occured in request permission!"));

  // Handle incoming messages when the app is in focus (foreground notifications)
  messaging.onMessage((payload) => console.log(payload));

  return <div>Notify me</div>;
}

export default App;
