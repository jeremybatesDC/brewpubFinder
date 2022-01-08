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

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

figure {
  margin: 0;
}

label span {
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 2rem;
  color: #000;
	background: #fff;

}

[v-cloak] {
  display: none;
}
.darkMode,
.darkMode *:not(img) {
	filter: invert(100%);
}
</style>
