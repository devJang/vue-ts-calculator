<template>
  <div class="display">
    <input
      v-model.lazy="total"
      @keydown.enter="submit"
      type="text"
      size="15.75"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'CalcInput',
  props: {
    total: String,
  }
})
export default class CalcInput extends Vue {
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
