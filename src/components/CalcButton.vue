<template>
  <button
    @click="eventFunc"
    :class="className"
  >
    {{ showText }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'CalcButton',
  props: {
    className: String,
    eventFunc: Function,
    showText: String
  }
})
export default class CalcButton extends Vue {
}
</script>

<style scoped>
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
</style>