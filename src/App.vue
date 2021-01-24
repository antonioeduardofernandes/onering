<template>
  <div id="app">
    <app-header />
    <component :is="component" />
    <bottom-nav />
  </div>
</template>

<script>
import { ref } from "vue"
import AppHeader from "./components/AppHeader"
import BottomNav from "./components/BottomNav"
import Home from "./components/Home"
export default {
  components: {
    Home,
    BottomNav,
    AppHeader,
  },
  setup() {
    const component = ref("Home")
    return { component }
  },
}
</script>

<style>
:root {
  --bg: #1f1f1f;
  --gold: #d3bc81;
  --red: #dd5e5e;
  --orange: #fd953c;
  --blue: #3a96aa;
  --green: #05947a;
  --white: #ffffff;
  --black: #000000;
  --glow: 1px 1px 7px rgba(255, 255, 255, 0.26);
}

body,
html,
* {
  font-family: "Saira Condensed", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
  font-size: 2.2vh;
}

body {
  height: 100vh;
  width: 100vw;
}

#app {
  height: 100%;
  width: 100%;
  color: var(--white);
  background: var(--bg);
  overflow: hidden;
  display: grid;
}
</style>
