import Vue from 'vue';
import Vuex from 'vuex';
import { state, mutations, actions } from './calculator';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
});
