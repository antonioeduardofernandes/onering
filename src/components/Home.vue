<template>
  <div id="home">
    <div class="traits"></div>
  </div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
export default {
  setup() {
    const store = useStore()
    const character = computed(() => store.state.character)
    return { character }
  },
}
</script>

<style scoped>
.traits {
  
}
</style>
