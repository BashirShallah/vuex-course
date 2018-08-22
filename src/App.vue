<template>
  <div id="app">
    <counter></counter>
    <info></info>
  </div>
</template>

<script>
import counter from "./components/counter";
import info from "./components/info";

export default {
  name: 'app',
  components: {
    counter,
    info
  }
}
</script>
