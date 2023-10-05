const express = require('express')
const dotenv = require("dotenv")
const path = require('path')
const firebase = require('firebase-admin')

// --------------------------Firebase config------------------------------

const firebaseConfig = {
  apiKey: "AIzaSyD_WG6svwTVilYF5rxxnqoSFjkYE9_isgQ",
  authDomain: "todo-react-948c7.firebaseapp.com",
  projectId: "todo-react-948c7",
  storageBucket: "todo-react-948c7.appspot.com",
  messagingSenderId: "817902650115",
  appId: "1:817902650115:web:d20d551682feab7ab29f36",
  measurementId: "G-2K04WC17RR"
};

const fireConfig = firebase.initializeApp(firebaseConfig);

// --------------------------Firebase config------------------------------

module.exports = fireConfig