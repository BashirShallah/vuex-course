<template>
  <div id="app">
    <counter :counter="counter"
             v-on:increase="increase" 
             v-on:decrease="decrease"></counter>
    <info :counter="counter" ></info>
  </div>
</template>

<script>
import counter from "./components/counter";
import info from "./components/info";

export default {
  name: 'app',
  data(){
    return {
      counter: 0
    }
  },
  methods: {
    increase(){
      this.counter ++;
    },
    decrease(){
      this.counter --;
    }
  },
  components: {
    counter,
    info
  }
}
</script>
