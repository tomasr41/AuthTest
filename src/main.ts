import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'



library.add(fas);
library.add(faGoogle)


const firebaseConfig = {
  apiKey: "AIzaSyA19SMyW3CDVl_LTfcGmwQfiirDe2KgeLI",
  authDomain: "curso-vue-2d7ed.firebaseapp.com",
  projectId: "curso-vue-2d7ed",
  storageBucket: "curso-vue-2d7ed.appspot.com",
  messagingSenderId: "419178786878",
  appId: "1:419178786878:web:540311fb728ca35cf6616f",
  measurementId: "G-176NEDQ7YY"
};

//FIREBASE CONFIG




const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  // INICIALIZACION DE FIREBASE
createApp(App).use(router).component('fa', FontAwesomeIcon).mount('#app')
