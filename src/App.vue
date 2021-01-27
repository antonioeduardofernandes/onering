<template>
  <div id="app">
    <img class="background_image" src="./assets/background.png" />
    <main-header />
    <div class="main">
      <keep-alive>
        <component :is="component" />
      </keep-alive>
    </div>
    <bottom-nav @navigateTo="navigateTo($event)" />
  </div>
</template>

<script>
import { ref } from "vue"
import MainHeader from "./components/interface/MainHeader"
import BottomNav from "./components/interface/BottomNav"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Combat from "./pages/Combat"
import Inventory from "./pages/Inventory"
import Journeys from "./pages/Journeys"
import Campaign from "./pages/Campaign"
export default {
  components: {
    BottomNav,
    MainHeader,
    Home,
    Skills,
    Combat,
    Inventory,
    Journeys,
    Campaign,
  },
  setup() {
    const component = ref("Home")

    const navigateTo = e => (component.value = e)
    return { component, navigateTo }
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
  --gray-dark: #424242;
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
  font-size: 2vh;
}

body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#app {
  height: 100%;
  width: 100%;
  color: var(--white);
  background: var(--bg);
  display: flex;
  flex-flow: column;
}

#app .main {
  margin-top: 1rem;
  overflow: hidden;
  z-index: 2;
  margin-bottom: 4rem;
  padding: 1rem;
}

.background_image {
  position: fixed;
  width: 100%;
  top: -10px;
  opacity: 0.1;
}
</style>
