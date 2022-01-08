<template>
  <!-- <img loading="lazy" encoding="async" alt="Vue logo" src="./assets/logo.png" /> -->
  <BreweryList v-cloak/>
</template>

<script>
import BreweryList from "./components/BreweryList.vue";

export default {
  name: "App",
  components: {
    BreweryList,
  },
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

[v-cloak] {
  display: none;
}
</style>
