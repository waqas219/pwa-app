import firebase from 'firebase';

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
const messaging = firebase.messaging();

export function initNotification () {
    Notification.requestPermission().then((permission) => {
        console.log(permission);
        if(permission === "granted") {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                  console.log("Token => ", currentToken);
                }
                else {
                  console.log('No registration token available. Request permission to generate one.');
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
              
        }
    })
}