<template>
  <div id="bottom_nav">
    <img
      class="link"
      v-for="(link, index) in links"
      :key="index"
      @click="navigateTo(link.path)"
      :src="require(`../../assets/${link.icon}.png`)"
    />
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  setup(_, { emit }) {
    const links = ref([
      { icon: "character", path: "Home" },
      { icon: "target", path: "Skills" },
      { icon: "sword", path: "Combat" },
      { icon: "cup", path: "Inventory" },
      { icon: "tent", path: "Journeys" },
      { icon: "book", path: "Campaign" },
    ])

    const navigateTo = path => {
      emit("navigateTo", path)
    }
    return { links, navigateTo }
  },
}
</script>

<style scoped>
#bottom_nav {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.6rem 1rem;
  justify-content: space-between;
  background-color: #424242;
}
</style>
