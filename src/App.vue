<template>
  <div class="box">
    <calc-input :total="total" />
    <div class="keys">
      <p>
        <calc-button :eventFunc="clearTotal" :className="'button gray'" showText="mrc" />
        <calc-button :eventFunc="addNumber" :className="'button gray'" showText="(" />
        <calc-button :eventFunc="addNumber" :className="'button gray'" showText=")" />
        <calc-button :eventFunc="clickOperator" :className="'button pink'" showText="/" />
      </p>
      <p>
        <calc-button :eventFunc="addNumber" :className="'button red'" showText="7" />
        <calc-button :eventFunc="addNumber" :className="'button red'" showText="8" />
        <calc-button :eventFunc="addNumber" :className="'button red'" showText="9" />
        <calc-button :eventFunc="clickOperator" :className="'button pink'" showText="*" />
      </p>
      <p>
        <calc-button :eventFunc="addNumber" :className="'button red'" showText="4" />
        <calc-button :eventFunc="addNumber" :className="'button red'" showText="5" />
        <calc-button :eventFunc="addNumber" :className="'button red'" showText="6" />
        <calc-button :eventFunc="clickOperator" :className="'button pink'" showText="-" />
      </p>
      <p>
        <calc-button :eventFunc="addNumber" :className="'button red'" showText="1" />
        <calc-button :eventFunc="addNumber" :className="'button red'" showText="2" />
        <calc-button :eventFunc="addNumber" :className="'button red'" showText="3" />
        <calc-button :eventFunc="clickOperator" :className="'button pink'" showText="+" />
      </p>
      <p>
        <calc-button :eventFunc="addNumber" :className="'button red'" showText="0" />
        <calc-button :eventFunc="addNumber" :className="'button red'" showText="." />
        <calc-button :eventFunc="addNumber" :className="'button red'" showText="c" />
        <calc-button :eventFunc="submit" :className="'button orange'" showText="=" />
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
      CalcButton
    }
})
export default class App extends Vue {
  total: number = 0;
  memory: number = 0;

  addNumber({ target }: { target: HTMLInputElement }): void {
    this.total += Number(target.textContent!.trim());
  }

  clearTotal(): void {
    this.total = 0;
  }

  isOperator(operator: string): boolean {
    const { total } = this;
    return total.includes(operator)
  }

  clickOperator({ target }: { target: HTMLInputElement }): void {
    this.memory = this.total;
    this.clearTotal();
  }

  submit(): void {
    let { total } = this;
    let result: number = 0;
    
    if (this.isOperator('+')) {
      this.total = (this.memory + this.total).toString();
    }
    
    if (this.isOperator('-')) {
      this.total = (this.memory - this.total).toString();
    }
    
    if (this.isOperator('*')) {
      this.total = (this.memory * this.total).toString();
    }
    
    if (this.isOperator('/')) {
      this.total = (this.memory / this.total).toString();
    }

    console.log(this.memory + ' ' + this.total)

    // this.total = String(result);
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