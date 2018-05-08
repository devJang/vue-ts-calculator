import Vue from 'vue';
import Vuex from 'vuex';
import { state, mutations } from './calculator';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state,
  mutations,
});