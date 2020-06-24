import Vue from "vue";
import App from "./components/App.vue";
import VueRouter from "vue-router";
import { firebaseApp } from "./firebaseApp";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import store from "./store";

// Use Vue router
Vue.use(VueRouter);

import Dashboard from "./components/Dashboard.vue";
import Signin from "./components/Signin.vue";
import Signup from "./components/Signup.vue";
import AddEvent from "./components/AddEvent.vue";

// Two modes of Vue router - hash and history. Both modes ensure page does not refresh when hit endpoint. They both do the same thing, history just doesn't put a hash in the url. Note below, must be 'routes', not 'route'. No error warning...
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/dashboard", component: Dashboard },
    { path: "/signin", component: Signin },
    { path: "/signup", component: Signup }
  ]
});

// Check anywhere within app whether user is signed in or not...
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch("signIn", user);
    router.push("/dashboard"); // places on top of current stack
  } else {
    router.replace("/signin").catch(err => {}); // completely new stack created
  }
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
