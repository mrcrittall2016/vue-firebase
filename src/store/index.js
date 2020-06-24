import Vue from "vue";
import Vuex from "vuex";
import { mutations } from "./mutations";
import * as actions from "./actions";

Vue.use(Vuex);

// State to keep track of currently signed-in user
const state = {
  user: {},
  events: []
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
