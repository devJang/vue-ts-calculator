<template>
  <div class="box">
    <calc-input
      :total="total"
      @input="changeNumberPad"
      @isOperator="keyUpOperator"
    />
    <div class="keys">
      <p>
        <calc-button :eventFunc="reset" :className="'button gray'" showText="mrc" />
        <calc-button :eventFunc="clickNumberPad" :className="'button gray'" showText="(" />
        <calc-button :eventFunc="clickNumberPad" :className="'button gray'" showText=")" />
        <calc-button
          id="divide"
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
          id="multi"
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
          id="subtract"
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
          id="plus"
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

import CalcInput from './components/CalcInput.vue';
import CalcButton from './components/CalcButton.vue';

@Component({
  components: {
    CalcInput,
    CalcButton,
  },
})
export default class App extends Vue {
  total: number = 0;
  memory: number = 0;
  clickedOperator: string = '';

  clickNumberPad({ target }: { target: HTMLInputElement }): void {
    if (this.total && this.memory) this.reset();
    const targetNumber = target.textContent!.trim();

    this.total =
      this.total !== 0
        ? Number(String(this.total) + targetNumber)
        : Number(targetNumber);
  }

  changeNumberPad(value: string): void {
    this.total = Number(value);
  }

  reset(): void {
    this.total = 0;
    this.memory = 0;
    this.clickedOperator = '';
  }

  // TODO: 키 입력 연산자 필요
  keyUpOperator(test: any): void {
    console.log(typeof test);
    console.log(test);
  }

  clickOperator({ target }: { target: HTMLInputElement }): void {
    const { total } = this;
    const { id } = target;

    if (total === 0) return;

    this.clickedOperator = id;
    this.memory = total;
    this.total = 0;
  }

  submit(): void {
    let { total } = this;
    let result: number = 0;

    switch (this.clickedOperator) {
      case 'plus':
        this.total = this.memory + this.total;
        break;
      case 'subtract':
        this.total = this.memory - this.total;
        break;
      case 'multi':
        this.total = this.memory * this.total;
        break;
      case 'divide':
        this.total = this.memory / this.total;
        break;

      default:
        break;
    }

    this.clickedOperator = '';
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