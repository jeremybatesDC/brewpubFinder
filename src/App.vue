<template>
  <!-- <img loading="lazy" encoding="async" alt="Vue logo" src="./assets/logo.png" /> -->
  <BreweryList/>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
