importScripts("https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js");

// https://github.com/react-boilerplate/react-boilerplate/issues/2952
const firebaseConfig = {
  apiKey: "AIzaSyDei9Fojy_Z7cKbjtwLR_3XmFE86eeMsDw",
  authDomain: "aula-push-devsuperior.firebaseapp.com",
  projectId: "aula-push-devsuperior",
  storageBucket: "aula-push-devsuperior.appspot.com",
  messagingSenderId: "352133653822",
  appId: "1:352133653822:web:f55cc20845fb27e859b86f",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("sw bg message event: ", payload);
});

// O evento onMessage pertence ao contexto de Windows e não do service worker
//https://stackoverflow.com/questions/42964547/uncaught-firebaseerror-messaging-this-method-is-available-in-a-window-context
