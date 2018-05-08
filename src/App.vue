<template>
  <div class="box">
    <calc-input
      :total="total"
    />
    <div class="keys">
      <p>
        <calc-button :eventFunc="reset()" :className="'button gray'" showText="mrc" />
        <calc-button :eventFunc="clickNumberPad" :className="'button gray'" showText="(" />
        <calc-button :eventFunc="clickNumberPad" :className="'button gray'" showText=")" />
        <calc-button
          :eventFunc="clickOperator"
          :className="'button pink'"
          showText="/"
        />
      </p>
      <p>
        <calc-button :eventFunc="clickNumberPad" :className="'button red'" showText="7" />
        <calc-button :eventFunc="clickNumberPad" :className="'button red'" showText="8" />
        <calc-button :eventFunc="clickNumberPad" :className="'button red'" showText="9" />
        <calc-button
          :eventFunc="clickOperator"
          :className="'button pink'"
          showText="*"
        />
      </p>
      <p>
        <calc-button :eventFunc="clickNumberPad" :className="'button red'" showText="4" />
        <calc-button :eventFunc="clickNumberPad" :className="'button red'" showText="5" />
        <calc-button :eventFunc="clickNumberPad" :className="'button red'" showText="6" />
        <calc-button
          :eventFunc="clickOperator"
          :className="'button pink'"
          showText="-"
        />
      </p>
      <p>
        <calc-button :eventFunc="clickNumberPad" :className="'button red'" showText="1" />
        <calc-button :eventFunc="clickNumberPad" :className="'button red'" showText="2" />
        <calc-button :eventFunc="clickNumberPad" :className="'button red'" showText="3" />
        <calc-button
          :eventFunc="clickOperator"
          :className="'button pink'"
          showText="+"
        />
      </p>
      <p>
        <calc-button :eventFunc="clickNumberPad" :className="'button red'" showText="0" />
        <calc-button :eventFunc="clickNumberPad" :className="'button red'" showText="." />
        <calc-button :eventFunc="clickNumberPad" :className="'button red'" showText="c" />
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
import { State, Mutation } from 'vuex-class';
import { CalcState } from './types';

import CalcInput from './components/CalcInput.vue';
import CalcButton from './components/CalcButton.vue';

@Component({
  components: {
    CalcInput,
    CalcButton,
  },
})
export default class App extends Vue {
  @State total: CalcState;
  @State memory: CalcState;
  @State clickedOperator: CalcState;

  @Mutation reset: any;

  // TODO:
  clickNumberPad({ target }: { target: HTMLInputElement }): void {
    const targetNumber = target.textContent!.trim();

    // this.total = this.total !== 0 ? Number(String(this.total) + targetNumber) : Number(targetNumber);
  }

  // TODO:
  clickOperator({ target }: { target: HTMLInputElement }): void {
    const { total } = this;

    // if (total === 0) return;

    // this.clickedOperator = target.innerText;
    // this.memory = total;
    // this.total = 0;
  }

  // TODO:
  submit(): void {
    let { total, clickedOperator } = this;
    let result: number = 0;

    // switch (this.clickedOperator) {
    //   case '+':
    //     this.total = this.memory + this.total;
    //     break;
    //   case '-':
    //     this.total = this.memory - this.total;
    //     break;
    //   case '*':
    //     this.total = this.memory * this.total;
    //     break;
    //   case '/':
    //     this.total = this.memory / this.total;
    //     break;

    //   default:
    //     break;
    // }

    // this.clickedOperator = '';
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