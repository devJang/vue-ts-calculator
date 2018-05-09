import { MutationTree, ActionTree } from 'vuex';

import { CalcState } from '../types';

export const state: CalcState = {
  total: 0,
  memory: 0,
  // TODO: renaming
  selectedOperator: '',
};

export const mutations: MutationTree<CalcState> = {
  reset(state) {
    state.total = 0;
    state.memory = 0;
    state.selectedOperator = '';
  },
  addNumber(state, newNumber) {
    state.total = newNumber;
  },
  addOperator(state, operator) {
    state.selectedOperator = operator;
    state.memory = state.total;
    state.total = 0;
  },
  submitData(state, newTotal) {
    state.total = newTotal;
    state.selectedOperator = '';
  },
};

export const actions: ActionTree<CalcState, any> = {
  // TODO: Add type
  inputNumber({ commit }, { target }) {
    const targetNumber = target.textContent.trim();
    const newNumber: number = state.total !== 0 ? Number(String(state.total) + targetNumber) : Number(targetNumber);

    commit('addNumber', newNumber);
  },

  inputOperator({ commit }, { target }: { target: HTMLInputElement }) {
    if (state.total !== 0) {
      commit('addOperator', target.innerText);
    }
  },
};
