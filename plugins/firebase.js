import Vue from "vue";
import firebase from 'firebase/app';
import "firebase/auth";

Vue.config.productionTip = false;

export default ({ $axios, store, redirect }) => {
  const configOptions = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
  };

  firebase.initializeApp(configOptions);

  firebase.auth().onAuthStateChanged(function (user) {
    store.dispatch("fetchUser", user);
  })

}
