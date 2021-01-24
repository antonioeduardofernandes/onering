<template>
  <div id="app">
    <div class="main">
      <img class="background_image" src="./assets/background.png" />
      <app-header />
      <div class="content">
        <component :is="component" />
      </div>
    </div>
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

.main {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
}

.background_image {
  position: absolute;
  width: 100%;
  top: -10px;
  opacity: 0.1;
}

.content {
  width: 100%;
  height: 100%;
}
</style>
