importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAQ56EH-LN7X0tAOhPEPHwgjYVbM3Ui7CU",
    authDomain: "demonotification-45836.firebaseapp.com",
    projectId: "demonotification-45836",
    storageBucket: "demonotification-45836.appspot.com",
    messagingSenderId: "832316377454",
    appId: "1:832316377454:web:6915ccac4e610075b7197f",
    measurementId: "G-C92YVFYBVZ"
});

const messaging = firebase.messaging();