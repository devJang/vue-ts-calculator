<template>
  <div class="box">
    <calc-input
      :total="total"
    />
    <div class="keys">
      <p>
        <calc-button :eventFunc="reset" :className="'button gray'" showText="mrc" />
        <calc-button :eventFunc="inputNumber" :className="'button gray'" showText="(" />
        <calc-button :eventFunc="inputNumber" :className="'button gray'" showText=")" />
        <calc-button
          :eventFunc="inputOperator"
          :className="'button pink'"
          showText="/"
        />
      </p>
      <p>
        <calc-button :eventFunc="inputNumber" :className="'button red'" showText="7" />
        <calc-button :eventFunc="inputNumber" :className="'button red'" showText="8" />
        <calc-button :eventFunc="inputNumber" :className="'button red'" showText="9" />
        <calc-button
          :eventFunc="inputOperator"
          :className="'button pink'"
          showText="*"
        />
      </p>
      <p>
        <calc-button :eventFunc="inputNumber" :className="'button red'" showText="4" />
        <calc-button :eventFunc="inputNumber" :className="'button red'" showText="5" />
        <calc-button :eventFunc="inputNumber" :className="'button red'" showText="6" />
        <calc-button
          :eventFunc="inputOperator"
          :className="'button pink'"
          showText="-"
        />
      </p>
      <p>
        <calc-button :eventFunc="inputNumber" :className="'button red'" showText="1" />
        <calc-button :eventFunc="inputNumber" :className="'button red'" showText="2" />
        <calc-button :eventFunc="inputNumber" :className="'button red'" showText="3" />
        <calc-button
          :eventFunc="inputOperator"
          :className="'button pink'"
          showText="+"
        />
      </p>
      <p>
        <calc-button :eventFunc="inputNumber" :className="'button red'" showText="0" />
        <calc-button :eventFunc="inputNumber" :className="'button red'" showText="." />
        <calc-button :eventFunc="inputNumber" :className="'button red'" showText="c" />
        <calc-button
          :eventFunc="submit"
          :className="'button orange'"
          showText="="
        />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State, Mutation, Action } from 'vuex-class';
import { CalcState, Operator } from './types';

import CalcInput from './components/CalcInput.vue';
import CalcButton from './components/CalcButton.vue';

@Component({
  components: {
    CalcInput,
    CalcButton,
  },
})
export default class App extends Vue {
  @State calc: CalcState;

  // TODO: Remove any
  @Mutation reset: any;
  @Mutation submitData: any;

  // TODO: Remove any
  @Action inputNumber: any;
  @Action inputOperator: any;

  submit() {
    const { total, selectedOperator, memory } = this.calc;
    const { plus, subtract, multiple, divide } = Operator
    let temp: number;
    let result: number = 0;

    switch (selectedOperator) {
      case plus:
        temp = memory + total;
        break;
      case subtract:
        temp = memory - total;
        break;
      case multiple:
        temp = memory * total;
        break;
      case divide:
        temp = memory / total;
        break;

      default:
        break;
    }
    // TODO: before assigned
    this.submitData({ newTotal: temp });
  }
}
</script>

<style>
body {
  background-color: tan;
}

.box {
  background-color: #3d4543;
  height: 300px;
  width: 250px;
  border-radius: 10px;
  position: relative;
  top: 80px;
  left: 40%;
}

.keys {
  position: relative;
  top: 15px;
}

p {
  line-height: 10px;
}
</style>