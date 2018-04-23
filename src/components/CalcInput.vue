<template>
  <div class="display">
    <input
      :value="total"
      @change="inputChange"
      @keydown.enter="submit"
      @keydown.shift.56="isOperator"
      @keydown.shift.187="isOperator"
      @keydown.189="isOperator"
      @keydown.191="isOperator"
      type="text"
      size="15.75"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  props: {
    total: Number,
  },
})
export default class CalcInput extends Vue {
  inputChange(event: { target: HTMLInputElement }): void {
    this.$emit('input', event.target.value);
  }

  isOperator(event: { target: HTMLInputElement }): void {
    this.$emit('isOperator', event.target.value);
  }
}
</script>

<style scoped>
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
</style>
