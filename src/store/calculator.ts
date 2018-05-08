import { MutationTree } from 'vuex';

import { CalcState } from '../types';

export const state: CalcState = {
  total: 0,
  memory: 0,
  clickedOperator: '',
};

export const mutations: MutationTree<CalcState> = {
  reset(state) {
    state.total = 0;
    state.memory = 0;
    state.clickedOperator = '';
  },
};
