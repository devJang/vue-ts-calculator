<template>
  <div class="box">
    <div class="display">
      <input
        v-model.lazy="total"
        @keydown.enter="submit"
        type="text"
        size="15.75"
      >
    </div>
    <div class="keys">
      <p>
        <button @click="clearTotal" class="button gray">mrc</button>
        <button @click="addNumber" class="button gray">(</button>
        <button @click="addNumber" class="button gray">)</button>
        <button @click="addNumber" class="button pink">/</button>
      </p>
      <p>
        <button @click="addNumber" class="button red">7</button>
        <button @click="addNumber" class="button red">8</button>
        <button @click="addNumber" class="button red">9</button>
        <button @click="addNumber" class="button pink">*</button>
      </p>
      <p>
        <button @click="addNumber" class="button red">4</button>
        <button @click="addNumber" class="button red">5</button>
        <button @click="addNumber" class="button red">6</button>
        <button @click="addNumber" class="button pink">-</button>
      </p>
      <p>
        <button @click="addNumber" class="button red">1</button>
        <button @click="addNumber" class="button red">2</button>
        <button @click="addNumber" class="button red">3</button>
        <button @click="addNumber" class="button pink">+</button>
      </p>
      <p>
        <button @click="addNumber" class="button red">0</button>
        <button @click="addNumber" class="button red">.</button>
        <button @click="addNumber" class="button red">c</button>
        <button @click="submit" class="button orange">=</button>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
  total: string = '';

  addNumber({ target }: { target: HTMLInputElement }) {
    this.total += target.textContent;
  }

  clearTotal() {
    this.total = '';
  }

  submit() {
    let { total } = this;
    // TODO: Dynamic Operator
    // let memoryNumber = [];
    // let memoryOperator: any[] = [];
    let newArr: string[] = [];
    let result: number = 0;

    // 현재 한자리의 이항 연산만 가능
    if (total.includes('+')) {
      newArr = total.split('+');

      console.log(newArr);

      result = Number(total[0]) + Number(total[2]);
    }

    // TODO: Dynamic Operator
    // for (let i = 0; i < total.length; i++) {
    //   if (total[i] === '+') {
    //     memoryOperator.push(total[i]);
    //   }
    //   if (total[i] === '-') memoryOperator.push(total[i]);
    //   if (total[i] === '*') memoryOperator.push(total[i]);
    //   if (total[i] === '/') memoryOperator.push(total[i]);
    //   memoryNumber.push(total[i]);
    // }
    // console.log(memoryNumber);
    // console.log(memoryOperator);

    this.total = String(result);
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

.display {
  background-color: #222;
  width: 220px;
  position: relative;
  left: 15px;
  top: 20px;
  height: 40px;
}

.display input {
  position: relative;
  left: 2px;
  top: 2px;
  height: 35px;
  color: black;
  background-color: #bccd95;
  font-size: 21px;
  text-align: right;
}

.keys {
  position: relative;
  top: 15px;
}
.button {
  width: 40px;
  height: 30px;
  border: none;
  border-radius: 8px;
  margin-left: 17px;
  cursor: pointer;
  border-top: 2px solid transparent;
}

.button.gray {
  color: white;
  background-color: #6f6f6f;
  border-bottom: black 2px solid;
  border-top: 2px #6f6f6f solid;
}

.button.pink {
  color: black;
  background-color: #ff4561;
  border-bottom: black 2px solid;
}

.button.red {
  color: red;
  background-color: 303030;
  border-bottom: black 2px solid;
  border-top: 2px 303030 solid;
}

.button.orange {
  color: black;
  background-color: FF9933;
  border-bottom: black 2px solid;
  border-top: 2px FF9933 solid;
}

.gray:active {
  border-top: black 2px solid;
  border-bottom: 2px #6f6f6f solid;
}

.pink:active {
  border-top: black 2px solid;
  border-bottom: #ff4561 2px solid;
}

.black:active {
  border-top: black 2px solid;
  border-bottom: #303030 2px solid;
}

.orange:active {
  border-top: black 2px solid;
  border-bottom: FF9933 2px solid;
}

p {
  line-height: 10px;
}
</style>