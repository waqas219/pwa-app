importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');
const firebaseConfig = {
    apiKey: "AIzaSyCCQGl70b2ypr0QSmHzMxBMZOlR0ditsP4",
    authDomain: "notification-app-3c9d2.firebaseapp.com",
    databaseURL: "https://notification-app-3c9d2.firebaseio.com",
    projectId: "notification-app-3c9d2",
    storageBucket: "notification-app-3c9d2.appspot.com",
    messagingSenderId: "172539317224",
    appId: "1:172539317224:web:8b5692397df2e211aff25d"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();