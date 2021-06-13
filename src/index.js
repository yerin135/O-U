import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase/app";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyB7msYbHGvY_bDdpODCEaHiewyDVi93qUI",
  authDomain: "o-u-diary.firebaseapp.com",
  projectId: "o-u-diary",
  storageBucket: "o-u-diary.appspot.com",
  messagingSenderId: "479004118573",
  appId: "1:479004118573:web:0aa32cb592607dfc4e72a4",
  measurementId: "G-T71P1F1S21"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
