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

/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
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
