<template>
  <!-- <img loading="lazy" encoding="async" alt="Vue logo" src="./assets/logo.png" /> -->
  <div :class="['wrapper--outer', { darkMode: isDarkMode }]">
    <label>
      <input type="checkbox" v-model="isDarkMode" @change="toggleDarkMode">
      <span>Dark Mode</span>
    </label>

    <BreweryList v-cloak/>

  </div>
</template>

<script>
import BreweryList from "./components/BreweryList.vue";

export default {
  name: "App",
  components: {
    BreweryList,
  },
  computed: {
    isDarkMode() {
      return this.$store.state.isDarkMode;
    },
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    },
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
  color: #000;
	background: #fff;

}

[v-cloak] {
  display: none;
}
.darkMode *:not(img, figure) {
	filter: invert(100%);
}


</style>
