<template>
  <div id="home">
    <div class="traits">
      <div class="title">ASPECTOS</div>
      <div class="list">
        <span v-for="(trait, index) in character.traits" :key="index">{{ trait }}, </span>
      </div>
    </div>
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
#home {
  padding: 1rem;
}
.traits .title {
  border-bottom: 1px solid rgba(100, 100, 100, 0.3);
  margin-bottom: 0.4rem;
}

.traits .list span {
  text-transform: capitalize;
  font-size: 0.9rem;
}
</style>
