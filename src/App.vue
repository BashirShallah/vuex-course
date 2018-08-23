<template>
  <div id="app">
    <counter></counter>
    <info></info>
    <like></like>
  </div>
</template>

<script>
import counter from "./components/counter";
import info from "./components/info";
import like from "./components/like";

export default {
  name: 'app',
  components: {
    like,
    counter,
    info
  }
}
</script>
