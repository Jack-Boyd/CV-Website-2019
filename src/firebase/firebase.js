import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBPAWgMkzR2jIhHtEcuxJyLuiVNXaNKNW0",
  authDomain: "jackboyd-cv.firebaseapp.com",
  databaseURL: "https://jackboyd-cv.firebaseio.com",
  projectId: "jackboyd-cv",
  storageBucket: "jackboyd-cv.appspot.com",
  messagingSenderId: "954063154384"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};