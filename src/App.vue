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
  selectedOperator: string = '';

  inputNumber({ target }: { target: HTMLInputElement }): void {
    const targetNumber = target.textContent!.trim();

    this.total =
      this.total !== 0
        ? Number(String(this.total) + targetNumber)
        : Number(targetNumber);
  }

  reset(): void {
    this.total = 0;
    this.memory = 0;
    this.selectedOperator = '';
  }

  inputOperator({ target }: { target: HTMLInputElement }): void {
    const { total } = this;

    if (total === 0) return;

    this.selectedOperator = target.innerText;
    this.memory = total;
    this.total = 0;
  }

  submit(): void {
    let { total, selectedOperator } = this;
    let result: number = 0;

    switch (this.selectedOperator) {
      case '+':
        this.total = this.memory + this.total;
        break;
      case '-':
        this.total = this.memory - this.total;
        break;
      case '*':
        this.total = this.memory * this.total;
        break;
      case '/':
        this.total = this.memory / this.total;
        break;

      default:
        break;
    }

    this.selectedOperator = '';
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