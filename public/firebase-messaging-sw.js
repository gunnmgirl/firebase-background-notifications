// Give the service worker access to Firebase Messaging
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "notification-message-test.firebaseapp.com",
  databaseURL: "https://notification-message-test.firebaseio.com",
  projectId: "notification-message-test",
  storageBucket: "notification-message-test.appspot.com",
  messagingSenderId: "504013900773",
  appId: "1:504013900773:web:3b326585cb42592ed23d0c",
};

// Initialize the Firebase app in the service worker
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages
const messaging = firebase.messaging();
