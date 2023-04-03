<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>counter val: {{ counter.count }}</div>
    <button @click="counter.increment()">INCREMENT</button>
  </div>
</template>

<script>
import { createPinia, defineStore } from 'pinia';
import { defineComponent } from '@vue/composition-api';
import HelloWorld from './components/HelloWorld.vue';

export const pinia = createPinia();

const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count += 1;
    },
  },
});

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const counter = useCounterStore(pinia);
    return {
      counter,
    };
  },
  methods: {
    testMethod() {},
  },
  computed: {
    test() {
      return 'test';
    },
  },
  data: () => ({}),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
