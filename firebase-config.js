// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyC-ac0eRh5wDJDjxKmgswCkK8VZ-B_czho",
  authDomain: "fourmvsic.firebaseapp.com",
  databaseURL: "https://fourmvsic-default-rtdb.firebaseio.com", // ← Agrega esta línea
  projectId: "fourmvsic",
  storageBucket: "fourmvsic.firebasestorage.app",
  messagingSenderId: "368363371815",
  appId: "1:368363371815:web:d4c40e0830313967547d02",
  measurementId: "G-XC54LY9L6T"
};

// Inicializar Firebase con compatibilidad
firebase.initializeApp(firebaseConfig);